/*
    CONVERSIÓN DE OBJETO A ARRAY
*/

const student = {
    firstName: "Juan",
    lastName: "Pérez",
    age: 21,
    rating: 4.6,
    greeting: function (params) {
        return "Hola Mundo";
    }
};

const keyNames = Object.keys(student);
console.log("Extracción de nombres de propiedades como array:", keyNames);

const values = Object.values(student);
console.log("Extracción de valores de propiedades como array:", values);

const keyValuePairs = Object.entries(student);
console.log("Extracción de pares (key:value) como array de arrays:", keyValuePairs);
