/*
    NODE JS: Ejemplo que demuestra el uso de path y static server
*/

import "dotenv/config";
import express from "express";
import { config as configJson } from "./config/json.config.js";
import { config as configStatic } from "./config/static.config.js";

const app = express();
configJson(app);
configStatic(app);

const PORT = process.env.PORT;
const HOST = process.env.HOST;

// Servidor estático en la ruta http://localhost:3000/api/public/images/img01.jpg

// Control de rutas inexistentes
app.use((req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Método oyente de solicitudes
app.listen(PORT, HOST, () => {
    console.log(`Ejecutándose en http://${HOST}:${PORT}`);
});