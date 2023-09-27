import React from "react";
import ReactDOM from "react-dom";
import { MyComponent } from "./MyComponent";

function App() {
  return <MyComponent label="My component" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
