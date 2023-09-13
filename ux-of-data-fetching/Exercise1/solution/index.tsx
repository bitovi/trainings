import { render } from "react-dom";

import App from "./App";
import { worker } from "./mocks/browser";

const rootElement = document.getElementById("root");

worker
  .start({
    // findWorker: (scriptURL: any, _mockServiceWorkerUrl: any) =>
    //   scriptURL.includes("mockServiceWorker"),
    serviceWorker: {
      // Points to the custom location of the Service Worker file.
      url: "https://dhjwkj.csb.app/mockServiceWorker.js",
    },
  })
  .then(() => {
    render(<App />, rootElement);
  });
