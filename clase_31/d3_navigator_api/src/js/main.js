/*
    NAVIGATOR API
*/

document.getElementById('btn-userAgent').addEventListener('click', () => {
    alert(`User Agent: ${navigator.userAgent}`);
});

document.getElementById('btn-language').addEventListener('click', () => {
    alert(`Idioma preferido: ${navigator.language}`);
});

document.getElementById('btn-platform').addEventListener('click', () => {
    alert(`Plataforma: ${navigator.platform}`);
});

document.getElementById('btn-vendor').addEventListener('click', () => {
    alert(`Vendor (fabricante del navegador): ${navigator.vendor}`);
});

document.getElementById('btn-geo').addEventListener('click', () => {
    // Verificar si el navegador soporta la API de geo-localización.
    // Importante: se deben dar permisos de geo-localización en el navegador.
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                alert(`Tu ubicación:\nLatitud: ${latitude}\nLongitud: ${longitude}`);
            },
            (err) => {
                alert(`Error al obtener ubicación: ${err.message}`);
            }
        );
    } else {
        alert('Geo-localización no soportada en este navegador.');
    }
});

document.getElementById('btn-online').addEventListener('click', () => {
    // Importante: Para probar el estado de la conexión, se debe abrir las herramientas
    // de desarrollo del navegador, dirigirse a la pestaña Network y en el menú desplegable
    // donde dice "No throttling", seleccionar la opción "Offline".
    alert(navigator.onLine ? 'Estás conectado a Internet' : 'Estás offline');
});

window.addEventListener('online', () => {
    alert('¡Volviste a estar online!');
});

window.addEventListener('offline', () => {
    alert('Te quedaste sin conexión.');
});