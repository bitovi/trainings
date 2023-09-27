import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CowbirdProvider } from "./cowbirdProvider.tsx";

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
	//   <CowbirdProvider>
	<App />
	//   </CowbirdProvider>
	// </React.StrictMode>,
);
