import { useVehicle } from "./useVehicle";
import "./App.css";

function App() {
  const vehicle = useVehicle("2010", "Jeep", "Wrangler");

  return (
    <div className="app">
      <header className="header">
        <h1>Vehicle Information</h1>
        <p>{vehicle?.getVehicle()}</p>
      </header>
    </div>
  );
}

export default App;
