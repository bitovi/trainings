/**
 * @jest-environment jsdom
 */
//manually mocking toSelectOptions

import { render } from "@testing-library/react";
import { Select } from "./Select";
import { toSelectOptions } from "./toSelectOptions";

jest.mock("./toSelectOptions", () => ({
  toSelectOptions: jest.fn().mockReturnValue([
    { label: "2021", value: "2021" },
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023" },
  ]),
}));
describe("Year", () => {
  test("Year works with one-off mocked values", () => {
    toSelectOptions.mockImplementationOnce(() => {
      return [{ label: "2024", value: "2024" }]
    })

    const result = render(
      <Select
        label="Year"
        name="year"
        value="2023"
        options={toSelectOptions(["2020"])}
      />
    );
    const selector = result.getByText("Select...");
    expect(selector).toBeDefined()
    expect(selector.querySelector("option[value='2024']")).toBeDefined()
  });

  test("Year works with mocked values", () => {
    const result = render(
      <Select
        label="Year"
        name="year"
        value="2023"
        options={toSelectOptions(["2020"])}
      />
    );
    const selector = result.getByText("Select...");
    expect(selector).toBeDefined()
    expect(selector.querySelector("option[value='2021']")).toBeDefined()
    expect(selector.querySelector("option[value='2022']")).toBeDefined()
    expect(selector.querySelector("option[value='2023']")).toBeDefined()
  });
});
