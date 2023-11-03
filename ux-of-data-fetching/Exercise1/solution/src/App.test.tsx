import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest';

import { server } from "../mocks/server";
import App from './App';

describe('<App />', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('shows the loading text', () => {
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});