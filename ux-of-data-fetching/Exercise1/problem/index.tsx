import React from "react";
import { render } from "react-dom";

import App from "./App";
import { worker } from "./mocks/browser";

const rootElement = document.getElementById("root");

worker.start().then(() => {
  render(<App />, rootElement);
});
