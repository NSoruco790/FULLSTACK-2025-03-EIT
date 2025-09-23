import { Router } from "express";
import { cars } from "../data.js";

const router = Router();

// Ruta para obtener los coches con filtros. URL: http://localhost:3000/api/cars?brand=Fiat&year=2021
router.get("/", (req, res) => {
    try {
        const { model, year } = req.query;

        let filteredCars = [...cars];

        if (model) {
            filteredCars = filteredCars.filter((car) => String(car.model).toLowerCase() === String(model).toLowerCase());
        }

        if (year) {
            filteredCars = filteredCars.filter((car) => Number(car.year) === Number(year));
        }

        res.status(200).json({ status: "success", payload: filteredCars });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Ruta para obtener un coche por su ID. URL: http://localhost:3000/api/cars/1
router.get("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const car = cars.find((car) => car.id === Number(id));

        if (!car) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a un coche registrado" });
        }

        res.status(200).json({ status: "success", payload: car });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Ruta para crear un coche. URL: http://localhost:3000/api/cars
router.post("/", (req, res) => {
    try {
        const { brand, model, year } = req.body;

        if (!brand || !model || !year) {
            return res.status(400).json({ status: "error", message: "Faltan datos de relevancia" });
        }

        const newCar = { id: generateId(), brand, model, year };
        cars.push(newCar);

        res.status(201).json({ status: "success", payload: newCar });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Ruta para actualizar un coche por su ID. URL: http://localhost:3000/api/cars/1
router.put("/:id", (req, res) => {
    try {
        const { id } = req.params;

        const values = {};
        if (req.body.brand) values.brand = req.body.brand;
        if (req.body.model) values.model = req.body.model;
        if (req.body.year) values.year = req.body.year;

        const index = cars.findIndex((car) => car.id === Number(id));
        if (index < 0) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a un coche registrado" });
        }

        const updatedCar = { ...cars[index], ...values };
        cars[index] = updatedCar;

        res.status(200).json({ status: "success", payload: updatedCar });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Ruta para eliminar un coche por su ID. URL: http://localhost:3000/api/cars/1
router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;

        const index = cars.findIndex((car) => car.id === Number(id));
        if (index < 0) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a un coche registrado" });
        }

        cars.splice(index, 1);

        res.status(204).json({ status: "success" });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

export default router;