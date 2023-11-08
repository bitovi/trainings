import "@testing-library/jest-dom";
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import App from './App';
import { setDelayTime } from './fetch';

describe('App component', () => {
  beforeAll(() => {
    setDelayTime(1);
  })

  it('loads data on initial render', async () => {
    render(<App />);

    expect(screen.getByText('Loading…')).toBeInTheDocument();

    // // We wait until the "Loading…" text is removed, indicating data has been loaded.
    await waitFor(() => {
      expect(screen.queryByText('Loading…')).not.toBeInTheDocument();
    });
  });

  it('displays data when loaded successfully', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole('table')).toBeInTheDocument();
      const rows = within(screen.getByRole('table')).getAllByRole('row');
      expect(rows.length).toBeGreaterThan(1);
    });
  });

  it('handles errors during fetch', async () => {
    render(<App />);
    const errorButton = screen.getByText('Simulate error');
    userEvent.click(errorButton);

    await waitFor(() => {
      expect(screen.getByText('Too many requests. Please try again!')).toBeInTheDocument();
    });
  });

  it('handles empty data', async () => {
    render(<App />);
    const emptyButton = screen.getByText('Simulate empty');
    userEvent.click(emptyButton);

    await waitFor(() => {
      expect(screen.getByText('No records found.')).toBeInTheDocument();
    });
  });

  it('reloads data when reload button is clicked', async () => {
    render(<App />);
    const reloadButton = screen.getByText('Reload data (revalidate)');
    userEvent.click(reloadButton);

    // Check for loading state first
    expect(screen.getByText('Loading…')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Reloaded data.')).toBeInTheDocument();
    });
  });
});

