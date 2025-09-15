/*
    OPERADOR REST
*/

/* *** Desestructuración de objetos con rest *** */
const student = {
    firstName: "Juan",
    lastName: "Pérez",
    age: 21,
    state: true
};
const { lastName, ...rest } = student;
console.log("Desestructuración de objetos con resto: ", lastName, rest);

/* **** Desestructuración de array con rest **** */
const colors = ["azul", "blanco", "rojo", "verde"];
const [firstColor, ...restColors] = colors;
console.log("Desestructuración de array con resto: ", firstColor, restColors);

/* ******* Funciones con parámetros rest ******* */
const calculateSum = (...restParams) => {
    const result = restParams.reduce((accumulator, value) => accumulator + value, 0);
    console.log(result);
};
calculateSum(1, 2, 8);
calculateSum(10, 5, 7, 3);