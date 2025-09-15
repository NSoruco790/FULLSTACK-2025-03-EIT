import { useEffect, useRef, useState } from "react";
import "./effect-dependency-problem.scss";

const EffectDependencyProblem2 = () => {
    const [ count, setCount ] = useState(0);
    const countRef = useRef(0);

    // ❌ PROBLEMA: usar useRef como dependencia en useEffect: El cambio de ref.current
    // NO dispara el useEffect porque React solo compara la referencia del objeto, no su valor.
    useEffect(() => {
        setCount(countRef.current);
        console.log("useEffect se ha ejecutado");
    }, [countRef]);

    const updateCount = () => {
        countRef.current += 1;
        console.log("Ref actualizada:", countRef.current);
    };

    const resetAll = () => {
        setCount(0);
        countRef.current = 0;
    };

    return (
        <div className="effect-dependency-problem">
            <h3 className="title">
                <span>Problema de dependencias en useEffect</span>
                <span>Uso de useRef como dependencia</span>
            </h3>
            <span className="result">Contador: {count}</span>
            <span className="result">Ref: {countRef.current}</span>

            <div>
                <button onClick={updateCount}>Actualizar solo ref</button>
                <i className="note"> Solo actualiza la ref, no dispara useEffect </i>
            </div>

            <button onClick={resetAll}>Resetear</button>

            <p className="explanation">
                <b>Explicación del problema:</b> Usar <code>useRef</code> como dependencia
                    en <code>useEffect</code> no funciona como se espera, porque si bien cambia
                    el valor de <code>ref.current</code>, esto no cambia la referencia del objeto.
            </p>

            <p className="explanation">
                <b>Solución:</b> Para que <code>useEffect</code> reaccione a cambios, se debe
                    usar <code>useState</code> en lugar de <code>useRef</code>, actualizar el estado
                    cambia la referencia y dispara el efecto.
            </p>
        </div>
    );
};

export default EffectDependencyProblem2;