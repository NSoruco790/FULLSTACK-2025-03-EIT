import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import Tasks from "./pages/tasks/Tasks";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Tasks/>
    </StrictMode>,
);