 /* 
  
 Exercise 3: 
  
 1) Implement MockMoment#year() in the __mocks__/moment.ts file
 2) Implement getDefaultSelectOptions() in the src/__mocks__/getDefaultSelectOptions.ts file
 3) Enter the correct argument in the *unmocked* test of toSelectOptions()
  
 The tests should pass after completing the steps above. 
  
 */ 
const { toSelectOptions } = require("./toSelectOptions");

jest.mock("./getDefaultSelectOptions");

describe("toSelectOptions with dependencies manually mocked", () => {
  test("Unmocked test of toSelectOptions", () => {
    expect(toSelectOptions(/* enter the values to make this test pass */)).toEqual([
      { label: "2021", value: "2021" },
      { label: "2022", value: "2022" },
      { label: "2023", value: "2023" }
    ]);
  });

  test("With mock default values", () => {
    //use the mocked version of getDefaultSelectOptions()
    expect(toSelectOptions()).toEqual([{ label: "2000", value: "2000" }]);
  });
});
