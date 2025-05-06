const resultContainer = document.getElementById('result-container');

const NORMAL_FEE = 5000;
const EXTENDED_FEE = 7500;
const BOX_TYPE = "B";
const BAG_TYPE = "G";
const PALLET_TYPE = "P";

const shipments = [
    [PALLET_TYPE, 1, 51],
    [PALLET_TYPE, 46, 2.25],
    [PALLET_TYPE, 30, 1.60],
    [BOX_TYPE, 15, 0.65],
    [BOX_TYPE, 1, 10],
    [BAG_TYPE, 4, 0.35],
];

// Función para calcular el peso total
function calculateTotalWeight(quantity, weight) {
    return quantity * weight;
}

// Función para calcular el costo total de envío
function calculateCost(totalWeight) {
    let result = 0;

    if (totalWeight <= 50) {
        result = totalWeight * NORMAL_FEE;
    } else {
        result = totalWeight * EXTENDED_FEE;
    }

    return result;
}

// Función para mostrar los resultados en el contenedor
function displayResults() {
    for (let i = 0; i < shipments.length; i++) {
        const shipment = shipments[i];
        const type = shipment[0];
        const quantity = shipment[1];
        const weight = shipment[2];

        const totalWeight = calculateTotalWeight(quantity, weight);
        const totalCost = calculateCost(totalWeight);

        const result = "<li>El envío " + (i+1) + " es de tipo " + type + ", pesa " + totalWeight + "kg y el costo del envío es de $" + totalCost + ".</li>";
        resultContainer.innerHTML += result;
    }
}

displayResults();