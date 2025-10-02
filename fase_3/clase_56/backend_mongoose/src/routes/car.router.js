import { Router } from "express";
import { isValidId } from "../config/mongoose.config.js";
import CarModel from "../models/product.model.js";
import { deleteImageFile, existsImageFile } from "../utils/imageFileHandler.js";
import uploader from "../utils/uploader.js";

const router = Router();

// Función privada para manejar errores de validación
const handleValidationError = (error, res) => {
    if (error.name === "ValidationError") {
        const firstError = Object.values(error.errors)[0];
        return res.status(400).json({ status: "error", message: firstError.message });
    }

    if (error.code === 11000) {
        return res.status(400).json({ status: "error", message: "La placa ya está registrada" });
    }

    return false;
};

// Ruta para obtener los coches con filtros. URL: http://localhost:3000/api/cars?brand=Fiat&year=2021
router.get("/", async (req, res) => {
    try {
        const { brand, model, year, licensePlate } = req.query;

        const filters = {};
        if (brand) filters.brand = { $regex: brand, $options: "i" };
        if (model) filters.model = { $regex: model, $options: "i" };
        if (year) filters.year = year;
        if (licensePlate) filters.licensePlate = licensePlate;
        console.log(filters);

        const cars = await CarModel.find(filters);

        res.status(200).json({ status: "success", payload: cars });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

// Ruta para obtener un coche por su ID. URL: http://localhost:3000/api/cars/1
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({ status: "error", message: "El id es inválido" });
        }

        const car = await CarModel.findById(id);

        if (!car) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a un coche registrado" });
        }

        res.status(200).json({ status: "success", payload: car });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

// Ruta para crear un coche. URL: http://localhost:3000/api/cars
router.post("/", uploader.single("image"), async (req, res) => {
    try {
        const { brand, model, year, licensePlate } = req.body;

        if (!brand || !model || !year || !licensePlate) {
            if (req.file && req.file.filename) {
                // Se elimina la imagen cuando hay una imagen subida pero faltan datos de relevancia
                await deleteImageFile(req.file.filename);
            }
            return res.status(400).json({ status: "error", message: "Faltan datos de relevancia" });
        }

        const carModel = new CarModel({
            brand,
            model,
            year: Number(year),
            licensePlate,
            thumbnail: req.file ? req.file.filename : "default.jpg",
        });

        const createdCar = await carModel.save();

        res.status(201).json({ status: "success", payload: createdCar });
    } catch (error) {
        if (req.file && req.file.filename) {
            // Se elimina la nueva imagen cuando hay un error
            await deleteImageFile(req.file.filename);
        }

        if (handleValidationError(error, res)) return;

        res.status(500).json({ status: "error", message: error.message });
    }
});

// Ruta para actualizar un coche por su ID. URL: http://localhost:3000/api/cars/1
router.put("/:id", uploader.single("image"), async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({ status: "error", message: "El id es inválido" });
        }

        const car = await CarModel.findById(id);

        if (!car) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a un coche registrado" });
        }

        if (req.body.brand) car.brand = req.body.brand;
        if (req.body.model) car.model = req.body.model;
        if (req.body.year) car.year = req.body.year;
        if (req.body.licensePlate) car.licensePlate = req.body.licensePlate;

        if (req.file && req.file?.filename !== car.thumbnail) {
            if (car.thumbnail && car.thumbnail !== "default.jpg" && await existsImageFile(car.thumbnail)) {
                // Se elimina la imagen del coche si no es la imagen por defecto
                await deleteImageFile(car.thumbnail);
            }
            car.thumbnail = req.file.filename;
        }

        const updatedCar = await car.save();

        res.status(200).json({ status: "success", payload: updatedCar });
    } catch (error) {
        if (req.file?.filename) {
            // Se elimina la nueva imagen cuando hay un error
            await deleteImageFile(req.file.filename);
        }

        if (handleValidationError(error, res)) return;

        res.status(500).json({ status: "error", message: error.message });
    }
});

// Ruta para eliminar un coche por su ID. URL: http://localhost:3000/api/cars/1
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({ status: "error", message: "El id es inválido" });
        }

        const car = await CarModel.findById(id);

        if (!car) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a un coche registrado" });
        }

        res.status(200).json({ status: "success", payload: car });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
});

export default router;