/*
    TIMER & INTERVAL
*/

const timeOut = setTimeout(() => {
    console.log("Timer", "!Hola Mundo¡");
}, 2000);

let cancelTimer = false;
if (cancelTimer) {
    clearTimeout(timeOut);
}


let counter = 1;
const interval = setInterval(() => {
    console.log(`Interval N°${counter}`, "!Hola Mundo¡");
    counter++;

    if (counter > 5) {
        clearInterval(interval);
    }
}, 1000);