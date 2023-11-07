import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { axe, toHaveNoViolations } from 'jest-axe';

import ClearLanguage from "./ClearLanguage";

expect.extend(toHaveNoViolations);

describe('ClearLanguage component', () => {
    it('should not have any axe violations', async () => {
        const { container } = render(<ClearLanguage />);
        const results = await axe(container);
        prettyPrintAxeReport(results);
        expect(results).toHaveNoViolations();
    });

    it('renders the heading', () => {
        render(<ClearLanguage />);
        const headingElement = screen.getByRole('heading', { level: 2 });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent('Clear language');
    });
});