const toSelectOptions = require("../utils/toSelectOptions");

jest.mock("../utils/toSelectOptions");

test("uses data ", () => {
  expect(toSelectOptions).toEqual([
    { label: "2021", value: "2021" },
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023" },
  ]);
});
