/*
    POO - CLASS
*/

class Student {
    // Propiedades privadas
    #firstName;
    #lastName;
    #age;

    // Propiedad pública
    country;

    constructor(firstName, lastName, age) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
        this.country = 'Argentina';
    }

    // Getters
    getFirstName() {
        return this.#firstName;
    }

    getLastName() {
        return this.#lastName;
    }

    getAge() {
        return this.#age;
    }

    // Setters
    setFirstName(firstName) {
        this.#firstName = firstName;
    }

    setLastName(lastName) {
        this.#lastName = lastName;
    }

    setAge(age) {
        this.#age = age;
    }

    // Método privado
    #generateSummary() {
        return `Hola, soy ${this.#firstName} ${this.#lastName}, tengo ${this.#age} años y soy de ${this.country}.`;
    }

    // Método público
    printSummary() {
        const summary = this.#generateSummary();
        console.log(summary);
    }
}

const student1 = new Student("Juan", "Medina", 21);
student1.setFirstName = "Pablo";
student1.printSummary()

const student2 = new Student("Lorena", "Torres", 19);
student2.setAge(30);
student2.country = "Uruguay";
student2.printSummary()
