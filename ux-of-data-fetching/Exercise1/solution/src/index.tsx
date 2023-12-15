import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { worker } from "../mocks/worker";

if (process.env.NODE_ENV === "development") {
    worker
        .start({
            serviceWorker: {
                url: "/mockServiceWorker.js",
            },
        })
        .then(() => {
            const mainElement = document.querySelector("main");
            if (mainElement) {
                const root = createRoot(mainElement);
                root.render(
                    <StrictMode>
                        <App />
                    </StrictMode>
                );
            } else {
                console.error("No main element");
            }
        }, error => {
            console.error('MSW failed to start with error:', error);
        });
}