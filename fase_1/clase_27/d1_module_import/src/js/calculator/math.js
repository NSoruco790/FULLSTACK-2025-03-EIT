/*
    MANEJO DE ERRORES CON MODULE IMPORT
*/

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        throw new Error("No se puede dividir por 0");
    }

    return a / b;
}

// Exportación por defecto
export default {
    multiply,
    divide
};