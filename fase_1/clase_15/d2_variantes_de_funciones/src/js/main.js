/*
    VARIANTES DE FUNCIONES
*/

// Función declarada
function testA() {
    console.log("Soy la función A");
}

// Función expresada partiendo desde una función nombrada.
const testB = function probarB() {
    console.log("Soy la función B");
}


// Función expresada partiendo desde una función anónima.
const testC = function () {
    console.log("Soy la función C");
}

// Función expresada partiendo desde una función multi-lineal de flecha (arrow function).
const testD = () => {
    console.log("Soy la función D");
}

// Función expresada partiendo desde una función mono-lineal de flecha (arrow function).
const testE = () => console.log("Soy la función E");


// Función expresada partiendo desde una función multi-lineal de flecha con retorno explicito.
const sumar = (a, b) => {
    const c = a+b;
    return c;
};
console.log(sumar(5, 3));

// Función expresada partiendo desde una función mono-lineal de flecha con retorno implícito.
const restar = (a, b) => a - b;
console.log(restar(5, 3));