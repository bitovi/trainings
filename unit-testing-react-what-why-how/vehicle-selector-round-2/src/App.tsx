import { useState } from "react";
import "./App.css";
import bitoviLogo from "@assets/bitovi-logo.svg";
import {
	VehicleSelector,
	VehicleSelectorWithEffects,
	VehicleSelectorBetterUseState,
	VehicleSelectorUseReducer,
} from "./components/vehicleSelector";
import vehicleSelectorCode from "@components/vehicleSelector/VehicleSelector?raw";
import vehicleSelectorWithEffectsCode from "@components/vehicleSelector/VehicleSelectorWithEffects?raw";
import vehicleSelectorBetterUseStateCode from "@components/vehicleSelector/VehicleSelectorBetterUseState?raw";
import vehicleSelectorUseReducerCode from "@components/vehicleSelector/VehicleSelectorUseReducer?raw";
import { Highlighter } from "rc-highlight";

type Version =
	| "useState"
	| "useStateWithEffects"
	| "useStateBetter"
	| "useReducer";

const VehicleSelectors: Record<Version, JSX.Element> = {
	useState: <VehicleSelector />,
	useStateWithEffects: <VehicleSelectorWithEffects />,
	useStateBetter: <VehicleSelectorBetterUseState />,
	useReducer: <VehicleSelectorUseReducer />,
};

const VehicleSelectorCode: Record<Version, string> = {
	useState: vehicleSelectorCode,
	useStateWithEffects: vehicleSelectorWithEffectsCode,
	useStateBetter: vehicleSelectorBetterUseStateCode,
	useReducer: vehicleSelectorUseReducerCode,
};

function App() {
	const [version, setVersion] = useState<Version>("useState");

	return (
		<div className="app">
			<iframe
				title="vehicle-selector"
				src="https://bitovi.github.io/vehicle-selector-react/"
			></iframe>
		</div>
	);
}

export default App;
