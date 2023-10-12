import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import ButtonsAndLinks from "./ButtonsAndLinks";

describe('ButtonsAndLinks component', () => {
    it('should render the title, links, and initial count correctly', () => {
        render(<ButtonsAndLinks />);

        expect(screen.getByText(/Buttons and Links/i)).toBeInTheDocument();
        expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();

        // check the presence of links and their href
        const academyLink = screen.getByText(/Click here/i);
        expect(academyLink).toBeInTheDocument();
        expect(academyLink).toHaveAttribute('href', 'https://www.bitovi.com/academy/');

        const coursesLink = screen.getByText(/Browse the courses/i);
        expect(coursesLink).toBeInTheDocument();
        expect(coursesLink).toHaveAttribute('href', 'https://www.bitovi.com/academy/#courses-section');
    });

    it('should increment the count when the dialog trigger is clicked', () => {
        render(<ButtonsAndLinks />);

        const dialogTrigger = screen.getByText(/Increase the count/i);
        fireEvent.click(dialogTrigger);

        // ensure the count has incremented
        expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
    });

    it('should increment the count multiple times when clicked multiple times', () => {
        render(<ButtonsAndLinks />);

        const dialogTrigger = screen.getByText(/Increase the count/i);
        fireEvent.click(dialogTrigger);
        fireEvent.click(dialogTrigger);
        fireEvent.click(dialogTrigger);

        // ensure the count has incremented to 3
        expect(screen.getByText(/Count: 3/i)).toBeInTheDocument();
    });
});