import { Schema, model } from "mongoose";

const MIN_YEAR = 1903;
const MAX_YEAR = new Date().getFullYear();

const carSchema = new Schema({
    brand: {
        type: String,
        required: [ true, "La marca es obligatoria" ],
        uppercase: true,
        trim: true,
    },
    model: {
        type: String,
        required: [ true, "El modelo es obligatorio" ],
        uppercase: true,
        trim: true,
    },
    year: {
        type: Number,
        required: [ true, "El año de fabricación es obligatorio" ],
        min: [ MIN_YEAR, `El año debe ser mayor o igual a ${MIN_YEAR}` ],
        max: [ MAX_YEAR, `El año no puede ser mayor a ${MAX_YEAR}` ],
    },
    licensePlate: {
        type: String,
        required: [ true, "La patente es obligatoria" ],
        uppercase: true,
        trim: true,
        unique: true,
        validate: {
            validator: async function(licensePlate) {
                const CarModel = this.constructor;
                const countDocuments = await CarModel.countDocuments({
                    _id: { $ne: this._id },
                    licensePlate,
                });
                return countDocuments === 0;
            },
            message: "Esta patente ya se encuentra registrada",
        },
    },
    thumbnail: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true, // Creará dos campos: createdAt y updatedAt
    versionKey: false, // No creará el campo __v
});

const CarModel = model("cars", carSchema);

export default CarModel;