import { helloWorld, isColorInArray } from "./index";

// 1. What does this test?
// Smoke test to see if `helloWorld` doesn't immediately error.
// Also tests that codesandbox can run tests successfully.
// Does not test if `helloWorld` works properly. 
// Does not test if `helloWorld` returns a string or what that string is.

// Better test name: "passes smoke test" or "is not on fire"
describe("hello world", () => {
		test("Badly named initial test", () => {

			const result = helloWorld();

			expect(result);
	});
});

// 2. Write a smoke test for the `isColorInArray` function
describe("isColorInArray", () => {
		test("is not on fire", () => {

			const result = isColorInArray({string: "red", colors: ["red", "blue", "green"]});
			
			expect(result);
	});
});

// 3. Write a comprehensive test for the `isColorInArray` function
describe("isColorInArray", () => {
		test("returns true when `potentialColor` is in `colors`", () => {

			const result = isColorInArray({potentialColor: "red", colors: ["red", "blue", "green"]});

			// `.toBe(true)`
			expect(result).toBe(true);
	});
});