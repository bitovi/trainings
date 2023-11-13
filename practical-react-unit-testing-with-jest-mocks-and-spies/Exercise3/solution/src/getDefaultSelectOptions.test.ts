const { getDefaultSelectOptions } = require("./getDefaultSelectOptions");

jest.mock("moment");

describe("getDefaultSelectOptions with dependencies manually mocked", () => {
  test("With mock moment", () => {
    expect(getDefaultSelectOptions()).toEqual([
      "2000",
    ]);
  });
});
