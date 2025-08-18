import { ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import { useLocation, useSearchParams } from "react-router-dom";
import "./about.scss";

const About = () => {
    const location = useLocation();
    const [ searchParams, setSearchParams ] = useSearchParams();

    const updateParams = () => {
        setSearchParams({ name: "Juan", age: "30" });
    };

    const clearParams = () => {
        setSearchParams({});
    };

    return (
        <div className="about">
            <Text variant="h2">Trabajando con React Router - Nosotros</Text>

            <Text variant="h3">Demostración del uso de useNavigate</Text>
            <Text variant="p">Ruta actual: {location.pathname}</Text>
            <Text variant="p">Búsqueda: {location.search}</Text>

            <Text variant="h3">Demostración del uso de useSearchParams</Text>
            <Text variant="p">Nombre: {searchParams.get("name") || ""}</Text>
            <Text variant="p">Edad: {searchParams.get("age") || ""}</Text>
            <ButtonPrimary onClick={updateParams}>Actualizar Parámetros</ButtonPrimary>
            <ButtonPrimary onClick={clearParams}>Limpiar Parámetros</ButtonPrimary>
        </div>
    );
};

export default About;