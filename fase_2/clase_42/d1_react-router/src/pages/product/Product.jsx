import Button from "@/components/buttons/Button";
import { Text } from "@/components/texts";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./product.scss";

const products = [
    { id: 1, name: "Laptop", price: "$1200" },
    { id: 2, name: "Phone", price: "$800" },
    { id: 3, name: "Tablet", price: "$500" },
];

const Product = () => {
    const { id } = useParams();
    const [ product, setProduct ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const productFound = products.find((product) => product.id === parseInt(id)) || null;
        setProduct(productFound);
    }, [id]);

    return (
        <div className="product">
            <Text variant="h2">Trabajando con React Router - Productos</Text>

            {products.map((product) => (
                <div key={product.id}>
                    <Text variant="p">Nombre: {product.name}</Text>
                    <Text variant="p">Precio: {product.price}</Text>
                    <Button variant="primary" size="md" onClick={() => navigate(`/products/${product.id}`)}>Ver Producto</Button>
                </div>
            )) }

            <Text variant="h3">Demostración del uso de useParams + useNavigate</Text>
            {product && (
                <>
                    <Text variant="p">Id URL: {id}</Text>
                    <Text variant="p">Id {product.id}</Text>
                    <Text variant="p">Nombre: {product.name}</Text>
                    <Text variant="p">Precio: {product.price}</Text>
                </>
            )}
        </div>
    );
};

export default Product;