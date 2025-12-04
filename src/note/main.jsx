import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import NoteApp from "./NoteApp.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <NoteApp />
        </StrictMode>
    )