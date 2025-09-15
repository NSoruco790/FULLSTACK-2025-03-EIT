// Definición del componente funcional App
const App = () => {
    // Variables de JavaScript se pueden usar dentro del JSX usando {}
    const firstName = "Juan";
    const a = 5;
    const b = 10;

    return (
        // Todo el JSX debe estar contenido en un solo elemento padre
        <div>

            {/* Título principal del componente */}
            <h1>Hola Mundo</h1>

            <ul>
                <li>primero</li>

                {/* Estilo en línea: se define como un objeto con propiedades camelCase */}
                <li style={{ fontStyle: "italic", color: "red" }}>segundo</li>

                {/* textTransform también se usa en camelCase */}
                <li style={{ textTransform: "uppercase" }}>tercero</li>
            </ul>

            {/* Inserción de variable JSX */}
            <p>Nombre: {firstName}</p>

            {/* Operador ternario dentro de JSX */}
            <div>{a < b ? "es mayor" : "no es mayor"}</div>

            {/* Comentario JSX válido: debe ir entre llaves */}
            {/* <h3>Texto comentado</h3> */}

            {/* Imagen local (recomendado moverla a /public y usar src="/images/cars/img01.jpg") */}
            <img src="/images/img01.jpg" // Esto está en la carpeta /public/images
                alt="Auto"
                width="300"/>
        </div>
    );
};

export default App;