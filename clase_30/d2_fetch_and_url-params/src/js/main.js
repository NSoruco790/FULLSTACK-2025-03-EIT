/*
    FETCH API
*/

/* ********************** Método GET ********************** */
const optionsToGet = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
};

fetch("https://dummyjson.com/products/1", optionsToGet)
    .then((response) => response.json())
    .then(data => console.log("Datos (Fetch Nº1):", data))
    .catch((error) => {
        console.error(`Ocurrió un error: ${error.message}`);
    });


/* ********************** Método POST ********************* */
const optionsToPost = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Mi producto de prueba 1',
        description: "Es es mi descripción de prueba 1",
        category: "beauty",
        price: 159.75,
        stock: 15,
    })
};

fetch('https://dummyjson.com/products/add', optionsToPost)
    .then(res => res.json())
    .then(data => console.log("Datos (Fetch Nº2):", data))
    .catch((error) => {
        console.error(`Ocurrió un error: ${error.message}`);
    });


/* ********************** Método PUT ********************** */
const optionsToPut = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Mi producto de prueba 2',
        description: "Es es mi descripción de prueba 2",
    })
};

fetch('https://dummyjson.com/products/1', optionsToPut)
    .then(res => res.json())
    .then(data => console.log("Datos (Fetch Nº3):", data))
    .catch((error) => {
        console.error(`Ocurrió un error: ${error.message}`);
    });


/* ********************* Método DELETE ********************** */
const optionsToDelete = {
    method: 'DELETE',
};

fetch('https://dummyjson.com/products/2', optionsToDelete)
    .then(res => res.json())
    .then(data => console.log("Datos (Fetch Nº4):", data))
    .catch((error) => {
        console.error(`Ocurrió un error: ${error.message}`);
    });


/* ****************** Método GET - URL Params ***************** */
const sortBy = 'title';
const order = 'asc';
const limit = 10;

fetch(`https://dummyjson.com/products?sortBy=${sortBy}&order=${order}&limit=${limit}`)
    .then(response => response.json())
    .then(data => console.log("Datos (Fetch Nº5):", data))
    .catch((error) => {
        console.error(`Ocurrió un error: ${error.message}`);
    });
