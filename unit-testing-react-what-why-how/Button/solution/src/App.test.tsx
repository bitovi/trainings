import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./App";
import "@testing-library/jest-dom";

describe("the button", () => {
	it("will call its handler when clicked", () => {
		// Arrange
		// jest.fn() creates a mock function
		const handler = jest.fn();

		// Act
		render(<Button label="Click Me!" onClick={handler} />);

		// Arrange
		const button = screen.getByText("Click Me!");

		// Act
		fireEvent.click(button);

		// userEvent is actually better than fireEvent
		// we're using fireEvent purely for simplicity in this training
		// "fireEvent dispatches DOM events, whereas user-event simulates full interactions, which may fire multiple events and do additional checks along the way."
		// from the [docs](https://testing-library.com/docs/user-event/intro/#:~:text=fireEvent%20dispatches%20DOM%20events%2C%20whereas,additional%20checks%20along%20the%20way)

		// Assert
		expect(handler).toHaveBeenCalledTimes(1);
	});
});
