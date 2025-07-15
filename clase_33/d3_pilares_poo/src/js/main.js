/*
    PILARES DE POO
*/

class Animal {
    #specie;

    constructor(specie) {
        this.#specie = specie;
    }

    getSpecie() {
        return this.#specie;
    }

    eat() {
        console.log(`Soy un ${this.#specie} y estoy comiendo`);
    }
}

class Bird extends Animal {
    fly() {
        console.log(`Soy un ${this.getSpecie()} y estoy volando`);
    }
}

class Fish extends Animal {
    eat() {
        console.log(`Soy un ${this.getSpecie()} y estoy comiendo mientras voy nadando`);
    }

    swim() {
        console.log(`Soy un ${this.getSpecie()} y estoy nadando`);
    }
}

const dog = new Animal('perro');
dog.eat();

const bird = new Bird('pájaro');
bird.eat();
bird.fly();

const fish = new Fish('péz');
fish.eat();
fish.swim();


/*
    ABSTRACCIÓN:
        • Permite usar objetos (Animal, Bird, Fish) sin saber cómo están implementados por dentro.
        • Se muestra solo lo necesario (eat(), getSpecie()), ocultando los detalles internos como #specie.
        • Cada clase representa un concepto del mundo real con su propio comportamiento.

    ENCAPSULAMIENTO:
        • La propiedad #specie es privada: solo se puede usar dentro de la clase Animal.
        • No es accesible desde afuera ni desde subclases.
        • Se accede de forma controlada mediante el método getSpecie().

    HERENCIA
        • Bird y Fish heredan de Animal usando extends.
        • Reutilizan el constructor y los métodos getSpecie() y eat() (si no se sobrescribe).
        • También pueden agregar sus propios métodos (fly(), swim()).

    POLIMORFISMO
        • Todas las subclases pueden usar el método eat(), pero cada una puede tener su propia versión.
        • Fish sobrescribe eat() con un comportamiento distinto.
        • Diferentes objetos responden al mismo método, adaptando su comportamiento según el tipo.
*/