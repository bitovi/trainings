import { render, screen } from "@testing-library/react";
import App from "../../problem/src/App";
// Exercise: come up with as many different ways of querying elements in the app.
// Then, rank them in priority order according to the RTL guiding principles.

describe("various pieces render", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("button renders", () => {
    const ourButton = screen.getByRole("button");

    expect(ourButton).toBeDefined();
  });

  test("username input renders", () => {
    const usernameInput = screen.getByLabelText("username");

    expect(usernameInput).toBeDefined();
  });

  test("username input still renders", () => {
    const usernameAgain = screen.getByPlaceholderText("Enter Username Here");

    expect(usernameAgain).toBeDefined();
  });

  test("header renders", () => {
    const header = screen.getByText("Welcome to our App!");

    expect(header).toBeDefined();
  });

  test("select renders", () => {
    const colorPicker = screen.getByDisplayValue("Red");

    expect(colorPicker).toBeDefined();
  });

  test("image renders", () => {
    const randomImage = screen.getByAltText("a randomly selected image");

    expect(randomImage).toBeDefined();
  });

  test("link renders", () => {
    const link = screen.getByTitle("I'm feeling lucky!");

    expect(link).toBeDefined();
  });

  test("header renders, again", () => {
    const header = screen.getByTestId("main-header");

    expect(header).toBeDefined();
  });
});
