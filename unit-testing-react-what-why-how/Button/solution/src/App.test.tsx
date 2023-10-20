import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App"

describe("app smoke test", () => {
	test("queries galore", () => {
		render(<App />)

		const submitButton = screen.getByRole('button')
		const usernameInput = screen.getByLabelText('Username')
		const usernameInputAgain = screen.getByPlaceholderText(/username/i)
		const header = screen.getByText(/welcome/i)
		const colorPicker = screen.getByDisplayValue('red')
		const randomImage = screen.getByAltText(/randomly/i)
		const googleLink = screen.getByTitle(/lucky/i)
		const headerBadly = screen.getByTestId('main-header')

		expect(submitButton).toBeInTheDocument()
		expect(usernameInput).toBeInTheDocument()
		expect(usernameInputAgain).toBeInTheDocument()
		expect(header).toBeInTheDocument()
		expect(colorPicker).toBeInTheDocument()
		expect(randomImage).toBeInTheDocument()
		expect(googleLink).toBeInTheDocument()
		expect(headerBadly).toBeInTheDocument()


	});

});
