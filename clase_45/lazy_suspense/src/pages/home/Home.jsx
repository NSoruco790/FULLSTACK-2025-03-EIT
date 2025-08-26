import { Text } from "@/components/texts";
import { lazy, Suspense } from "react";
import "./home.scss";

const Greet = lazy(() => import("./greet/Greet"));

const Home = () => {

    return (
        <div className="home">
            <Text variant="h2">Trabajando con Lazy y Suspense</Text>

            <Suspense fallback={<Text variant="span">Cargando componente...</Text>}>
                <Greet />
            </Suspense>

            <Text variant="p">Colocar Network en 3G para probar Lazy y Suspense</Text>
        </div>
    );
};

export default Home;