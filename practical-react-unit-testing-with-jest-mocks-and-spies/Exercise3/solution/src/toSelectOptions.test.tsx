const { toSelectOptions } = require("./toSelectOptions");

jest.mock("./getDefaultSelectOptions");

describe("toSelectOptions with dependencies manually mocked", () => {
  test("Unmocked test of toSelectOptions", () => {
    expect(toSelectOptions(["2021", "2022", "2023"])).toEqual([
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
