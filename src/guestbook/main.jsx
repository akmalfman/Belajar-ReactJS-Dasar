import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import GuestBook from './GuestBook';

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <GuestBook />
        </StrictMode>
    )