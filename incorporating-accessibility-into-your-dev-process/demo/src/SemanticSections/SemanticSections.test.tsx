import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import SemanticSections from "./SemanticSections";

describe('SemanticSections component', () => {
    beforeEach(() => {
        render(<SemanticSections />);
    });

    it("renders the Bitovi link", () => {
        const linkElement = screen.getByText("Bitovi");
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', 'https://www.bitovi.com');
    });

    it("renders the navigation links", () => {
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