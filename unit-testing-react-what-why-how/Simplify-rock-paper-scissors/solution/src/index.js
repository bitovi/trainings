import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

if (process.env.NODE_ENV === "development") {
	const rootElement = document.getElementById("root");
	const root = createRoot(rootElement);

	root.render(
		<StrictMode>
			<App />
		</StrictMode>
	);
}
