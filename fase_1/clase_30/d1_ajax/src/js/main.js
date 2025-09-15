/*
    TÉCNICA AJAX
*/

// 1. Crear objeto XHR
const xhr = new XMLHttpRequest();

// 2. Configurar la solicitud (método, URL, asíncrono)
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

// 3. Definir qué hacer cuando se reciba la respuesta
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log(`Respuesta recibida: ${xhr.responseText}`);
        const data = JSON.parse(xhr.responseText);
        console.log(`Datos: ${data.title}`);
    } else {
        console.error(`Error en la solicitud. Código: ${xhr.status}`);
    }
};

// 4. Definir qué hacer en caso de error de red
xhr.onerror = function () {
    console.error("Ocurrió un error de red.");
};

// 5. Enviar la solicitud (ver resultados en la consola del navegador)
xhr.send();