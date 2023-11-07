import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { axe, toHaveNoViolations } from 'jest-axe';

import Video from "./Video";

expect.extend(toHaveNoViolations);

describe('Video component', () => {
    it('should not have any axe violations', async () => {
        const { container } = render(<Video />);
        const results = await axe(container);
        prettyPrintAxeReport(results);
        expect(results).toHaveNoViolations();
    });

    it('renders the component without crashing', () => {
        render(<Video />);
        expect(screen.getByRole('heading', { name: 'Video' })).toBeInTheDocument();
    });
  
    it('renders a video element', () => {
        render(<Video />);
        expect(screen.getByTestId('video-element')).toBeInTheDocument();
    });
  
    it('has correct attributes for video', () => {
        render(<Video />);
        const videoElement = screen.getByTestId('video-element');
        expect(videoElement).toHaveAttribute('height', '288');
        expect(videoElement).toHaveAttribute('width', '360');
    });
});