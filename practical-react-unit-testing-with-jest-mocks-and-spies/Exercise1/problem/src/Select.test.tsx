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

    render(
      <Select
        label="Year"
        name="year"
        value="2024"
        options={toSelectOptions(["2020"])}
      />
    );
    expect(screen.getByText("2024")).toEqual(expect.any(HTMLOptionElement));
  });

  test("Year works with mocked values", () => {
    render(
      <Select
        label="Year"
        name="year"
        value="2023"
        options={toSelectOptions(["2020"])}
      />
    );
    expect(screen.getByText("2021")).toEqual(expect.any(HTMLOptionElement));
    expect(screen.getByText("2022")).toEqual(expect.any(HTMLOptionElement));
    expect(screen.getByText("2023")).toEqual(expect.any(HTMLOptionElement));
  });
});
