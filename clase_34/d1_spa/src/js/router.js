import { homePage } from "./pages/home.page.js";
import { aboutPage } from "./pages/about.page.js";
import { contactPage } from "./pages/contact.page.js";
import { errorPage } from "./pages/error.page.js";

const internalHosts = ['localhost:3000', '127.0.0.1:3000'];
const internalRoutes = {
    '/': homePage,
    '/about': aboutPage,
    '/contact': contactPage,
};

export const checkInternalHost = (url) => {
    return internalHosts.includes(url);
}

export const navigateTo = async (path, addToHistory = true) => {
    // Contenedor donde se renderiza cada página
    const container = document.getElementById('container');

    try {
        // Obtiene el contenido de la página que corresponde a la ruta
        const contentPage = internalRoutes[path];

        if (!contentPage) {
            throw new Error("Página no encontrada");
        }

        // Renderiza el contenido de la página
        container.innerHTML = contentPage;
    } catch (error) {
        // Si la ruta no existe, renderiza la página de error
        container.innerHTML = errorPage;
        console.error(error.message);
    } finally {
        if (addToHistory) {
            // Actualiza la URL en la barra de direcciones (sin recargar la página)
            history.pushState({}, '', path);
        }
    }
}