import { StrictMode } from "react";
import Timer from "./timer.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Timer />
        </StrictMode>
    )