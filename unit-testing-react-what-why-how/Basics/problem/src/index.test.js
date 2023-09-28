import { greeting } from "./index";
import { isColorInArray } from "./index";

// 1. Here is an example of a poorly documented test.
// Question: What does this test for? What purpose does it serve?
// Rename this test to something more descriptive.
describe("first function", () => {
	test("passes test", () => {
		const result = greeting();
		expect(result);
	});
});

// 2. Write a smoke test for the `isColorInArray` function

// 3. Write a comprehensive test for the `isColorInArray` function
