import "./App.css";
import { Select } from "./Select";
import { toSelectOptions } from "./toSelectOptions";
import { useState } from "react";

const years = ["2020", "2021", "2022"];

function App() {
  const [year, setYear] = useState<string>("");
  return (
    <div className="app">
      <header className="header">
        <h1>Vehicle Information</h1>
        <Select
          label="Year"
          name="year"
          options={toSelectOptions(years)}
          value={year}
          onChange={(value) => setYear(value)}
          disabled={years.length === 0}
        />
      </header>
    </div>
  );
}

export default App;
