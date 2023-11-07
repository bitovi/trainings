import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { axe, toHaveNoViolations } from 'jest-axe';

import ReduceMotion from "./ReduceMotion";

expect.extend(toHaveNoViolations);

describe('ReduceMotion component', () => {
    it('should not have any axe violations', async () => {
        const { container } = render(<ReduceMotion />);
        const results = await axe(container);
        prettyPrintAxeReport(results);
        expect(results).toHaveNoViolations();
    });

    it('renders the correct heading', () => {
        render(<ReduceMotion />);
        const heading = screen.getByRole('heading', { name: /reduce motion/i });
        expect(heading).toBeInTheDocument();
    });
  
    it('renders the button with the correct class', () => {
        render(<ReduceMotion />);
        const button = screen.getByRole('button', { name: /interact with me/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('button'); // Note: this assumes styles.button resolves to 'button'
    });
});