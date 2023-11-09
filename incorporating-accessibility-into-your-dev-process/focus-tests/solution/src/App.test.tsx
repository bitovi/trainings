/*

Exercise: finish the “gives focus to the first invalid input” test below.

*/

import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App component", () => {
  it("renders the form fields correctly", () => {
    render(<App />);

    expect(screen.getByLabelText(/first name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name:/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /validate full name/i }),
    ).toBeInTheDocument();
  });

  it("gives focus to the first invalid input", async () => {
    const user = userEvent.setup();

    render(<App />);

    // Click the button without filling out any fields
    await user.click(
      screen.getByRole("button", { name: /validate full name/i }),
    );

    // First name input should be focused since it’s invalid
    expect(screen.getByLabelText(/first name:/i)).toHaveFocus();

    // Fill out the first name only
    await user.type(screen.getByLabelText(/first name:/i), "John");
    await user.click(
      screen.getByRole("button", { name: /validate full name/i }),
    );

    // Last name input should be focused now since it’s still invalid
    expect(screen.getByLabelText(/last name:/i)).toHaveFocus();
  });

  it("displays an error when submitting the form with empty inputs", async () => {
    render(<App />);

    await userEvent.click(
      screen.getByRole("button", { name: /validate full name/i }),
    );

    expect(
      screen.getByText(/the “first name” field is required./i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/the “last name” field is required./i),
    ).toBeInTheDocument();
  });

  it("focuses on the first name input when it is invalid and submitted", async () => {
    render(<App />);

    const firstNameInput = screen.getByLabelText(/first name:/i);
    firstNameInput.focus();
    await userEvent.tab(); // This should move focus away from the first name input
    expect(firstNameInput).not.toHaveFocus();

    await userEvent.click(
      screen.getByRole("button", { name: /validate full name/i }),
    );
    expect(firstNameInput).toHaveFocus();
  });

  it("focuses on the last name input when it is invalid and submitted", async () => {
    render(<App />);

    await userEvent.type(screen.getByLabelText(/first name:/i), "John");

    const lastNameInput = screen.getByLabelText(/last name:/i);
    lastNameInput.focus();
    await userEvent.tab(); // This should move focus away from the last name input
    expect(lastNameInput).not.toHaveFocus();

    await userEvent.click(
      screen.getByRole("button", { name: /validate full name/i }),
    );
    expect(lastNameInput).toHaveFocus();
  });

  it("displays a success message with the full name when the form is submitted with valid inputs", async () => {
    render(<App />);

    await userEvent.type(screen.getByLabelText(/first name:/i), "John");
    await userEvent.type(screen.getByLabelText(/last name:/i), "Doe");
    await userEvent.click(
      screen.getByRole("button", { name: /validate full name/i }),
    );

    const successMessage = await screen.findByText(
      /success! You’ve submitted the form with this full name: John Doe/i,
    );
    expect(successMessage).toBeInTheDocument();
  });

  it("focuses on the success message when the form is validly submitted", async () => {
    render(<App />);

    await userEvent.type(screen.getByLabelText(/first name:/i), "John");
    await userEvent.type(screen.getByLabelText(/last name:/i), "Doe");
    await userEvent.click(
      screen.getByRole("button", { name: /validate full name/i }),
    );

    const successMessage = await screen.findByText(
      /success! You’ve submitted the form with this full name: John Doe/i,
    );
    expect(successMessage).toHaveFocus();
  });
});
