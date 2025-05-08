/*
    MANIPULACIÓN HTML - Estilos
*/

const articleExample = document.getElementById('article-example');

// Crear un elemento HTML
const p = document.createElement("p");
p.textContent = "Hola Mundo";
p.style.setProperty("color", "brown");

// Agregar el elemento 'p'
articleExample.appendChild(p);

// Obtener todos los elementos hijos
const elements = articleExample.childNodes;
console.dir(elements);

// Eliminar un elemento hijo
articleExample.removeChild(elements[3]);

// Eliminar todos los elementos hijos de la lista
const elementUl = elements[4];
elementUl.remove();

