/*
    IIFE + PATRON MODULO
*/

const student = {
    firstName: "Juan",
    lastName: "Medina",
    age: 21,
}

/* *** IIFE (Immediately Invoked Function Expression) *** */
const guestName = (() => {
    console.log(`¡${student.firstName}, bienvenido al sistema!`);
})()


/* **************** Patrón Módulo ++ IIFE *************** */
const counter = (() => {
    let value = 0;

    return {
        increment() {
            value++;
        },
        decrement() {
            value--;
        },
        print() {
            console.log(value);
        },
        reset() {
            value = 0;
        },
    };
})();

counter.increment();
counter.increment();
counter.increment();
counter.print();        // 3

counter.increment();
counter.print();        // 4

counter.decrement();
counter.decrement();
counter.print();        // 2

counter.reset();
counter.print();        // 0