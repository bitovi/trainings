import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const mainElement = document.querySelector("main");
if (mainElement) {
    const root = createRoot(mainElement);
    root.render(<App />);
} else {
    console.error("No main element");
}