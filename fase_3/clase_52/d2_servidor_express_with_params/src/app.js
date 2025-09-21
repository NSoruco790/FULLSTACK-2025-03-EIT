/*
    NODE JS: Ejemplo que demuestra el uso del Framework Express
*/

import "dotenv/config";
import express from "express";
import { cars, generateId } from "./data.js";

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Middleware: convierte el cuerpo JSON de la solicitud y lo guarda en `req.body`.
app.use(express.json());

// Endpoint para obtener los coches con filtros. URL: http://localhost:3000/api/cars?brand=Fiat&year=2021
app.get("/api/cars", (req, res) => {
    const { model, year } = req.query;

    let filteredCars = [...cars];

    if (model) {
        filteredCars = filteredCars.filter((car) => String(car.model).toLowerCase() === String(model).toLowerCase());
    }

    if (year) {
        filteredCars = filteredCars.filter((car) => Number(car.year) === Number(year));
    }

    res.status(200).send(filteredCars);
});

// Endpoint para obtener un coche en específico. URL: http://localhost:3000/api/cars/1
app.get("/api/cars/:id", (req, res) => {
    const { id } = req.params;
    const car = cars.find((car) => car.id === Number(id));

    if (!car) {
        return res.status(404).send({ message: "El id no corresponde a un coche registrado" });
    }

    res.status(200).send(car);
});

// Endpoint para crear un coche. URL: http://localhost:3000/api/cars
app.post("/api/cars/", (req, res) => {
    const { brand, model, year } = req.body;

    if (!brand || !model || !year) {
        return res.status(400).send({ message: "Faltan datos de relevancia" });
    }

    const newCar = { id: generateId(), brand, model, year };
    cars.push(newCar);

    res.status(201).send(newCar);
});

// Endpoint para modificar un coche. URL: http://localhost:3000/api/cars/1
app.put("/api/cars/:id", (req, res) => {
    const { id } = req.params;

    const values = {};
    if (req.body.brand) values.brand = req.body.brand;
    if (req.body.model) values.model = req.body.model;
    if (req.body.year) values.year = req.body.year;

    const index = cars.findIndex((car) => car.id === Number(id));
    if (index < 0) {
        return res.status(404).send({ message: "El id no corresponde a un coche registrado" });
    }

    const updatedCar = { ...cars[index], ...values };
    cars[index] = updatedCar;

    res.status(200).send(updatedCar);
});

// Endpoint para actualizar el año de un coche. URL: http://localhost:3000/api/cars/2/year
app.patch("/api/cars/:id/year", (req, res) => {
    const { id } = req.params;
    const { year } = req.body;

    if (!year) {
        return res.status(400).send({ message: "Faltan datos de relevancia" });
    }

    const index = cars.findIndex((car) => car.id === Number(id));
    if (index < 0) {
        return res.status(404).send({ message: "El id no corresponde a un coche registrado" });
    }

    cars[index].year = Number(year);

    res.status(204).send();
});

// Endpoint para eliminar un coche en específico. URL: http://localhost:3000/api/cars/1
app.delete("/api/cars/:id", (req, res) => {
    const { id } = req.params;

    const index = cars.findIndex((car) => car.id === Number(id));
    if (index < 0) {
        return res.status(404).send({ message: "El id no corresponde a un coche registrado" });
    }

    cars.splice(index, 1);

    res.status(204).send();
});

// Control de rutas inexistentes
app.use((req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Método oyente de solicitudes
app.listen(PORT, HOST, () => {
    console.log(`Ejecutándose en http://${HOST}:${PORT}/api/cars`);
});