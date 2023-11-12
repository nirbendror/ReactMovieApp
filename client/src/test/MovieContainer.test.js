// src/test/MovieContainer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieContainer from '../components/MovieContainer';

describe('MovieContainer Component', () => {
  test('renders the MovieContainer component', () => {
    // Render the MovieContainer component
    render(<MovieContainer />);

    // Check if the component renders without errors
    expect(screen.getByText(/EXPLORE YOUR NEXT MOVIES AND TV SHOWS/i)).toBeInTheDocument();
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    expect(screen.getByText(/Load More Shows/i)).toBeInTheDocument();
  });
});
