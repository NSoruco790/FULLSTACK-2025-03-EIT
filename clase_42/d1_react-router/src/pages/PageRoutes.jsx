
import { Route, Routes } from "react-router-dom";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Product from "./product/Product";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<Product />} />
        </Routes>
    );
};

export default PageRoutes;