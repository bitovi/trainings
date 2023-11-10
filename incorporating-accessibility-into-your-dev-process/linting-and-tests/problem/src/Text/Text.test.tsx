import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { axe, toHaveNoViolations } from 'jest-axe';

import Text from "./Text";

expect.extend(toHaveNoViolations);

describe('Text component', () => {
    it('should not have any axe violations', async () => {
        const { container } = render(<Text />);
        const results = await axe(container);
        prettyPrintAxeReport(results);
        expect(results).toHaveNoViolations();
    });
  
    it('renders headers and paragraphs correctly', () => {
        render(<Text />);
        expect(screen.getByText('Text Size, Color, and Contrast')).toBeInTheDocument();
        expect(screen.getByText(/Required fields are marked with red labels./i)).toBeInTheDocument();
        expect(screen.getByText(/Header text/i)).toBeInTheDocument();
        expect(screen.getByText(/Paragraph text/i)).toBeInTheDocument();
        expect(screen.getByText(/Llanfairpwllgwyngyll, or Llanfair Pwllgwyngyll/i)).toBeInTheDocument();
        expect(screen.getByText(/Wikipedia/)).toBeInTheDocument();
    });

    it('renders the email and name input fields and a submit button', () => {
        render(<Text />);
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    it('checks required attribute on email input field', () => {
        render(<Text />);
        expect(screen.getByLabelText(/email/i)).toBeRequired();
    });
});