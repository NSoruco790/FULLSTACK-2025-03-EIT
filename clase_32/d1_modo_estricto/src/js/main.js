/*
    MODO ESTRICTO
*/

'use strict';

// Descomentar el bloque de código que se deseé probar

/* ****** Uso de variables no declaradas ****** */
// firstName = "Juan";
// console.log(firstName);


/* ******* Borrar variables o funciones ******* */
// function greet() { }
// delete greet;


/* *** Duplicación de nombres de parámetros *** */
// function add(a, a) {
//     return a + a;
// }
// add(5, 2);


/* *** Uso de this en funciones sin contexto ** */
// function getThis() {
//     return this;
// }
// console.log(getThis()); // En modo estricto retorna undefined