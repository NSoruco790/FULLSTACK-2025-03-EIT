/*
    MANIPULACIÓN HTML - Contenido
*/

const searchText = document.querySelector('input[name="search-text"]');
const textExample = document.querySelector('#text-example');
const articleExample = document.querySelector('#article-example');

// Modificar valor de 'search-text'
searchText.value = "Valor agregado desde JS";
console.dir(searchText);

// Modificar contenido de 'text-example'
textExample.textContent += "Texto agregado desde JS";
console.dir(textExample);

// Agregar una lista al contenido de 'article-example'
articleExample.innerHTML += "<ul><li>Item 1</li><li>Item 2</li></ul>";
console.dir(articleExample);