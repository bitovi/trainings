import React from "react";
import { cleanup, render } from "@testing-library/react";
import { MyComponent } from "./MyComponent";

// @testing-library/react -> DOM testing
// react-test-renderer -> snapshot testing

// note to self: This is proven to work in the Jest-react example

afterEach(() => {
  cleanup();
});

describe("MyCompnent", () => {
  test("should display label", () => {
    const { getByText } = render(<MyComponent label="Test" />);
    expect(getByText("Test")).toBeTruthy();
  });
});
