import "./App.css";
import bitoviLogo from "@assets/bitovi-logo.svg";
import { VehicleSelectorUseReducer } from "./components/vehicleSelector";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div>
          <a href="https://bitovi.com" target="_blank">
            <img src={bitoviLogo} className="logo" alt="Bitovi logo" />
          </a>
        </div>
        <h1>Vehicle Information</h1>
      </header>
      <main>
        <VehicleSelectorUseReducer />
      </main>
    </div>
  );
}

export default App;
