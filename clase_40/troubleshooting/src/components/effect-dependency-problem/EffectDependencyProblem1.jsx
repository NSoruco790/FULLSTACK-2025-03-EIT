import { useEffect, useState } from "react";
import "./effect-dependency-problem.scss";

const EffectDependencyProblem1 = () => {
    const [ count, setCount ] = useState(0);

    // ❌ PROBLEMA: Dependencia que se modifica dentro del mismo useEffect
    // Esto causa un bucle infinito porque cada vez que count cambia, el effect
    // se ejecuta y modifica count nuevamente, disparando el effect otra vez.
    useEffect(() => {
        console.log("useEffect ejecutado - count:", count);

        if (count > 0) {
            setCount((prevCount) => prevCount + 1); // Esto genera un bucle infinito
        }
    }, [count]);

    const updateCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const resetCount = () => {
        setCount(0);
        console.log("Reset ejecutado - el bucle infinito se detendrá");
    };

    return (
        <div className="effect-dependency-problem">
            <div className="content">
                <h3 className="title">Problema de Dependencias en useEffect</h3>
                <span className="result">Contador: {count}</span>

                <div>
                    <button onClick={updateCount}>Incrementar contador</button>
                    <i className="note"> Revisa la consola para ver los logs </i>
                </div>

                <div>
                    <button onClick={resetCount}>Resetear</button>
                    <i className="error"> ¡Detiene el bucle infinito!</i>
                </div>
            </div>

            <div>
                <p className="explanation">
                    <b>Explicación del problema:</b> El useEffect tiene <code>count</code> como
                    dependencia, pero dentro del effect modificamos <code>count</code> nuevamente.
                    Esto crea un bucle infinito: count cambia → effect se ejecuta → count cambia →
                    effect se ejecuta → y así sucesivamente.
                </p>

                <p className="explanation">
                    <b>Solución:</b> El botón &quot;Resetear&quot; puede parar el bucle porque establece
                    <code>count = 0</code>, haciendo que la condición <code>count &gt; 0</code> sea
                    falsa y el effect ya no modifique el estado.
                </p>
            </div>
        </div>
    );
};

export default EffectDependencyProblem1;