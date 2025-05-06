/*
    MÉTODOS ESENCIALES DE STRING
*/

const text = "¡JavaScript es mi lenguaje de programación favorito!";

console.log("La longitud del texto es", text.length);
console.log("¿El texto incluye la palabra 'favorito'?", text.includes("genial"));
console.log("Extraer del texto la palabra 'lenguaje'", text.substring(18, 25));
console.log("Convertir todo el texto en mayúsculas", text.toUpperCase());
console.log("Convertir todo el texto en minúsculas", text.toLowerCase());

const textWithSpaces = "   Hola Mundo   ";
console.log("Eliminar los espacios iniciales y finales del texto", textWithSpaces.trim());

console.log("Reemplazar en el texto la palabra 'es' por 'un'", text.replace("mi", "un"));
console.log("Reemplazar en el texto todas las vocales 'a' por 'O'", text.replaceAll("a", "O"));
console.log("Convertir el texto en un array usando el espacio como separador", text.split(" "));

const number = "125";
console.log("En el número, agregar ceros iniciales para mantener una longitud de 8 dígitos", number.padStart(8, "0"));
console.log("En el número, agregar asteriscos en el final para mantener una longitud de 5 caracteres", number.padEnd(5, "*"));

// Los valores de las variables (text, textWithSpaces y number) se mantienen intactos.
console.log(text);
