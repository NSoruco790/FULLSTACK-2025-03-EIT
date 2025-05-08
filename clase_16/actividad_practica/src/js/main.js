/*
    ACTIVIDAD PRACTICA - CLASE N°16
*/

const IN_STOCK = "En stock";
const SOLD_OUT = "Agotado";

const products = [
    ["Smartphone Samsung Galaxy S21", "Smartphones", IN_STOCK, 699.99, 10],
    ["Laptop Dell XPS 13", "Laptops", IN_STOCK, 999.99, 15],
    ["Smartwatch Apple Watch Series 6", "Wearables", SOLD_OUT, 399.99, 5],
    ["Auriculares Sony WH-1000XM4", "Accesorios", IN_STOCK, 349.99, 20],
    ["Tablet Apple iPad Air 10", "Tablets", IN_STOCK, 599.99, 0],
    ["Cámara Canon EOS 5D Mark IV", "Cámaras", IN_STOCK, 2499.99, 9],
];

const displayCounters = (inStock, soldOut) => {
    const counters = document.createElement("ul");
    counters.innerHTML += `<li><strong>Con stock</strong>: ${inStock}</li>`;
    counters.innerHTML += `<li><strong>Agotados</strong>: ${soldOut}</li>`;
    counters.classList.add("counters");

    return counters;
};

const calculateCounter = (status) => {
    const items = products.filter((product) => product.includes(status));
    return items.length;
};

const displayCards = () => {
    const cards = document.createElement("div");
    cards.classList.add("product-cards");

    products.forEach((product, index) => {
        const card = document.createElement("div");

        const image = document.createElement("img");
        image.setAttribute("src", `assets/images/img0${index+1}.jpg`);
        image.classList.add("product-image");
        card.appendChild(image);

        const data = document.createElement("div");
        data.innerHTML += `<p></p>`;
        data.innerHTML += `<p><strong>Nombre del producto</strong>: ${product[0]}</p>`;
        data.innerHTML += `<p><strong>Categoría</strong>: ${product[1]}</p>`;
        data.innerHTML += `<p><strong>Estado</strong>: ${product[2]}</p>`;
        data.innerHTML += `<p><strong>Precio</strong>: $${product[3]}</p>`;

        if (product[4] > 0) {
            data.innerHTML += `<p><strong>Descuento</strong>: ${product[4]}</p>`;
        }

        card.classList.add("product-card");
        card.classList.add("product-card-in-stock");

        if (product[2] === SOLD_OUT) {
            card.classList.remove("product-card-in-stock");
            card.classList.add("product-card-sold-out");
        }

        if (product[4] > 10) {
            card.classList.add("product-card-promotion");
        }

        card.appendChild(data);
        cards.appendChild(card);
    });

    return cards;
};

const productsContainer = document.getElementById("products-container");

productsContainer.innerHTML += "<h3>Gestión de Inventario</h3>"

const quantityProductsInStock = calculateCounter(IN_STOCK);
const quantityProductsSoldOut = calculateCounter(SOLD_OUT);
productsContainer.appendChild(displayCounters(quantityProductsInStock, quantityProductsSoldOut));
productsContainer.innerHTML += "<h3>Lista de Productos</h3>"
productsContainer.appendChild(displayCards());
