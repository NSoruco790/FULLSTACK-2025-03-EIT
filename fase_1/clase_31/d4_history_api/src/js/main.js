/*
    HISTORY API
*/

const btnBack = document.getElementById("btn-back");
const btnForward = document.getElementById("btn-forward");
const btnGo = document.getElementById("btn-go");
const inputPageNumber = document.getElementById("input-page-number");
const btnLength = document.getElementById("btn-length");

// Ir a la página anterior del historial
btnBack.addEventListener("click", () => {
    history.back();
});

// Ir a la página siguiente del historial
btnForward.addEventListener("click", () => {
    history.forward();
});

// Ir a una posición específica del historial
btnGo.addEventListener("click", () => {
    const n = parseInt(inputPageNumber.value, 10);
    if (!isNaN(n)) {
        history.go(n);
    } else {
        alert("Por favor ingresa un número válido.");
    }
});

// Ven longitud del historial (cantidad de entradas)
btnLength.addEventListener("click", () => {
    alert(`Historial contiene ${history.length} entradas.`);
});