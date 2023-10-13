/**
 * @jest-environment jsdom
 */

//auto mocking toSelectOptions

import { render } from "@testing-library/react";
import { Select } from "../Select";
import { toSelectOptions } from "../../utils/toSelectOptions";

//mock the toSelectOptions function to return the values
/*
[
    { label: "2021", value: "2021" },
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023" },
  ]
*/

describe("Year", () => {
  test("Year works with mocked values", () => {
    render(
      <Select
        label="Year"
        name="year"
        value="2023"
        options={toSelectOptions(["2020"])}
      />
    );
  });
});
