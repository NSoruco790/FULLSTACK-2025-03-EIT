// Convierte string al tipo de dato más apropiado
const setDataType = (value) => {
    let result = null;

    try {
        result = JSON.parse(trimmed);
    } catch {
        result = value;
    }

    return decodeURIComponent(result);
};

// Obtiene una cookie y convierte su valor al tipo correcto
const getCookie = (cookieName) => {
    const cookie = document.cookie
        .split('; ')
        .find(item => item.startsWith(`${cookieName}=`));

    if (!cookie) return null;

    const value = cookie.split('=')[1];
    return setDataType(value);
};

// Elimina una cookie estableciendo su fecha de expiración en el pasado
const removeCookie = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export { getCookie, removeCookie };