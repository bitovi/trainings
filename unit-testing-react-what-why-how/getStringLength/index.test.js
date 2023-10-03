import { getStringLength } from './index';

describe("getStringLength", () => {
	it("is not broken, passes smoke test", () => {
		const length = getStringLength("I love yams");
		expect(length);
	});

	it("returns 11 when given 'I love yams", () => {
		const length = getStringLength("I love yams");
		expect(length).toBe(11);
	});
});



