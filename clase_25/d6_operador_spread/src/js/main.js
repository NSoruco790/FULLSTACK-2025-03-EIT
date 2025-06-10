/*
    OPERADOR SPREAD
*/

/* *** Combinación de objetos con spread *** */
const student = {
    firstName: "Juan",
    lastName: "Pérez",
    age: 21,
    number: 1,
};
const address = {
    street: "Av. siempreviva",
    number: 1050,
    country: "USA",
};
const studentWithAddress = { ...student, ...address };
console.log("Combinación de objetos: ", studentWithAddress);

let rating = 4.7;
let state = true;
const studentWithVariables = { ...student, rating, state };
console.log("Combinación de objeto con variables: ", studentWithVariables);

/* **** Combinación de array con spread **** */
const colors = ["azul", "blanco", "rojo", "verde"];
const tones = ["claro", "normal", "oscuro"];
const colorsWithTones = [ ...colors, ...tones];
console.log("Combinación de arrays: ", colorsWithTones);

let black = "negro";
let pink = "rosado";
const colorsWithVariables = [ black, ...colors, pink ];
console.log("Combinación de objeto con variables: ", colorsWithVariables);
