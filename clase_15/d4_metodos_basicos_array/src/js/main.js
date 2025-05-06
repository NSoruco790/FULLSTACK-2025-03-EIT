/*
    MÉTODOS BÁSICOS DE ARRAY
*/

const colors = ["verde", "rojo", "azul"];

console.log('Agregar un elemento (color) al final del array', colors.push("blanco"), colors);
console.log('Agregar un elemento (color) al principio del array', colors.unshift("negro"), colors);
console.log('Eliminar el primer elemento (color) del array', colors.pop(), colors);
console.log('Eliminar el último elemento (color) del array', colors.shift(), colors);