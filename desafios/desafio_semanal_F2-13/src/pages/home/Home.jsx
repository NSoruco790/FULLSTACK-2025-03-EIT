import { useEffect, useRef, useState } from "react";

import { Text } from "@/components/texts";
import { CounterControl } from "./counter-control";
import { CounterDisplay } from "./counter-display";
import { CounterMessage } from "./counter-message";
import "./home.scss";

const Home = () => {
    const [ count, setCount ] = useState(0);
    const [ message, setMessage ] = useState("¡Comienza tu sesión de estudio!");
    const [ showAlert, setShowAlert ] = useState(false);

    const mainContainerRef = useRef(null);

    useEffect(() => {
        if (count > 0) {
            setMessage(`¡Excelente! Has estudiado ${count} horas en total.`);

            if (count % 5 === 0) {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000);
            }
        }
    }, [count]);

    const handleAddHour = (hour) => {
        setCount(count + hour);
    };

    const handleReset = () => {
        setCount(0);
        setMessage("¡Comienza tu sesión de estudio!");
    };

    return (
        <div ref={mainContainerRef} className="home">
            <Text variant="h1">Contador de horas de estudio</Text>

            <CounterDisplay value={count}/>
            <CounterControl onAddHour={handleAddHour} onReset={handleReset} />
            <CounterMessage message={message} showAlert={showAlert} />
        </div>
    );
};

export default Home;