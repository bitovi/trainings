import { createRoot } from "react-dom/client";
import App from "./App";
import { ComplexStateProvider, GlobalStateProvider } from "./providers";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
const root = createRoot(rootElement);

root.render(
  <GlobalStateProvider>
    <ComplexStateProvider>
      <App />
    </ComplexStateProvider>
  </GlobalStateProvider>
);
