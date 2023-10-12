import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Text from "./Text";

describe('Text component', () => {
    beforeEach(() => {
        render(<Text />);
    });

    it('renders headers and paragraphs correctly', () => {
        expect(screen.getByText('Text Size, Color, and Contrast')).toBeInTheDocument();
        expect(screen.getByText(/Required fields are marked with red labels./i)).toBeInTheDocument();
        expect(screen.getByText(/Header text/i)).toBeInTheDocument();
        expect(screen.getByText(/Paragraph text/i)).toBeInTheDocument();
        expect(screen.getByText(/Llanfairpwllgwyngyll, or Llanfair Pwllgwyngyll/i)).toBeInTheDocument();
        expect(screen.getByText(/Wikipedia/)).toBeInTheDocument();
    });

    it('renders the email and name input fields and a submit button', () => {
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    it('checks required attribute on email input field', () => {
        expect(screen.getByLabelText(/email/i)).toBeRequired();
    });
});