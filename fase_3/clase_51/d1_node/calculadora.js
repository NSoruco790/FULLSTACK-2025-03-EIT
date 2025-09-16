/*
    NODE JS: Ejemplo que demuestra el uso de JavaScript en el backend.

    En la consola, este archivo se ejecuta con el comando: node calculadora.js
    desde la carpeta contenedora.
*/

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

console.log("Resultado de la suma: ", add(5, 10));
console.log("Resultado de la resta: ", subtract(15, 7));
console.log("Resultado de la multiplicación: ", multiply(5, 2));
console.log("Resultado de la división: ", divide(10, 2));
