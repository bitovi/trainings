import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Forms from "./Forms";

describe('Forms component', () => {
    beforeEach(() => {
        render(<Forms />);
    });

    it('renders the name input field', () => {
        const nameInput = screen.getByPlaceholderText('Name');
        expect(nameInput).toBeRequired();
    });

    it('renders the telephone input field', () => {
        const telephoneInput = screen.getByPlaceholderText('Telephone');
        expect(telephoneInput).toBeRequired();
    });
});