import { render, screen } from "@testing-library/react";
import React from "react";

// import userEvent from "@testing-library/user-event"
import App from "./App";

describe("the app doesnt crash", () => {
  it("works", async () => {
    // const user = userEvent.setup()
    render(<App />);

    expect(screen.getAllByRole("heading")).toBeTruthy();
  });
});

// COMPLETE EXERCISE HERE
