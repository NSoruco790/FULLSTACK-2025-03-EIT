/*
    DESTRUCTURING
*/

/* *** Desestructuración de objetos *** */
const student = {
    firstName: "Juan",
    lastName: "Pérez",
    age: 21,
    rating: 4.6,
    greeting: function (params) {
        return "Hola Mundo";
    }
};
const { firstName, age } = student;
console.log("Desestructuración de objeto: ", firstName, age);

/* **** Desestructuración de array **** */
const colors = ["azul", "blanco", "rojo", "verde"];
const [ firstColor, secondColor ] = colors;
console.log("Desestructuración de array (es por orden): ", firstColor, secondColor);