/*
    MÉTODOS AVANZADOS DE ARRAY
*/

const colors = ["blanco", "verde", "rojo", "azul", "negro"];

// Mostrar cada color del array
colors.forEach((item) => console.log(item));

// Crear un nuevo array con los colores en mayúsculas
const colorsInUpperCase = colors.map((item) => item.toUpperCase());
console.log("Colores en mayúsculas:", colorsInUpperCase);

// Filtrar colores que contienen la letra "o"
const filteredColors = colors.filter((item) => item.includes("o"));
console.log("Colores que contienen la letra 'o':", filteredColors);

// Sumar números de un array
const numbers = [ 10, 4, 7, 16, 3];
const initialValue = 15;
const total = numbers.reduce((accumulator, value) => accumulator + value, initialValue);
console.log("La sumatoria de números (incluye valor inicial) es:", total);

// Insertar un nuevo color en el índice 2 sin eliminar nada
console.log("Insertar 'gris' en el índice 2:", colors.splice(2, 0, "gris"), colors);

// Reemplazar el color en el índice 3 con 'rosado'
console.log("Reemplazar el color en el índice 3 con 'rosado':", colors.splice(3, 1, "rosado"), colors);

// Eliminar el color en el índice 1
console.log("Eliminar el color en el índice 1:", colors.splice(1, 1), colors);

// Verificar si el array incluye el color 'negro'
console.log("¿El array incluye el color 'negro'?:", colors.includes("negro")); // Sensible a mayúsculas/minúsculas

// Obtener el índice de un color específico
console.log("¡Cuál es el índice del 'negro' en el array colors?", colors.indexOf("negro"));
console.log("¡Cuál es el índice del 'rosa' en el array colors?", colors.indexOf("rosa")); // No existe (-1)

const subjectsAndGrades = [
    [ "Física", [10, 10] ],
    [ "Química", [7] ],
    [ "Lengua", [8, 9] ],
    [ "Matemática", [ 6, 7, 4] ]
];

// Encontrar el índice de la materia 'Lengua'
const index = subjectsAndGrades.findIndex((item) => item[0] == "Lengua");
console.log("Índice de la materia 'Lengua':", index);

// Obtener las notas de la materia 'Lengua'
const grades = subjectsAndGrades.find((item) => item[0] === "Lengua")[1];
console.log("Las notas en 'Lengua' son:", grades);

console.log("Invertir el orden de los colores", colors.reverse());
console.log("Convertir array de colores en string", colors.join());

const ages = [18, 19, 81, 50, 29, 31, 18, 15, 45];
console.log("¿Hay algún menor de edad?", ages.some((item) => item < 18));       // Hay uno con 15 años
console.log("¿Son todos mayores de edad?", ages.every((item) => item >= 18));   // Todos no son mayores de edad

// Aplanar el array de materias y notas
console.table(subjectsAndGrades.flat(2));
