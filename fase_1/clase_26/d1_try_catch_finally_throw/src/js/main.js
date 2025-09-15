/*
    MANEJO DE ERRORES CON TRY...CATCH...FINALLY Y THROW
*/

const student = {
    firstName: "Juan",
    lastName: "Pérez",
    age: 21,
};

try {
    console.log(student.firstName);
    console.log(student.this.subjects[0]);
} catch (error) {
    console.error("Error: Propiedad inexistente");
} finally {
    console.log("El programa continua su ejecución");
}

function calculateDivision(a, b) {
    let result = null;
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Los valores deben ser números.");
        }

        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }

        result = a / b;
    } catch (error) {
        console.error("Se produjo un error:", error.message);
    } finally {
        return result;
    }
}

const result2 = calculateDivision(10, "a");
const result3 = calculateDivision(10, 0);
