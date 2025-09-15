/*
    SESSION STORAGE
*/

const student = {
    firstName: "Juan",
    lastName: "Medina",
    age: 21,
    comment: "👋 ¡Hola, estoy trabajando con cookies! 🍪",
    isActive: true
};

// Guardar la preferencia del usuario
sessionStorage.setItem('theme', 'dark');

// Recuperar la preferencia
const valueOfItemForTheme = sessionStorage.getItem('theme');
console.log(valueOfItemForTheme);

// Guardar objeto en formato JSON
sessionStorage.setItem('student', JSON.stringify(student));

// Recuperar y convertir de nuevo a objeto
const valueOfItemForStudent = sessionStorage.getItem('student');
console.log(JSON.parse(valueOfItemForStudent));

// Eliminar una clave específica
sessionStorage.removeItem('theme');

// Limpiar todo el almacenamiento se sesión del dominio
// sessionStorage.clear();