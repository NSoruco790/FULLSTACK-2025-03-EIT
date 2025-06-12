/*
    CALLBACK Y FUNCIÓN DE ORDEN SUPERIOR
*/

// Función de orden superior
const calculate = (a, b, callback) => {
    const result = callback(a, b);  // Aquí se ejecuta el callback
    console.log(result);
}

// Funciones callback
const calculateSum = (a, b) => a + b;
const calculateSubtraction = (a, b) => a - b;
const calculateMultiplication = (a, b) => a * b;
const calculateDivision = (a, b) => a / b;
const validateEvenNumber = (number) => {
    const isEvenNumber = number % 2 === 0;
    return isEvenNumber;
}

// Ejecuciones de la función de orden superior con diferentes callbacks
calculate(10, 5, calculateSum);
calculate(10, 5, calculateSubtraction);
calculate(10, 5, calculateMultiplication);
calculate(10, 5, calculateDivision);

const numbers = [10, 20, 7, 50, 15, 3, 1, 14];
const evenNumbers = numbers.filter((number) => validateEvenNumber(number));
console.log("Números pares:", evenNumbers);
