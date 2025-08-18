import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Tasks } from "./tasks";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
        </Routes>
    );
};

export default PageRoutes;