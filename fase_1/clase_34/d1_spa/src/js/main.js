/*
    SPA
*/

import { checkInternalHost, navigateTo } from './router.js';

document.addEventListener('click', (event) => {
    const element = event.target;

    if (element.tagName === 'A') {
        const url = element.getAttribute('href');

        if (checkInternalHost(url)) {
            event.preventDefault();
            navigateTo(url);
        }
    }
});

// Navegación con botones del navegador (adelante/atrás)
window.addEventListener('popstate', () => {
    navigateTo(location.pathname, false);
});

// Render inicial
window.addEventListener('load', () => {
    navigateTo(location.pathname, false);
});