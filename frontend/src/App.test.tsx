import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { fetchContent } from './api';

jest.mock('./api.ts');

test('renders learn react link', async () => {
  (fetchContent as jest.Mock).mockResolvedValue('Hello world');

  render(<App />);

  const result = await screen.findByText(/Hello world/);
  expect(result).toBeInTheDocument();
});
