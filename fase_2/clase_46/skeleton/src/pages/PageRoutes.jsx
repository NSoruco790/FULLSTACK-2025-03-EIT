import { Text } from "@/components/texts";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./home/Home"));
const Other = lazy(() => import("./other/Other"));

const PageRoutes = () => {
    return (
        <Suspense fallback={<Text variant="span">Cargando página...</Text>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/other" element={<Other />} />
            </Routes>
        </Suspense>
    );
};

export default PageRoutes;