/*

Exercise: finish the “gives focus to the first invalid input” test below.

*/

import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import App from "./App";

describe('App component', () => {
    it('renders the form fields correctly', () => {
        render(<App />);

        expect(screen.getByLabelText(/first name:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/last name:/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /validate full name/i })).toBeInTheDocument();
    });

    it('gives focus to the first invalid input', async () => {
        const user = userEvent.setup();

        render(<App />);

        // Click the button without filling out any fields
        await user.click(screen.getByRole('button', { name: /validate full name/i }));

        // First name input should be focused since it’s invalid
        expect(screen.getByLabelText(/first name:/i)).toHaveFocus();

        // Fill out the first name only
        await user.type(screen.getByLabelText(/first name:/i), 'John');
        await user.click(screen.getByRole('button', { name: /validate full name/i }));

        // Last name input should be focused now since it’s still invalid
        expect(screen.getByLabelText(/last name:/i)).toHaveFocus();
    });

});