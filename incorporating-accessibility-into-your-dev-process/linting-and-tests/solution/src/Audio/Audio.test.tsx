import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { axe, toHaveNoViolations } from 'jest-axe';

import Audio from "./Audio";

expect.extend(toHaveNoViolations);

describe('Audio component', () => {
    it('should not have any axe violations', async () => {
        const { container } = render(<Audio />);
        const results = await axe(container);
        prettyPrintAxeReport(results);
        expect(results).toHaveNoViolations();
    });

    it('renders the headings', () => {
        render(<Audio />);
        expect(screen.getByRole('heading', { name: 'Audio' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Transcription' })).toBeInTheDocument();
    });

    it('renders the transcription text', () => {
        render(<Audio />);
        const transcriptionText = "No writer who knows the great writers who did not receive the prize can accept it other than with humility. There is no need to list these writers. Everyone here may make his own list according to his knowledge and his conscience.";
        expect(screen.getByText(transcriptionText)).toBeInTheDocument();
    });
});