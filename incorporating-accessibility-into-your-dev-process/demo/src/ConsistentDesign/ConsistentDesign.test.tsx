import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import ConsistentDesign from "./ConsistentDesign";

describe('ConsistentDesign component', () => {
    it('renders the header and the paragraph', () => {
        const { getByText } = render(<ConsistentDesign />);
        expect(getByText('Consistent design')).toBeInTheDocument();
        expect(getByText('Folks at Bitovi have expertise in the following areas:')).toBeInTheDocument();
    });
});