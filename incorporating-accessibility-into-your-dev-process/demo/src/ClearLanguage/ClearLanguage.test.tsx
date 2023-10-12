import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import ClearLanguage from "./ClearLanguage";

describe('ClearLanguage component', () => {
    it('renders the header correctly', () => {
      const { getByText } = render(<ClearLanguage />);
      const headerElement = getByText(/Clear language/i);
      expect(headerElement).toBeInTheDocument();
    });
});