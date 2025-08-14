import Button from "@/components/buttons/Button";
import { Text } from "@/components/texts";
import { useLocation, useNavigate } from "react-router-dom";
import "./contact.scss";

const Contact = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    };

    const goToAboutWithParams = () => {
        navigate("/about?name=Lorena Medina&age=21");
    };

    const goToProduct = () => {
        navigate("/products/2");
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="contact">
            <Text variant="h2">Trabajando con React Router - Contacto</Text>

            <Text variant="h3">Demostración del uso de useLocation</Text>
            <Text variant="p">Ruta actual: {location.pathname}</Text>
            <Text variant="p">Búsqueda: {location.search}</Text>

            <Text variant="h3">Demostración del uso de useNavigate</Text>
            <Button variant="primary" size="md" onClick={goToHome}>Ir a la página de Inicio</Button>
            <Button variant="primary" size="md" onClick={goToAboutWithParams}>Ir a la página de Nosotros con query params</Button>
            <Button variant="primary" size="md" onClick={goToProduct}>Ir a Producto 2</Button>
            <Button variant="primary" size="md" onClick={goBack}>Volver a la página anterior</Button>
        </div>
    );
};

export default Contact;