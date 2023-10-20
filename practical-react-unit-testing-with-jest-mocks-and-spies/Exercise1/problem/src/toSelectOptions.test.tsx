const toSelectOptions = require("./toSelectOptions");

jest.mock("./toSelectOptions");

//the mock is located in the __mocks__ sibling folder
describe("Manually mock and bypass toSelectOptions", () => {
  test("Manual Mock test of toSelectOptions", () => {
    expect(toSelectOptions).toEqual([
      { label: "2021", value: "2021" },
      { label: "2022", value: "2022" },
      { label: "2023", value: "2023" },
    ]);
  });

  test("Bypassing the mock", () => {
    //bypass the mock of toSelectOptions using requireActual
    //once bypassed correctly, the error will go away.
    const actualModule = jest.fn();
    expect(actualModule.toSelectOptions(["2000"])).toEqual([
      { label: "2000", value: "2000" },
    ]);
  });
});
