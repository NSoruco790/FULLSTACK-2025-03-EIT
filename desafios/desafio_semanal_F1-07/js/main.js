const STANDARD_ROOM_TYPE = "STANDARD";
const DELUXE_ROOM_TYPE = "DELUXE";
const SUITE_ROOM_TYPE = "SUITE";

const PENDING_RESERVATION_STATUS = "PENDING";
const CANCELED_RESERVATION_STATUS = "CANCELED";
const CONFIRMED_RESERVATION_STATUS = "CONFIRMED";

const reservations = [
    ["Juan A. Pérez", 28444777, STANDARD_ROOM_TYPE, 101, "2024-01-10", PENDING_RESERVATION_STATUS, false],
    ["Anthony Tomas", 50788955, DELUXE_ROOM_TYPE, 102, "2024-01-15", CONFIRMED_RESERVATION_STATUS, true],
    ["Lorena Medina", 74111000, STANDARD_ROOM_TYPE, 103, "2024-01-20", CANCELED_RESERVATION_STATUS, false],
    ["Patricia Fuentes", 9258258, SUITE_ROOM_TYPE, 105, "2024-01-25", CONFIRMED_RESERVATION_STATUS, false],
    ["Javier G. Torres", 75444888, STANDARD_ROOM_TYPE, 106, "2024-01-25", CONFIRMED_RESERVATION_STATUS, false],
    ["Max Power", 28555888, SUITE_ROOM_TYPE, 108, "2024-01-15", CANCELED_RESERVATION_STATUS, true],
    ["Marian Sans", 32588255, DELUXE_ROOM_TYPE, 107, "2024-01-12", PENDING_RESERVATION_STATUS, false],
    ["Clara Ponce", 60155000, DELUXE_ROOM_TYPE, 109, "2024-02-18", CONFIRMED_RESERVATION_STATUS, false],
    ["Carla Blanco", 40177070, STANDARD_ROOM_TYPE, 100, "2024-03-05", PENDING_RESERVATION_STATUS, true],
];

const getQuantityOfReservationsByState = (status) => {
    let quantity = 0;

    reservations.forEach((item) => {
        if (item.includes(status)) {
            quantity++;
        }
    });

    return quantity;
};

const createContainerReservationCounter = () => {
    const containerReservationCounter = document.createElement("div");
    containerReservationCounter.classList.add("reservation-quantities");
    containerReservationCounter.innerHTML += `<p>Pendientes: ${getQuantityOfReservationsByState(PENDING_RESERVATION_STATUS)}</p>`;
    containerReservationCounter.innerHTML += `<p>Canceladas: ${getQuantityOfReservationsByState(CANCELED_RESERVATION_STATUS)}</p>`;
    containerReservationCounter.innerHTML += `<p>Confirmadas: ${getQuantityOfReservationsByState(CONFIRMED_RESERVATION_STATUS)}</p>`;

    return containerReservationCounter;
}

const createCardReservation = (fullName, passportNumber, roomType, roomNumber, checkIn, status, isVip) => {
    const cardReservation = document.createElement("div");
    cardReservation.classList.add("reservation");
    cardReservation.classList.add(`reservation-${status.toLowerCase()}`);

    const cardReservationData = document.createElement("div");
    cardReservationData.innerHTML += `<p><strong>Huésped</strong>: ${fullName} <strong>Pasaporte N°:</strong> ${passportNumber}</p>`;
    cardReservationData.innerHTML += `<p><strong>Habitación</strong>: ${roomType} N°${roomNumber}</p>`;
    cardReservationData.innerHTML += `<p><strong>Fecha de ingreso</strong>: ${checkIn}</p>`;
    cardReservationData.innerHTML += `<p><strong>Estado de la reserva</strong>: ${status}</p>`;
    cardReservation.appendChild(cardReservationData);

    if (isVip === true) {
        const cardReservationVip = document.createElement("div");
        cardReservationVip.innerHTML = `<p>VIP</p>`;
        cardReservationVip.classList.add("reservation-vip");
        cardReservation.appendChild(cardReservationVip);
    }

    const cardReservationImage = document.createElement("img");
    cardReservationImage.setAttribute("src", `assets/images/${roomType.toLowerCase()}.jpg`);
    cardReservationImage.classList.add("reservation-image");
    cardReservation.appendChild(cardReservationImage);

    return cardReservation;
}

const reservationContainer = document.getElementById("reservation-container");
reservationContainer.innerHTML += `<h2>Gestión De Reservas</h2>`;
const containerReservationQuantities = createContainerReservationCounter();
reservationContainer.appendChild(containerReservationQuantities);
reservationContainer.innerHTML += `<h3>Lista De Reservas</h3>`;

reservations.forEach((reservation) => {
    const fullName = reservation[0];
    const passportNumber = reservation[1];
    const roomType = reservation[2];
    const roomNumber = reservation[3];
    const checkIn = reservation[4];
    const status = reservation[5];
    const isVip = reservation[6];

    const cardReservation = createCardReservation(fullName, passportNumber, roomType, roomNumber, checkIn, status, isVip);
    reservationContainer.appendChild(cardReservation);
});