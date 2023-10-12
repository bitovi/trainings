import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ReduceMotion from "./ReduceMotion";

describe('ReduceMotion component', () => {
    it('renders the correct heading', () => {
      render(<ReduceMotion />);
      const heading = screen.getByRole('heading', { name: /reduce motion/i });
      expect(heading).toBeInTheDocument();
    });
  
    it('renders the button with the correct class', () => {
      render(<ReduceMotion />);
      const button = screen.getByRole('button', { name: /interact with me/i });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('button'); // Note: this assumes styles.button resolves to 'button'
    });
});