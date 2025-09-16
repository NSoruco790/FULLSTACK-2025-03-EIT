/*
    NODE JS: Ejemplo que demuestra el uso de parámetros de línea de comandos.

    En la consola, este archivo se ejecuta con el comando:
    node parametros.js Juan "Bienvenido a Node.js"
*/

// Obtener los parámetros de línea de comandos
const args = process.argv.slice(2);
console.log(args);

const greet = (name, message) => {
    console.log(`Hola ${name} ¡${message}!`);
};

greet(args[0], args[1]);