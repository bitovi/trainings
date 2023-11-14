/*

in this file you will not need to make any changes, but you must reference
  the expected value of the test here to know what to use for the mock
  value in the mock module.

*/
const { getDefaultSelectOptions } = require("./getDefaultSelectOptions");

describe("getDefaultSelectOptions with dependencies manually mocked", () => {
  test("With mock moment", () => {
    //use the mocked version of moment() in __mocks__ (not src/__mocks__!)
    expect(getDefaultSelectOptions()).toEqual([
      "2000",
    ]);
  });
});
