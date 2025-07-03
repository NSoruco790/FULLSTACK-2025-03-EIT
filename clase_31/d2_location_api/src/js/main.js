/*
    LOCATION API
*/

document.getElementById('btn-refresh').addEventListener('click', () => {
    location.reload();
});

document.getElementById('btn-redirect').addEventListener('click', () => {
    location.assign('https://www.google.com.ar');
});

document.getElementById('btn-href').addEventListener('click', () => {
    alert(`URL completa: ${location.href}`);
});

document.getElementById('btn-pathname').addEventListener('click', () => {
    alert(`Ruta actual: ${location.pathname}`);
});

document.getElementById('btn-hostname').addEventListener('click', () => {
    alert(`Dominio: ${location.hostname}`);
});

document.getElementById('btn-search').addEventListener('click', () => {
    // Importante: Los parámetros se deben agregar manualmente en la URL del navegador.
    alert(`Parámetros de la URL: ${location.search}`);
});
