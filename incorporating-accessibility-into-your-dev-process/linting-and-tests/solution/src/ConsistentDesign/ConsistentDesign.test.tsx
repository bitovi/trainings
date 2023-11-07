import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { axe, toHaveNoViolations } from 'jest-axe';

import ConsistentDesign from "./ConsistentDesign";

expect.extend(toHaveNoViolations);

describe('ConsistentDesign component', () => {
    // Mock the global window.location object
    const originalLocation = window.location;
    beforeEach(() => {
        delete window.location;
        window.location = { set href(url) { this._href = url; } };
    });
  
    afterEach(() => {
        window.location = originalLocation;
    });
    it('should not have any axe violations', async () => {
        const { container } = render(<ConsistentDesign />);
        const results = await axe(container);
        prettyPrintAxeReport(results);
        expect(results).toHaveNoViolations();
    });
  
    it('renders without crashing', () => {
        render(<ConsistentDesign />);
        expect(screen.getByRole('heading', { name: /consistent design/i })).toBeInTheDocument();
        expect(screen.getByText(/folks at bitovi have expertise in the following areas:/i)).toBeInTheDocument();
    });
    
    it('contains the correct links for project management and frontend engineering', () => {
        render(<ConsistentDesign />);
        expect(screen.getByRole('link', { name: /project management/i })).toHaveAttribute('href', 'https://www.bitovi.com/services/agile-project-management-consulting');
        expect(screen.getByRole('link', { name: /frontend engineering/i })).toHaveAttribute('href', 'https://www.bitovi.com/services/frontend-development-consulting');
    });
    
    it('navigates to product design when the respective button is clicked', () => {
        render(<ConsistentDesign />);
        const productDesignButton = screen.getByRole('button', { name: /product design/i });
        fireEvent.click(productDesignButton);
        expect(window.location._href).toBe('https://www.bitovi.com/services/product-design-consulting');
    });
    
    it('navigates to backend engineering when the respective button is clicked', () => {
        render(<ConsistentDesign />);
        const backendEngineeringButton = screen.getByRole('button', { name: /backend engineering/i });
        fireEvent.click(backendEngineeringButton);
        expect(window.location._href).toBe('https://www.bitovi.com/services/backend-engineering-consulting');
    });
    
    it('contains the correct link for devops engineering', () => {
        render(<ConsistentDesign />);
        expect(screen.getByRole('link', { name: /devops engineering/i })).toHaveAttribute('href', 'https://www.bitovi.com/services/devops-consulting');
    });
});