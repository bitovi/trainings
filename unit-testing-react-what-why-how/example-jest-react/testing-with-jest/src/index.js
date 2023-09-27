import React from "react";
import ReactDOM from "react-dom";
import { MyComponent } from "./MyComponent";

function App() {
  return(
    <div>
      <p>Yippy skippy</p>
      <iframe
        title="vehicle-selector"
        src="https://bitovi.github.io/vehicle-selector-react/"
        width="600"
        height="800"
      ></iframe>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
