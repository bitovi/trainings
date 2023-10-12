import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import TargetSize from "./TargetSize";

describe('TargetSize component', () => {
    beforeEach(() => {
        render(<TargetSize />);
    });

    it('renders the static texts', () => {
        expect(screen.getByText(/Target size/i)).toBeInTheDocument();
        expect(screen.getByText(/You can find Bitovi on:/i)).toBeInTheDocument();
    });

    it('renders the images with correct alt texts', () => {
        expect(screen.getByAltText('GitHub')).toHaveAttribute('src', './github.png');
        expect(screen.getByAltText('LinkedIn')).toHaveAttribute('src', './linkedin.png');
        expect(screen.getByAltText('Twitter')).toHaveAttribute('src', './twitter.png');
    });
});