import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import '@testing-library/jest-dom';

describe('Footer component', () => {
  test('Renders correctly', () => {
    render(<Footer />);

    const footer = screen.getByTestId('footerComponent');
    expect(footer).toBeInTheDocument();
    expect(footer).toMatchSnapshot();
  });
});
