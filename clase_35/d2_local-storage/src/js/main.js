/*
    LOCAL STORAGE
*/

const student = {
    firstName: "Juan",
    lastName: "Medina",
    age: 21,
    comment: "👋 ¡Hola, estoy trabajando con cookies! 🍪",
    isActive: true
};

// Guardar la preferencia del usuario
localStorage.setItem('theme', 'dark');

// Recuperar la preferencia
const valueOfItemForTheme = localStorage.getItem('theme');
console.log(valueOfItemForTheme);

// Guardar objeto en formato JSON
localStorage.setItem('student', JSON.stringify(student));

// Recuperar y convertir de nuevo a objeto
const valueOfItemForStudent = localStorage.getItem('student');
console.log(JSON.parse(valueOfItemForStudent));

// Eliminar una clave específica
localStorage.removeItem('theme');

// Limpiar todo el almacenamiento local del dominio
// localStorage.clear();