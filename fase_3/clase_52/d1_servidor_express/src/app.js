/*
    NODE JS: Ejemplo que demuestra el uso del Framework Express
*/

import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Creación de endpoint para la ruta http://localhost:3000/ejemplo/text
app.get("/ejemplo/text", (req, res) => {
    res.set({ "Content-Type": "text/plain; charset=utf8" });
    res.set({ "x-user-name": "Juan" });
    res.status(200).end("Bienvenidos. Esto es una demostración");
});

// Creación de endpoint para la ruta http://localhost:3000/ejemplo/html
app.get("/ejemplo/html", (req, res) => {
    // res.set({ "Content-Type": "text/html" });
    // res.status(200).end("<div><h1>Bienvenidos</h1><p>Esto es una demostración</p></div>");

    // Versión simplificada
    res.status(200).send("<div><h1>Bienvenidos</h1><p>Esto es una demostración</p></div>");
});

// Creación de endpoint para la ruta http://localhost:3000/ejemplo/json
app.get("/ejemplo/json", (req, res) => {
    const object = {
        welcome: "Bienvenidos",
        description: "Esto es una demostración",
    };

    // res.set({ "Content-Type": "application/json" });
    // res.status(200).end(JSON.stringify(object, null, "\t"));

    // Versión simplificada
    res.status(200).json(object);
});

// Control de rutas inexistentes
app.use((req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Método oyente de solicitudes
app.listen(PORT, HOST, () => {
    console.log(`Ejecutándose en http://${HOST}:${PORT}/ejemplo`);
});