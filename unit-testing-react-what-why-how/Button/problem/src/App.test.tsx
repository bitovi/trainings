import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./App";
import "@testing-library/jest-dom";

// 1. Improve naming if desired
describe("element", () => {
	test("onclick invokes handle", () => {
		// jest.fn() creates a mock handler to use
		const handler = jest.fn();

		// 2. write test here
	});

	// 3. Bonus: write more tests here
});
