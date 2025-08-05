import { useState } from "react";
import { ButtonConfirm, ButtonDanger } from "../../components/buttons";
import { TextDescription, TextTitle } from "../../components/texts";
import paths from "../../utils/paths";
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
            <TextTitle size="xxl">Página de Inicio</TextTitle>

            <div className="home__counter">
                <ButtonConfirm onClick={handleIncrement}>Incrementar</ButtonConfirm>
                <TextTitle size="md">{count}</TextTitle>
                <ButtonDanger onClick={handleDecrement}>Decrementar</ButtonDanger>
            </div>

            <TextDescription size="md">
                Esta es una página de ejemplo que demuestra el uso de componentes de texto y botones.
            </TextDescription>

            <img className="home__image"
                src={`${paths.images}/img01.jpg`}
                alt="Imagen de coche"/>
        </div>
    );
};

export default Home;