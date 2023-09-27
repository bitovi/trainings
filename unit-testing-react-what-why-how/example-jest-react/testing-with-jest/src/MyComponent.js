import React from "react";

export const MyComponent = ({ label }) => {
  return <div>
    {label}
    IFRAME:
    <iframe
				title="vehicle-selector"
				src="https://bitovi.github.io/vehicle-selector-react/"
				width="600"
				height="800"
			></iframe>
    </div>;
};
