/*
    MODULE IMPORT - ES MODULES
*/

// Importaciones nombradas
import { add } from './calculator/add.js';
import { subtract as sub } from './calculator/subtract.js'; // sub es un alias

// Importación por defecto
import math from './calculator/math.js';

const number1 = 10;
const number2 = 2;

console.log(`Resultado de la suma: ${add(number1, number2)}`);
console.log(`Resultado de la resta: ${sub(number1, number2)}`);
console.log(`Resultado de la multiplicación: ${math.multiply(number1, number2)}`);
console.log(`Resultado de la división: ${math.divide(number1, number2)}`);