/**
 * @jest-environment jsdom
 */
//manually mocking toSelectOptions

import { render, screen } from "@testing-library/react";
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
      return [{ label: "2024", value: "2024" }];
    });

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
