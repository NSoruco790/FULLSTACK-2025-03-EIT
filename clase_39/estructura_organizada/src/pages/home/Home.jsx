import { ButtonDanger, ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import paths from "@/utils/paths";
import { useState } from "react";
import "./home.scss";

const Home = () => {
    const [ count, setCount ] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
        <div className="home">
            <img src={`${paths.images}/logo.png`} alt="Logo" />
            <Text variant="h1">Página de Inicio</Text>

            <div className="home__counter">
                <ButtonPrimary onClick={handleIncrement}>Incrementar</ButtonPrimary>
                <Text variant="p">{count}</Text>
                <ButtonDanger onClick={handleDecrement}>Decrementar</ButtonDanger>
            </div>

            <Text variant="span">
                Esta es una página de ejemplo que demuestra el uso de componentes de texto y botones.
            </Text>
        </div>
    );
};

export default Home;