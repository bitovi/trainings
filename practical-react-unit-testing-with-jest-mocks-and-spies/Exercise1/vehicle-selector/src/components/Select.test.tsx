import React from "react";
import { render } from "@testing-library/react";
import { Select } from "./Select";

describe("Select", () => {
  test("should display label", () => {
    render(<Select />);
  });
});
