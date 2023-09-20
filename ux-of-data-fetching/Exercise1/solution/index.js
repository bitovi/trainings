import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { worker } from "./mocks/worker";

if (process.env.NODE_ENV === "development") {
  worker
    .start({
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    })
    .then(() => {
      const rootElement = document.getElementById("root");
      const root = createRoot(rootElement);

      root.render(
        <StrictMode>
          <App />
        </StrictMode>
      );
    });
}
