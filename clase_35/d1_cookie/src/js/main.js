/*
    COOKIES
*/

import { getCookie, removeCookie } from "./helpers.js";

const dateUTC = new Date('2025-07-21 18:00:00').toUTCString();
const student = {
    firstName: "Juan",
    lastName: "Medina",
    age: 21,
    isActive: true,
    comment: "👋 ¡Hola, estoy trabajando con cookies! 🍪"
};


// Establecer una cookie sin expiración ni path (sin expires entonces es una cookie de sesión)
document.cookie = "demo1=Valor de ejemplo 1;";
console.log(document.cookie);

// Establecer una cookie con expiración y accesible desde todo el sitio
document.cookie = "demo2=Valor de ejemplo 2; expires=Mon, 21 Jul 2025 00:00:00 UTC; path=/";

// Establecer una cookie limitada a una ruta específica
document.cookie = "demo3=Valor de ejemplo 3; expires=Mon, 21 Jul 2025 00:00:00 UTC; path=/FULLSTACK-2025-03-EIT/clase_35;";
document.cookie = "demo4=Valor de ejemplo 4; expires=Mon, 21 Jul 2025 00:00:00 UTC; path=/FULLSTACK-2025-03-EIT/clase_35/d1_cookie/src/test.html;";

// Guardar un objeto como JSON en una cookie y codificar como URI (recomendado)
const studentJson = JSON.stringify(student);
document.cookie = `student=${encodeURIComponent(studentJson)}; expires=${dateUTC}; path=/`;

// Leer y mostrar el valor del "student" desde la cookie
const valueOfCookiesForStudent = getCookie('student');
console.log("Estudiante:", valueOfCookiesForStudent);

// Leer y mostrar el valor de la cookie "greet"
document.cookie = `greet=Hola Mundo; expires=${dateUTC}; path=/`;
const valueOfCookiesForGreet = getCookie('greet');
console.log("Saludo:", valueOfCookiesForGreet);

// Eliminar la cookie "greet"
removeCookie('greet');

console.log("Todo lo actual", document.cookie);
