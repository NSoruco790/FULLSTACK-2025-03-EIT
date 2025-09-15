import Button from "@/components/buttons/Button";
import { Text } from "@/components/texts";
import { useLocation, useNavigate } from "react-router-dom";
import "./home.scss";

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const goToProduct = () => {
        navigate("/products/1");
    };

    return (
        <div className="home">
            <Text variant="h2">Trabajando con React Router - Inicio</Text>

            <Text variant="h3">Demostración del uso de useLocation</Text>
            <Text variant="p">Ruta actual: {location.pathname}</Text>
            <Text variant="p">Búsqueda: {location.search}</Text>

            <Button variant="primary" size="md" onClick={goToProduct}>Ver Producto 1</Button>
        </div>
    );
};

export default Home;