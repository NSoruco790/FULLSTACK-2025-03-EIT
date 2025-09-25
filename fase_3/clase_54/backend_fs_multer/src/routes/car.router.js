import { Router } from "express";
import { deleteImageFile, existsImageFile } from "../utils/imageFileHandler.js";
import { readJsonFile, writeJsonFile } from "../utils/jsonFileHandler.js";
import uploader from "../utils/uploader.js";

const router = Router();
const CARS_FILE_NAME = "cars.json";

// Ruta para obtener los coches con filtros. URL: http://localhost:3000/api/cars?brand=Fiat&year=2021
router.get("/", async (req, res) => {
    try {
        const { model, year } = req.query;
        const cars = await readJsonFile(CARS_FILE_NAME);

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
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const cars = await readJsonFile(CARS_FILE_NAME);
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
router.post("/", uploader.single("image"), async (req, res) => {
    try {
        const { brand, model, year } = req.body;

        if (!brand || !model || !year) {
            if (req.file && req.file.filename) {
                // Se elimina la imagen cuando hay una imagen subida pero faltan datos de relevancia
                await deleteImageFile(req.file.filename);
            }
            return res.status(400).json({ status: "error", message: "Faltan datos de relevancia" });
        }

        const cars = await readJsonFile(CARS_FILE_NAME);
        const newId = cars.length > 0 ? Math.max(...cars.map((car) => car.id)) + 1 : 1;

        const newCar = {
            id: newId,
            brand,
            model,
            year,
            thumbnail: req.file ? req.file.filename : "default.jpg",
        };

        cars.push(newCar);
        await writeJsonFile(CARS_FILE_NAME, cars);

        res.status(201).json({ status: "success", payload: newCar });
    } catch (error) {
        if (req.file && req.file.filename) {
            // Se elimina la nueva imagen cuando hay un error
            await deleteImageFile(req.file.filename);
        }
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Ruta para actualizar un coche por su ID. URL: http://localhost:3000/api/cars/1
router.put("/:id", uploader.single("thumbnail"), async (req, res) => {
    try {
        const { id } = req.params;
        const cars = await readJsonFile(CARS_FILE_NAME);

        const index = cars.findIndex((car) => car.id === Number(id));
        if (index < 0) {
            if (req.file?.filename) {
                // Se elimina la nueva imagen cuando hay un error
                await deleteImageFile(req.file.filename);
            }
            return res.status(404).json({ status: "error", message: "El id no corresponde a un coche registrado" });
        }

        const car = cars[index];
        if (req.body.brand) car.brand = req.body.brand;
        if (req.body.model) car.model = req.body.model;
        if (req.body.year) car.year = req.body.year;

        if (req.file && req.file?.filename !== car.thumbnail) {
            if (car.thumbnail && car.thumbnail !== "default.jpg" && await existsImageFile(car.thumbnail)) {
                // Se elimina la imagen del coche si no es la imagen por defecto
                await deleteImageFile(car.thumbnail);
            }
            car.thumbnail = req.file.filename;
        }

        cars[index] = car;
        await writeJsonFile(CARS_FILE_NAME, cars);

        res.status(200).json({ status: "success", payload: car });
    } catch (error) {
        if (req.file?.filename) {
            // Se elimina la nueva imagen cuando hay un error
            await deleteImageFile(req.file.filename);
        }
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

// Ruta para eliminar un coche por su ID. URL: http://localhost:3000/api/cars/1
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const cars = await readJsonFile(CARS_FILE_NAME);
        const index = cars.findIndex((car) => car.id === Number(id));

        if (index < 0) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a un coche registrado" });
        }

        const car = cars[index];
        cars.splice(index, 1);
        await writeJsonFile(CARS_FILE_NAME, cars);

        if (car.thumbnail && car.thumbnail !== "default.jpg") {
            // Se elimina la imagen del coche si no es la imagen por defecto
            await deleteImageFile(car.thumbnail);
        }

        res.status(204).json({ status: "success" });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

export default router;