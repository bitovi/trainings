const { getDefaultSelectOptions } = require("./getDefaultSelectOptions");

jest.mock("moment");

describe("getDefaultSelectOptions with dependencies manually mocked", () => {
  test("With mock moment", () => {
    //use the mocked version of moment() in __mocks__ (not src/__mocks__!)
    expect(getDefaultSelectOptions()).toEqual([
      "2000",
    ]);
  });
});
