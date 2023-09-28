import React from "react";

interface ButtonProps {
	label: string;
	onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
}: ButtonProps) => {
	return <a onClick={() => onClick()}> {label} </a>;
};
