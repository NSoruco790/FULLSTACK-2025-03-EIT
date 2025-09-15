import { Text } from "@/components/texts";
import { useEffect, useState } from "react";
import "./greet.scss";

const getDeferredGreeting = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hola Mundo (diferido)");
    }, 2000);
});

const Greet = () => {
    const [ greeting, setGreeting ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const fetchGreeting = async () => {
        setLoading(true);

        const message = await getDeferredGreeting();
        setGreeting(message);

        setLoading(false);
    };

    useEffect(() => {
        fetchGreeting();
    }, []);

    return (
        <Text variant="h3">{loading ? "Cargando saludo..." : greeting}</Text>
    );
};

export default Greet;