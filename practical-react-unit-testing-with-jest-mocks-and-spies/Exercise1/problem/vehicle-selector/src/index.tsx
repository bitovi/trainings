import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CowbirdProvider } from "./providers/CowbirdProvider";
import { LocationProvider } from "./providers/locationProvider/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LocationProvider>
      <CowbirdProvider>
        <App />
      </CowbirdProvider>
    </LocationProvider>
  </React.StrictMode>
);
