/*
    MANIPULACIÓN HTML - Estilos
*/

const textExample = document.getElementById('text-example');
const formExample = document.getElementById('form-example');

// Manipulación de estilos en el elemento 'text-example'
textExample.style.setProperty("font-style", "italic");  // Cambia el estilo de la fuente a cursiva
textExample.style.setProperty("width", "600px");        // Establece el ancho del elemento a 600px
textExample.style.removeProperty("color");              // Elimina la propiedad de color del texto

// Manipulación de clases en el formulario
formExample.classList.add("form");                                          // Añade la clase 'form' al formulario
const hasClassForm = formExample.classList.contains("form");                // Verifica si tiene la clase 'form'
const hasClassFormBorder = formExample.classList.contains("form-border");   // Verifica si tiene la clase 'form-border'
const hasClassFormImage = formExample.classList.contains("form-image");     // Verifica si tiene la clase 'form-image'
console.log("¿Tiene la clase 'form'?", hasClassForm);
console.log("¿Tiene la clase 'form-border'?", hasClassFormBorder);
console.log("¿Tiene la clase 'form-image'?", hasClassFormImage);
formExample.classList.remove("form-border");                                // Quita la clase 'form-border' del formulario
