/*
    DRAG & DROP - FILES
*/

const dropZone = document.getElementById('drop-zone');
const dropZoneInput = document.getElementById('drop-zone-input');

const showFiles = (files) => {
    dropZone.innerHTML = '';

    for (const file of files) {
        dropZone.innerHTML += `<span>${file.name} (${Math.round(file.size / 1024)} KB)</span>`;
    }
};

dropZone.addEventListener("dragenter", (event) => {
    console.log("dragenter: Archivo o elemento que entró en la zona de arrastre");
    event.preventDefault();
});

dropZone.addEventListener("dragleave", (event) => {
    console.log("dragleave: Archivo o elemento que salió de la zona de arrastre");
    event.preventDefault();
});

dropZone.addEventListener("dragover", (event) => {
    console.log("dragover: Archivo o elemento que está siendo arrastrado dentro de la zona");
    event.preventDefault();
});

dropZone.addEventListener("drop", (event) => {
    console.log("drop: Archivo o elemento que fue soltado dentro de la zona de arrastre");
    event.preventDefault();

    const files = event.dataTransfer.files;
    if (files.length > 0) {
        showFiles(files);
    }
});

dropZoneInput.addEventListener("change", (event) => {
    const files = event.target.files;
    if (files.length > 0) {
        showFiles(files);
    }
});
