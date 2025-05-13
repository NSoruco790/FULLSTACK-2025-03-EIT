/*
    FUNCIONES DE SELECTORES
*/

// Selecciona el primer elemento que tenga el id "id-title" en el DOM
const titleH1 = document.querySelector("#id-title");
console.log(titleH1.textContent);

// Selecciona el primer elemento <h2> que encuentre en el DOM
const titleH2 = document.querySelector("h2");
console.log(titleH2.textContent);

// Selecciona el primer elemento la clase "description" en el DOM
const description = document.querySelector(".description");
console.log(description.textContent);

// Selecciona todos los elementos que tengan la clase "description" en el DOM
const descriptions = document.querySelectorAll(".description");
for (let i = 0; i < descriptions.length; i++) {
    const description = descriptions[i];
    console.log(i, description.textContent);
}

// Selecciona el elemento usando getElementById, que busca directamente por id
const titleH1WithGetElementById = document.getElementById("id-title");