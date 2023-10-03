import React from "react";
import "./styles.css";

interface ButtonProps {
	label: string;
	onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
}: ButtonProps) => {
	return <button onClick={() => onClick()}> {label} </button>;
};

function App() {
	return (
		<Button
			label="close"
			onClick={() => {
				alert("Closed");
			}}
		/>
	);
}

export default App;
