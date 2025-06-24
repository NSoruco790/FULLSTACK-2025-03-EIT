const customers = [
    {
        id: 1,
        firstName: "Lucía",
        lastName: "Medina",
        dni: "25.643.820"
    },
    {
        id: 2,
        firstName: "Martín",
        lastName: "Maldonado",
        dni: "31.278.914"
    },
    {
        id: 3,
        firstName: "Martina",
        lastName: "Acosta",
        dni: "40.385.720"
    },
    {
        id: 4,
        firstName: "Julián",
        lastName: "Domínguez",
        dni: "55.942.106"
    },
    {
        id: 5,
        firstName: "Lorena",
        lastName: "Morales",
        dni: "5.643.820"
    }
];


// Función closure para contar asistencias
const createAttendanceCounter = () => {
    const counters = {};

    return function (id) {
        if (counters[id] === undefined) {
            counters[id] = 0;
        }

        counters[id]++;

        return counters[id];
    };
}

// Función utilizada como callback
const countAttendance = createAttendanceCounter();

// Función de orden superior para mostrar el mensaje personalizado
const showWelcomeMessage = (customer, callback) => {
    const attendanceNumber = callback(customer.id);   // Aquí se ejecuta el callback
    return `Hola ${customer.firstName}, esta es tu asistencia número ${attendanceNumber}.`;
}

// Agrega el evento "click" al botón
const btnRegister = document.getElementById('btn-register');
btnRegister.addEventListener('click', () => {
    const inputDNI = document.getElementById('input-dni');
    const messageDNI = document.querySelector('#input-dni+span');
    messageDNI.classList.remove('form__message--error', 'form__message--success');

    try {
        const dni = inputDNI.value.trim();
        const dniPattern = /^[5-9]{1}|[1-9][0-9]\.[0-9]{3}\.[0-9]{3}$/;

        if (!dniPattern.test(dni)) {
            throw new Error('Debes ingresar un DNI válido (##.###.###).');
        }

        const customer = customers.find((customer) => customer.dni === dni);

        if (!customer) {
            throw new Error('El DNI ingresado no pertenece a un cliente registrado.');
        }

        const message = showWelcomeMessage(customer, countAttendance);
        messageDNI.textContent = message;
        messageDNI.classList.add('form__message--success');
    } catch (error) {
        messageDNI.textContent = error.message;
        messageDNI.classList.add('form__message--error');
    }
});
