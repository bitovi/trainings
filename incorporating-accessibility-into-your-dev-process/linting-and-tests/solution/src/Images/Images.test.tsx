import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { axe, toHaveNoViolations } from 'jest-axe';

import Images from "./Images";

expect.extend(toHaveNoViolations);

describe('Images component', () => {
    it('should not have any axe violations', async () => {
        const { container } = render(<Images />);
        const results = await axe(container);
        prettyPrintAxeReport(results);
        expect(results).toHaveNoViolations();
    });
  
    it('contains the header link to Bitovi', () => {
        render(<Images />);
        expect(screen.getByRole('link', { name: '' })).toHaveAttribute('href', 'https://www.bitovi.com');
    });
    
    it('contains a footer with contact information', () => {
        render(<Images />);
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
        expect(screen.getByText(/Contact Bitovi/)).toBeInTheDocument();
        const mailLink = screen.getByRole('link', { name: 'contact@bitovi.com' });
        expect(mailLink).toHaveAttribute('href', 'mailto:contact@bitovi.com');
    });
    
    it('contains two SVG logos', () => {
        render(<Images />);
        const svgs = screen.getAllByRole('img', { hidden: true });
        expect(svgs.length).toBe(2); // assuming there are two svgs as per the duplicated SVG code
    });
});