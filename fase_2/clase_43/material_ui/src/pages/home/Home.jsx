import logo from "@/assets/images/logo.png";
import { AlertDanger, AlertSuccess } from "@/components/alerts";
import { ButtonDanger, ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import { HomeOutlined, MailOutline } from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import { useState } from "react";
import "./home.scss";

const Home = () => {
    const [ showAlertSuccess, setShowAlertSuccess ] = useState(false);
    const [ showAlertDanger, setShowAlertDanger ] = useState(false);

    const handleShowAlertSuccess = () => {
        setShowAlertSuccess(true);
    };

    const handleShowAlertDanger = () => {
        setShowAlertDanger(true);
    };

    return (
        <div className="home">
            <Text variant="h2">Trabajando con Material UI</Text>

            <HomeOutlined/>

            <Avatar alt="Logo" src={logo} />

            <Badge badgeContent={4} color="primary">
                <MailOutline color="action" />
            </Badge>

            <ButtonPrimary onClick={handleShowAlertSuccess}>
                Mostrar alerta de éxito
            </ButtonPrimary>

            <ButtonDanger onClick={handleShowAlertDanger}>
                Mostrar alerta de error
            </ButtonDanger>

            <AlertSuccess
                open={showAlertSuccess}
                message="¡Operación completada con éxito!" />

            <AlertDanger
                open={showAlertDanger}
                message="¡Error! Algo salió mal" />
        </div>
    );
};

export default Home;