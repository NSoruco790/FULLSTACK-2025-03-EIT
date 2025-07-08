/*
    OPERADOR OPTIONAL CHAINING
*/

const user = {
    username: "juan123",
    profile: {
        firstName: "Juan",
        lastName: "Medina",
        age: 21,
        country: {
            name: "Argentina",
            code: 54
        }
    }
};

console.log(user.profile?.firstName);
console.log(user.profile?.country?.code);

console.log(user.profile?.address?.street);
console.log(user.profile?.address?.number);

