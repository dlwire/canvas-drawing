import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', async () => {
  render(<App />)

  const result = await screen.findByText(/Cleerly Coding Challenge/);
  expect(result).toBeInTheDocument();
});
