// code to test
interface Props {
	potentialColor: string;
	colors: string[];
}
export function isColorInArray({ potentialColor, colors }: Props): boolean {
	return !!colors.find((color) => color === potentialColor);
}

//expected behaviors
isColorInArray({ potentialColor: "blue", colors: ["red", "yellow", "blue"] }); //true
isColorInArray({ potentialColor: "blue", colors: ["red", "yellow"] }); //false

export default isColorInArray;

export function greeting() {
	return "hello world";
}
