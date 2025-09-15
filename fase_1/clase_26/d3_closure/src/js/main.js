/*
    CLOSURE
*/

const createCounter = () => {
    // Variable que queda "guardada" en el closure
    let counter = 0;

    // Esta función es el closure porque "recuerda" a la variable counter
    return function increment(value = 1) {
        counter += value;
        console.log(counter);
    };
};

const counter1 = createCounter();
counter1();
counter1(5);
counter1(2);

const counter2 = createCounter();
counter2(10);
counter2();
counter2();