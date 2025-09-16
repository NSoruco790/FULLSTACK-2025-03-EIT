/*
    CLI de REPL (Read-Eval-Print Loop):
        ● Para iniciar REPL: ejecutar 'node' en la terminal
        ● Para salir: escribir '.exit' o presionar Ctrl+C dos veces
        ● Para ver ayuda: escribir '.help'
        ● Para limpiar pantalla: escribir '.clear'
        ● Para ver historial: usar flechas arriba/abajo
        ● Para auto-completar: presionar Tab

    Ejemplos de uso de REPL:
        ● process.version
        ● process.platform
        ● process.cwd()
*/

console.log("Versión de Node.js: ", process.version);
console.log("Plataforma: ", process.platform);
console.log("Directorio de trabajo actual: ", process.cwd());

// NOTA: __filename y __dirname NO están disponibles en REPL (solo en archivos .js)
console.log("Nombre de archivo que se está ejecutando: ", __filename);
console.log("Nombre del directorio en el que reside dicho archivo: ", __dirname);