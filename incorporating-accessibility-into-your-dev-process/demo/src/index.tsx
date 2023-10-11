import axe from "@axe-core/react";
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

import App from "./App";

const mainElement = document.querySelector("main");
if (mainElement) {
    const root = createRoot(mainElement);
    root.render(<App />);
    axe(React, ReactDOM, 1000);
} else {
    console.error("No main element");
}