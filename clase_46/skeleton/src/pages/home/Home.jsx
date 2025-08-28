import imagePath from "@/assets/images/img01.jpg";
import { Text } from "@/components/texts";
import { useEffect, useState } from "react";
import "./home.scss";
import ProductCard from "./product-card/ProductCard";

const Home = () => {
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="home">
            <Text variant="h2">Trabajando con Skeleton</Text>

            <ProductCard
                isLoading={isLoading}
                imagePath={imagePath}
                imageAlt="Imagen del producto"
                title="Título del producto"
                description="Descripción del producto. Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
        </div>
    );
};

export default Home;