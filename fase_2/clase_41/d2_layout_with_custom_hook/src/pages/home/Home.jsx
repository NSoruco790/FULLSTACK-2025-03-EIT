import { ButtonDanger, ButtonPrimary } from "@/components/buttons";
import { Text } from "@/components/texts";
import AppContext from "@/contexts/AppContext";
import { useContext } from "react";
import "./home.scss";

const Home = () => {
    const { productContext } = useContext(AppContext);
    const { loading, error, create, update, remove, products } = productContext;

    const newProduct = {
        name: `Producto MOD${Math.round(Math.random() * 10000)}`,
        price: Math.floor(Math.random() * 100) + 1,
    };

    return (
        <div className="home">
            <Text variant="h2">Trabajando con custom hook + useContext + LocalStorage</Text>

            <Text variant="h3">Productos</Text>
            {loading && <Text variant="p">Cargando...</Text>}
            {error && <Text variant="p" style={{ color: "red" }}>Error: {error}</Text>}

            <ButtonPrimary onClick={() => create(newProduct)}>Crear Producto</ButtonPrimary>

            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <div>
                        <Text variant="span">{product.id} - {product.name} - ${product.price} </Text>
                        <ButtonPrimary size="sm" onClick={() => update(product.id, { name: "Producto Renombrado" })}>Modificar</ButtonPrimary>
                        <ButtonDanger size="sm" onClick={() => remove(product.id)}>Eliminar</ButtonDanger>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;