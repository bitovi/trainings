import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { UserProvider } from "./providers";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
const root = createRoot(rootElement);

root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
