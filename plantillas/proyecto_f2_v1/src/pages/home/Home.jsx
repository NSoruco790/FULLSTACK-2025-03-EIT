import logo from "@/assets/images/logo.png";
import { Text } from "@/components/texts";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <img src={logo} alt="Logo" />
            <Text variant="h1">Página de Inicio</Text>
        </div>
    );
};

export default Home;