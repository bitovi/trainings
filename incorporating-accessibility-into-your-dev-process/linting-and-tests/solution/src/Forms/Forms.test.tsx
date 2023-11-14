import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { axe, toHaveNoViolations } from 'jest-axe';

import Forms from "./Forms";

expect.extend(toHaveNoViolations);

describe('Forms component', () => {
    it('should not have any axe violations', async () => {
        const { container } = render(<Forms />);
        const results = await axe(container);
        prettyPrintAxeReport(results);
        expect(results).toHaveNoViolations();
    });

    it('renders the name input field', () => {
        render(<Forms />);
        const nameInput = screen.getByPlaceholderText('Name');
        expect(nameInput).toBeRequired();
    });

    it('renders the telephone input field', () => {
        render(<Forms />);
        const telephoneInput = screen.getByPlaceholderText('Telephone');
        expect(telephoneInput).toBeRequired();
    });
});