import { useState } from "react";
import "./App.css";
import {
  VehicleSelector,
  VehicleSelectorWithEffects,
  VehicleSelectorBetterUseState,
  VehicleSelectorUseReducer,
} from "./components/vehicleSelector";
import { VehicleSelectorUrl } from "./components/vehicleSelector/VehicleSelectorUrl";

type Version =
  | "useState"
  | "useStateWithEffects"
  | "useStateBetter"
  | "useReducer"
  | "urlParams";

const VehicleSelectors: Record<Version, JSX.Element> = {
  useState: <VehicleSelector />,
  useStateWithEffects: <VehicleSelectorWithEffects />,
  useStateBetter: <VehicleSelectorBetterUseState />,
  useReducer: <VehicleSelectorUseReducer />,
  urlParams: <VehicleSelectorUrl />,
};

function App() {
  const [version, setVersion] = useState<Version>("useState");

  return (
    <div className="app">
      <header className="header">
        <h1>Vehicle Information</h1>
      </header>
      <main>
        <div style={{ padding: "1rem 0" }}>
          <button onClick={() => setVersion("useState")}>useState</button>
          <button onClick={() => setVersion("useStateWithEffects")}>
            useState w/Effects
          </button>
          <button onClick={() => setVersion("useStateBetter")}>
            Better useState
          </button>
          <button onClick={() => setVersion("useReducer")}>useReducer</button>
          <button onClick={() => setVersion("urlParams")}>URL Params</button>
        </div>
        {VehicleSelectors[version]}
      </main>
    </div>
  );
}

export default App;
