import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { axe, toHaveNoViolations } from 'jest-axe';

import KeyboardNavigation from "./KeyboardNavigation";

expect.extend(toHaveNoViolations);

describe('KeyboardNavigation component', () => {
    it('should not have any axe violations', async () => {
        const { container } = render(<KeyboardNavigation />);
        const results = await axe(container);
        prettyPrintAxeReport(results);
        expect(results).toHaveNoViolations();
    });
  
    it('renders without crashing', () => {
        render(<KeyboardNavigation />);
        expect(screen.getByText('An exceptional app is essential to your success')).toBeInTheDocument();
    });

    it('has correct links', () => {
        render(<KeyboardNavigation />);
        expect(screen.getByText('Bitovi').closest('a')).toHaveAttribute('href', 'https://www.bitovi.com');
        expect(screen.getByText('Services').closest('a')).toHaveAttribute('href', 'https://www.bitovi.com/digital-consulting-services');
    });
});