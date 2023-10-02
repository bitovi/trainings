import { render } from "@testing-library/react";
import App from "./App";

test("renders App", async () => {
	render(<App />);
});

// 1. Improve naming if desired
describe("element", () => {
	test("onclick invokes handle", () => {
		// jest.fn() creates a mock handler to use
		const handler = jest.fn();

		// 2. write test here
	});

	// 3. Bonus: write more tests here
});
