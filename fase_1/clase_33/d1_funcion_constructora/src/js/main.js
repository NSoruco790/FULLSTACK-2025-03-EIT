/*
    FUNCIÓN CONSTRUCTORA
*/

function Student(firstName, lastName, age) {
    // Propiedades privadas
    let _firstName = firstName;
    let _lastName = lastName;
    let _age = age;

    // Propiedad pública
    this.country = 'Argentina';

    // Getters
    this.getFirstName = function () {
        return _firstName;
    };

    this.getLastName = function () {
        return _lastName;
    };

    this.getAge = function () {
        return _age;
    };

    // Setters
    this.setFirstName = function (value) {
        _firstName = value;
    };

    this.setLastName = function (value) {
        _lastName = value;
    };

    this.setAge = function (value) {
        _age = value;
    };

    // Método público
    this.printSummary = function () {
        console.log(generateSummary());
    };

    // Método "privado"
    function generateSummary() {
        return `Hola, soy ${_firstName} ${_lastName}, tengo ${_age} años y soy de ${this.country}.`;
    }
}

const student1 = new Student("Juan", "Medina", 21);
student1.setFirstName("Pablo");
student1.printSummary();

const student2 = new Student("Lorena", "Torres", 19);
student2.setAge(30);
student2.country = "Uruguay";
student2.printSummary();