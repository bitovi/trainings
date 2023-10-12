import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import KeyboardNavigation from "./KeyboardNavigation";

describe('KeyboardNavigation component', () => {
    beforeEach(() => {
        render(<KeyboardNavigation />);
    });

    it('renders without crashing', () => {
        expect(screen.getByText('An exceptional app is essential to your success')).toBeInTheDocument();
    });

    it('has correct links', () => {
        expect(screen.getByText('Bitovi').closest('a')).toHaveAttribute('href', 'https://www.bitovi.com');
        expect(screen.getByText('Services').closest('a')).toHaveAttribute('href', 'https://www.bitovi.com/digital-consulting-services');
    });
});