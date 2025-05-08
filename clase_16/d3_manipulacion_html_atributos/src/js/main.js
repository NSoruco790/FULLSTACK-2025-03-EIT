/*
    MANIPULACIÓN HTML - Atributos
*/

const firstName = document.getElementById('id-first-name');
const lastName = document.getElementById('id-last-name');

// Agregar el atributo 'placeholder' en firstName
firstName.setAttribute('placeholder', 'Ingresa el texto buscado');

// Obtener atributos
const maxLengthFirstName = firstName.getAttribute('maxLength');
const maxLengthLastName = lastName.getAttribute('maxLength');
console.log("Máxima longitud de firstName:", maxLengthFirstName);
console.log("Máxima longitud de lastName:", maxLengthLastName);

// Modificar atributos
firstName.setAttribute('maxLength', 10);
lastName.setAttribute('value', "Hola");

// Verificar existencia de atributos
const isMaxLength = firstName.hasAttribute('placeholder');
const isDisabled = lastName.hasAttribute('placeholder');
console.log("¿Existe placeholder en firstName?", isMaxLength);
console.log("¿Existe placeholder en lastName?", isDisabled);

// Eliminar el atributo 'maxLength' en lastName
lastName.removeAttribute('maxLength');