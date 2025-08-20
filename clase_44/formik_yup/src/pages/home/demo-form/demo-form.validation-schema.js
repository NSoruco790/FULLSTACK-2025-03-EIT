import * as Yup from "yup";

const maxAge = 100;
const minAge = 18;

export const validationSchema = Yup.object({
    age: Yup
        .number()
        .min(minAge, `Debes ser mayor de ${minAge} años`)
        .max(maxAge, `La edad no puede ser mayor a ${maxAge}`)
        .required("La edad es obligatoria")
        .typeError("La edad debe ser un número"),
    price: Yup
        .number()
        .min(0, "El precio debe ser mayor a 0")
        .required("El precio es obligatorio")
        .typeError("El precio debe ser un número"),
});