import { useState } from "react";
import "./App.css";

function App() {
	return (
		<div>
			<p>Iframe of working site here: emptied app.tsx & wrappers</p>
			<iframe
				title="vehicle-selector"
				src="https://bitovi.github.io/vehicle-selector-react/"
				width="600"
				height="800"
			></iframe>
			<p>Iframe 2</p>
			<iframe
				title="vehicle-selector"
				src="https://bitovi.github.io/vehicle-selector-react/"
				width="100%"
				height="100%"
			></iframe>
		</div>
	);
}

export default App;
