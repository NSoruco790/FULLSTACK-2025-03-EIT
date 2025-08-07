import { Text } from "@/components/texts";
import paths from "@/utils/paths";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <img src={`${paths.images}/logo.png`} alt="Logo" />
            <Text variant="h1">Página de Inicio</Text>
        </div>
    );
};

export default Home;