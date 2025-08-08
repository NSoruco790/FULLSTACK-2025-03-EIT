import { useState } from "react";
import "./state-sync-problem.scss";

const StateSyncProblem1 = () => {
    const [ count, setCount ] = useState(0);

    // ❌ PROBLEMA: El estado no se actualiza inmediatamente: Cuando usamos setState,
    // el valor del estado no cambia instantáneamente. React programa la actualización
    // para el siguiente render.
    const demonstrateStateUpdateProblem = () => {
        console.log("Valor inicial del estado:", count); // count = 0

        setCount((prevCount) => {
            const newCount = prevCount + 1;
            console.log("Callback de actualización:", newCount);
            return newCount;
        });

        console.log("Valor después de setCount:", count); // count sigue siendo 0
    };

    return (
        <div className="state-sync-problem">
            <div className="content">
                <h3 className="title">Problema de Sincronismo con useState</h3>
                <span className="result">Contador: {count}</span>

                <div>
                    <button onClick={demonstrateStateUpdateProblem}>Demostrar problema</button>
                    <i className="note"> Revisa la consola para ver los logs </i>
                </div>

                <button onClick={() => setCount(0)}>Resetear</button>
            </div>

            <div>
                <p className="explanation">
                    <b>Explicación del problema:</b> React no actualiza el estado de forma
                    inmediata. Si se usa <code>setCount(count + 1)</code> y luego se accede
                    a <code>count</code>, se obtendrá el valor anterior.
                </p>

                <p className="explanation">
                    <b>Solución:</b> Si necesitas manipular o reaccionar al nuevo valor, se
                    debe emplear un <code>useEffect</code> para detectar cambios.
                </p>
            </div>
        </div>
    );
};

export default StateSyncProblem1;