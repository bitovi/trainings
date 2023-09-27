import { helloWorld } from "./index";
import { isColorInArray } from "./index";

// Test codesandbox functionality.
// 1. What does this test?

describe("hello world", () => {
	test("should not fail immediately", () => {
		const result = helloWorld();
		expect(result);
	});
});

// 2. Write a smoke test for the `isColorInArray` function

// 3. Write a comprehensive test for the `isColorInArray` function
