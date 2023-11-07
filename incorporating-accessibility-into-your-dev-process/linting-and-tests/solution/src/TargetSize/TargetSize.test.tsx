import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { axe, toHaveNoViolations } from 'jest-axe';

import TargetSize from "./TargetSize";

expect.extend(toHaveNoViolations);

describe('TargetSize component', () => {
    it('should not have any axe violations', async () => {
        const { container } = render(<TargetSize />);
        const results = await axe(container);
        prettyPrintAxeReport(results);
        expect(results).toHaveNoViolations();
    });
  
    it('renders the static texts', () => {
        render(<TargetSize />);
        expect(screen.getByText(/Target size/i)).toBeInTheDocument();
        expect(screen.getByText(/You can find Bitovi on:/i)).toBeInTheDocument();
    });

    it('renders the images with correct alt texts', () => {
        render(<TargetSize />);
        expect(screen.getByAltText('GitHub')).toHaveAttribute('src', './github.png');
        expect(screen.getByAltText('LinkedIn')).toHaveAttribute('src', './linkedin.png');
        expect(screen.getByAltText('Twitter')).toHaveAttribute('src', './twitter.png');
    });
});