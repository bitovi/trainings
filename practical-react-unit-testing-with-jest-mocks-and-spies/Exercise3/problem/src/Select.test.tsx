/**
 * @jest-environment jsdom
 */
//manually mocking toSelectOptions

import { render } from "@testing-library/react";
import { Select } from "./Select";
import { toSelectOptions } from "./toSelectOptions";

// mock the toSelectOptions module with a callback that returns a mock module
//   mocking the toSelectOptions function

describe("Year", () => {
  test("Year works with one-off mocked values", () => {
    // Use mockImplementationOnce to get a 2024 value for just this one render
    const result = render(
      <Select
        label="Year"
        name="year"
        value="2024"
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
