/*
    EVENTOS
*/

const increment = (input, quantity) => {
    input.value = Number.parseInt(input.value) + quantity;
}

const decrement = (input, quantity) => {
    input.value = Number.parseInt(input.value) - quantity;
}

const incrementA = (quantity) => {
    const inputCounterA = document.querySelector("input[name=counter-a]");
    increment(inputCounterA, quantity);
};

const btnIncrementB = document.getElementById("btn-increment-b");
const inputCounterB = document.querySelector("input[name=counter-b]");
btnIncrementB.onclick = (event) => increment(inputCounterB, 10);

const btnIncrementC = document.getElementById("btn-increment-c");
const inputCounterC = document.querySelector("input[name=counter-c]");
btnIncrementC.addEventListener("click", (event) => increment(inputCounterC, 20));

const btnIncrementD = document.getElementById("btn-increment-d");
const inputCounterD = document.querySelector("input[name=counter-d]");
btnIncrementD.addEventListener("click", (event) => decrement(inputCounterD, 3));

const formDecrement = document.getElementById("form-decrement");
formDecrement.addEventListener("submit", (event) => {
    event.preventDefault();
    decrement(inputCounterD, 6);
});

const boxA = document.getElementById("box-a");
boxA.addEventListener('click', (event) => {
    event.target.style.backgroundColor = "red";
});

const boxB = document.getElementById("box-b");
boxB.addEventListener('click', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = "blue";
});

const boxC = document.getElementById("box-c");
boxC.addEventListener('click', (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = "violet";
});

const boxD = document.getElementById("box-d");
const textD = boxD.querySelector("#box-d .box__text");
boxD.addEventListener('dblclick', (event) => textD.textContent = "¡Doble clic detectado!");
boxD.addEventListener('mouseleave', (event) => textD.textContent = "Has doble click");

const textCoordinates = document.getElementById("text-coordinates");
document.addEventListener('mousemove', (event) => textCoordinates.textContent = `X:${event.screenX}  Y:${event.screenY}`);

const boxE = document.getElementById("box-e");
const textE = boxE.querySelector("#box-e .box__text");
boxE.addEventListener('scroll', (event) => textE.textContent = "¡Scroll detectado!");
boxE.addEventListener('mouseleave', (event) => textE.textContent = "Has scroll");