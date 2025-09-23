const cars = [
    {
        id: 1,
        brand: "Ford",
        model: "Ranger",
        year: 2023,
    },
    {
        id: 2,
        brand: "Fiat",
        model: "Palio",
        year: 2021,
    },
    {
        id: 3,
        brand: "Fiat",
        model: "Toro",
        year: 2021,
    },
    {
        id: 4,
        brand: "Chevrolet",
        model: "S10",
        year: 2019,
    },
    {
        id: 5,
        brand: "Chevrolet",
        model: "corsa",
        year: 2018,
    },
    {
        id: 6,
        brand: "Fiat",
        model: 1,
        year: 2009,
    },
    {
        id: 7,
        brand: "Fiat",
        model: "uno",
        year: 2012,
    },
    {
        id: 8,
        brand: "Renault",
        model: "Sandero",
        year: 2013,
    },
];

const generateId = () => {
    let maxId = 0;

    cars.forEach((item) => {
        if (item.id > maxId) {
            maxId = item.id;
        }
    });

    return maxId + 1;
};

export {
    cars,
    generateId,
};