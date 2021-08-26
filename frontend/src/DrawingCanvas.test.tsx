import React from 'react';
import { render, screen } from '@testing-library/react';
import { DrawingCanvas } from './DrawingCanvas';

describe('the drawing canvas component', (): void => {
  it('should render a canvas component', (): void => {
    const result = render(
      <DrawingCanvas />
    );

    expect(result.getByTestId('theCanvas')).toBeInTheDocument();
  });

  it('should render the unsupported text', (): void => {
    const result = render(
      <DrawingCanvas />
    );

    expect(result.getByText('Please update to a browser which supports html5 canvas objects.')).toBeInTheDocument();
  });
});
