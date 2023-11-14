/**
 * @jest-environment jsdom
 */

/* 
  
 Exercise 1: 

 This test covers basic mocks and mock implementations defined inline.
  
 1) Use jest.mock() to create a mock of the toSelectOptions module
 2) use a factory function in the jest.mock() call to create a default
      mock implementation of toSelectOptions
 3) use .mockImplementationOnce() to override the mock implementation
      for just one test
  
 The tests should pass after completing the steps above. 
  
 */

import { render, screen } from "@testing-library/react";
import { Select } from "./Select";
import { toSelectOptions } from "./toSelectOptions";

// mock the toSelectOptions module with a factory function that returns a mock module
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
