/*
    ITERACIÓN DE OBJETOS CON FOR...IN
*/

const student = {
    firstName: "Juan",
    lastName: "Pérez",
    age: 21,
    rating: 4.6,
    greeting: function (params) {
        return "Hola Mundo";
    }
};

for (const key in student) {
    if (student.hasOwnProperty(key)) {
        const keyName = key;
        const keyValue = student[key];
        console.log("\nNombre de la propiedad:", keyName);
        console.log("Valor de la propiedad:", keyValue);

        if (typeof keyValue === 'function') {
            console.log("Retorno de la propiedad:", student[keyName]());
        }
    }
}
