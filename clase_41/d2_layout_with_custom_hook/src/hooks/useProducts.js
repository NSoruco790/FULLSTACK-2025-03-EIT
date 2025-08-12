import { useEffect, useState } from "react";

const useProducts = () => {
    const [ products, setProducts ] = useState([ ]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        get();
    }, []);

    const generateId = () => {
        let id = 0;

        products.forEach((product) => {
            if (product.id > id) {
                id = product.id;
            }
        });

        return id + 1;
    };

    const get = () => {
        setLoading(true);
        setError(null);

        try {
            const collection = JSON.parse(localStorage.getItem("products") || []);
            setProducts(collection);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const getById = (id) => {
        setLoading(true);
        setError(null);

        try {
            const collection = JSON.parse(localStorage.getItem("products") || []);
            const product = collection.find((product) => product.id === id);

            if (!product) {
                throw new Error("Producto no encontrado");
            }

            return product;
        } catch (error) {
            setError(error.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const create = (product) => {
        try {
            const collection = [ ...products, { ...product, id: generateId() }];
            localStorage.setItem("products", JSON.stringify(collection));
            setProducts(collection);
        } catch (error) {
            setError(error.message);
        }
    };

    const update = (id, data) => {

        try {
            const product = { ...getById(id), ...data };
            const index = products.findIndex((product) => product.id === id);
            products[index] = product;

            const collection = [...products];
            localStorage.setItem("products", JSON.stringify(collection));
            setProducts(collection);
        } catch (error) {
            setError(error.message);
        }
    };

    const remove = (id) => {
        try {
            const collection = products.filter((product) => product.id !== id);
            localStorage.setItem("products", JSON.stringify(collection));
            setProducts(collection);
        } catch (error) {
            setError(error.message);
        }
    };

    return {
        products,
        loading,
        error,
        getById,
        create,
        update,
        remove,
    };
};

export default useProducts;