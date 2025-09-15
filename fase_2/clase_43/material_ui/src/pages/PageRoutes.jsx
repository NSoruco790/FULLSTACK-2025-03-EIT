import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Other from "./other/Other";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/other" element={<Other />} />
        </Routes>
    );
};

export default PageRoutes;