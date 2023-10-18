import ReactDOM from "react-dom/client";

import App from "./App";

const mainElement = document.querySelector("main");
if (mainElement) {
  const root = ReactDOM.createRoot(mainElement);
  root.render(<App />);
} else {
  console.error("No main element");
}
