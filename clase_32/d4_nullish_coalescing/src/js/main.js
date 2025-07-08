/*
    OPERADOR NULLISH COALESCING
*/

const getGuestName = (value) => {
    const name = value ?? "Anónimo";
    console.log(name);
}

getGuestName(undefined);
getGuestName(null);
getGuestName('');
getGuestName(0);
getGuestName(false);
getGuestName('Juan Medina');