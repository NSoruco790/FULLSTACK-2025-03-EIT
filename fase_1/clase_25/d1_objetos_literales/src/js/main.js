/*
    OBJETOS LITERALES
*/

/* *** Declaración y asignación de objeto *** */
const employee = {
    firstName: "Juan",
    lastName: "Pérez",
    age: 21,
    hireDate: new Date('2025-01-05 15:30:00'),
    status: true,
    jobTitles: ["Backend Developer", "Frontend Developer", "Software Engineer"],
    baseSalary: 1500.50,
    performanceBonus: {
        innovation: 150.75,
        proactivity: 75.0,
    },
    getTotalCompensation: function () {
        return this.baseSalary + this.performanceBonus.innovation + this.performanceBonus.proactivity;
    }
};

/* ********* Modificación de objeto ********* */
employee.baseSalary = 2000;
employee.rating = 4.6;
delete employee.status;

/* ** Impedir nueva modificación de objeto ** */
Object.freeze(employee);
employee.baseSalary = 5000;
employee.maritalStatus = "single";
delete employee.age;

console.log("Objeto:", employee);
console.log("Salario Final:", employee.getTotalCompensation());

