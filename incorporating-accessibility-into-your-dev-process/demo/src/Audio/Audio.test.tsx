import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Audio from "./Audio";

describe('Audio component', () => {
  it('renders the audio and video elements', () => {
    const { container } = render(<Audio />);

    expect(container.querySelector('audio')).toBeInTheDocument();
    expect(container.querySelector('video')).toBeInTheDocument();
  });
});