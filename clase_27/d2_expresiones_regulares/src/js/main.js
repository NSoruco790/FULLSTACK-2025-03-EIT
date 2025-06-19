/*
    EXPRESIONES REGULARES

    Clases de caracteres:
        .	Cualquier carácter excepto salto de línea (\n)
        \.	Un punto literal (.)
        \d	Un dígito (equivale a [0-9])
        \D	No es un dígito
        \w	Carácter de palabra: letras, números o guión bajo ([a-zA-Z0-9_])
        \W	No es carácter de palabra
        \s	Espacio en blanco (incluye espacio, tabulación y/o salto de línea)
        \S	No es un espacio en blanco
        \t	Tabulación
        \n	Salto de línea

    Grupos y rangos:
        (x)		Grupo de captura (agrupa elementos para aplicar reglas o capturar coincidencias)
        x|y		Coincide con x o y
        [apx]		Coincide con a, p, o x
        [a-z]		Letras minúsculas de la a a la z
        [A-Z]		Letras mayúsculas de la A a la Z
        [0-9]		Cualquier dígito del 0 al 9

    Aserciones:
        ^		Marca inicio de línea o cadena
        $		Marca fin de línea o cadena

    Cuantificadores:
        *		Cero o más repeticiones
        +		Una o más repeticiones
        ?		Cero o una repetición (opcional)
        x{n}		Exactamente n repeticiones de x
        x{n,}		Al menos n repeticiones de x
        x{n,m}		Entre n y m repeticiones de x
*/

document.getElementById('btn-validate').addEventListener('click', () => {
    const emailInput = document.getElementById('input-email');
    const emailInputError = document.querySelector('#input-email+span');
    emailInputError.style.display = 'none';

    const ageInput = document.getElementById('input-age');
    const ageInputError = document.querySelector('#input-age+span');
    ageInputError.style.display = 'none';

    let hasError = false;

    // Validar email
    const email = emailInput.value.trim();
    const emailPattern = /^[a-z0-9\._]+@[a-z0-9-]+\.(com(\.[a-z]{2})?)$/;
    if (!email || !emailPattern.test(email)) {
        emailInputError.style.display = 'block';
        hasError = true;
    }

    // Validar edad
    const age = ageInput.value.trim();
    const agePattern = /^([1-9][0-9]?|100)$/;
    if (!age || !agePattern.test(age)) {
        ageInputError.style.display = 'block';
        hasError = true;
    }

    if (!hasError) {
        alert('Formulario válido 🎉');
    }
});