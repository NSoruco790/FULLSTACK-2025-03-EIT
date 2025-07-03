/*
    WINDOW API
*/

document.getElementById('btn-alert').addEventListener('click', () => {
    window.alert('Este es un mensaje de alerta');
});

document.getElementById('btn-confirm').addEventListener('click', () => {
    const respuesta = window.confirm('¿Estás seguro?');
    alert(`Respuesta: ${respuesta}`);
});

document.getElementById('btn-prompt').addEventListener('click', () => {
    const texto = window.prompt('Escribí algo:');
    alert(`Ingresaste: ${texto}`);
});

document.getElementById('btn-inner-width').addEventListener('click', () => {
    alert(`Ancho ventana visible: ${window.innerWidth}px`);
});

document.getElementById('btn-inner-height').addEventListener('click', () => {
    alert(`Alto ventana visible: ${window.innerHeight}px`);
});
