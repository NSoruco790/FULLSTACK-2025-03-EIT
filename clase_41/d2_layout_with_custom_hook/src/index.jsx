import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Layout } from "./components/layout";
import AppProvider from "./contexts/AppProvider";
import "./index.scss";
import Home from "./pages/home/Home";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppProvider>
            <Layout>
                <Home/>
            </Layout>
        </AppProvider>
    </StrictMode>,
);