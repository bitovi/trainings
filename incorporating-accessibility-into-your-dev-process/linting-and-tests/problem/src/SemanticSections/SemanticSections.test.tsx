import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { axe, toHaveNoViolations } from 'jest-axe';

import SemanticSections from "./SemanticSections";

expect.extend(toHaveNoViolations);

describe('SemanticSections component', () => {
    it('should not have any axe violations', async () => {
        const { container } = render(<SemanticSections />);
        const results = await axe(container);
        prettyPrintAxeReport(results);
        expect(results).toHaveNoViolations();
    });
  
    it("renders the Bitovi link", () => {
        render(<SemanticSections />);
        const linkElement = screen.getByText("Bitovi");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', 'https://www.bitovi.com');
    });

    it("renders the navigation links", () => {
        render(<SemanticSections />);
        const linksText = ["Services", "Client Work", "Our Team", "Blog", "Academy"];
        const linksUrl = [
            "https://www.bitovi.com/digital-consulting-services",
            "https://www.bitovi.com/web-application-consulting-work",
            "https://www.bitovi.com/about",
            "https://www.bitovi.com/blog",
            "https://www.bitovi.com/academy/"
        ];

        linksText.forEach((text, index) => {
            const linkElement = screen.getByText(text);
            expect(linkElement).toBeInTheDocument();
            expect(linkElement).toHaveAttribute('href', linksUrl[index]);
        });
    });
});