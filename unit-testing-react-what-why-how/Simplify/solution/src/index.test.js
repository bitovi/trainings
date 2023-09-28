import { helloWorld, isColorInArray } from "./index";

// 1. What does this test?
		// Smoke test to see if `helloWorld` doesn't immediately error.
		// Also tests that codesandbox can run tests successfully.
		// Does not test if `helloWorld` works properly. 
		// Does not test if `helloWorld` returns a string or what that string is.

// Note: acceptable test names could be "passes smoke test" or "is not on fire"
describe("hello world", () => {
		it("does not break immediately", () => {

			const result = helloWorld();

			expect(result);
	});
});

// 2. Write a smoke test for the `isColorInArray` function
describe("isColorInArray", () => {
		it("is not on fire", () => {

			const result = isColorInArray({string: "red", colors: ["red", "blue", "green"]});
			
			expect(result);
	});
});

// 3. Write a comprehensive test for the `isColorInArray` function
describe("isColorInArray", () => {
		it("returns true when `potentialColor` is in `colors`", () => {

			// Arrange - group inputs and comparison values
			const potentialColor = "red";
			const colors = ["red", "blue", "green"];
			// Note: missing comparison value. Why?

			// Act - call the function just like you would elsewhere in code
			const result = isColorInArray({potentialColor, colors});

			// Assert - compare the result with the expected value
			// `.toBe(true)`
			expect(result).toBe(true);
	});
});
