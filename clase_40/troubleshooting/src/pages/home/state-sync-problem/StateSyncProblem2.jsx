import { useState } from "react";
import "./state-sync-problem.scss";

const StateSyncProblem2 = () => {
    const [ count, setCount ] = useState(0);

    // ❌ PROBLEMA: Actualización incorrecta del estado: Cuando se usa directamente
    // el valor actual del estado, React puede agrupar varias actualizaciones y
    // aplicar solo la última, ignorando las anteriores.
    const incrementWrong = () => {
        setCount(count + 1); // Primera actualización: count = 0, resultado = 1
        setCount(count + 1); // Segunda actualización: count = 1, resultado = 2
        setCount(count + 1); // Tercera actualización: count = 2, resultado = 3
        // Resultado final: el contador solo se incrementa 1 vez en lugar de 3
    };

    // ✅ SOLUCIÓN: Usar callback de actualización: La función recibe el valor más
    // reciente del estado y garantiza que cada actualización utilice dicho valor.
    const incrementCorrect = () => {
        setCount((prevCount) => prevCount + 1); // Primera: prevCount = 0, resultado = 1
        setCount((prevCount) => prevCount + 1); // Segunda: prevCount = 1, resultado = 2
        setCount((prevCount) => prevCount + 1); // Tercera: prevCount = 2, resultado = 3
        // Resultado final: el contador se incrementa 3 veces correctamente
    };

    return (
        <div className="state-sync-problem">
            <h3 className="title">
                <span>Problema de sincronización con useState</span>
                <span>Actualización Multiple</span>
            </h3>
            <span className="result">Contador: {count}</span>

            <div>
                <button onClick={incrementWrong}>Incrementar x3</button>
                <b className="error"> (INCORRECTO) </b>
                <i>Resultado: solo incrementa 1 vez</i>
            </div>

            <div>
                <button onClick={incrementCorrect}>Incrementar x3</button>
                <b className="success"> (CORRECTO) </b>
                <i>Resultado: incrementa 3 veces</i>
            </div>

            <button onClick={() => setCount(0)}>Resetear</button>

            <p className="explanation">
                <b>Explicación del problema: </b>React agrupa actualizaciones de estado para
                    optimizar el rendimiento. Si se usa <code>setCount(count + 1)</code> varias
                    veces seguidas, todas usan el mismo valor base, lo que puede causar problemas.
            </p>

            <p className="explanation">
                <b>Solución:</b> Usar el callback de actualización de la siguiente manera:
                <code> setCount(prevCount =&gt; prevCount + 1) </code>. Así cada actualización
                    parte del valor más reciente del estado.
            </p>
        </div>
    );
};

export default StateSyncProblem2;