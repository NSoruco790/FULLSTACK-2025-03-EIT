/*
    SERIALIZACIÓN DE DATOS
*/

const users = [
    {
        id: 1,
        name: "Juan",
        email: "juan@gamil.com"
    },
    {
        id: 2,
        name: "Lorena",
        email: "lore@gamil.com"
    },
    {
        id: 3,
        name: "Mariana",
        email: "mary@gamil.com"
    }
];

const usersJSON = JSON.stringify(users);
console.log('JSON:', usersJSON);

const usersArray = JSON.parse(usersJSON);
console.log('Array de objetos:', usersArray);