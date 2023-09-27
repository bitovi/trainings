import { helloWorld } from "./index";
import { isColorInArray } from "./index";

// 1. What does this test for? What purpose does it serve?

describe("hello world", () => {
	test("should not fail immediately", () => {
		const result = helloWorld();
		expect(result);
	});
});

// 2. Write a smoke test for the `isColorInArray` function

// 3. Write a comprehensive test for the `isColorInArray` function
