// src/test/Search.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/Search';

describe('Search Component', () => {
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Another Movie' },
  ];

  test('renders the search input', () => {
    render(<Search movieRepo={movies} setAvailableShows={() => {}} setSearchData={() => {}} />);
    const searchInput = screen.getByPlaceholderText('Search Your Movie...');
    expect(searchInput).toBeInTheDocument();
  });

  test('updates search term on input change', () => {
    render(<Search movieRepo={movies} setAvailableShows={() => {}} setSearchData={() => {}} />);
    const searchInput = screen.getByPlaceholderText('Search Your Movie...');
    
    // Type a search query
    fireEvent.change(searchInput, { target: { value: 'Movie' } });

    // Check if the search term is updated
    expect(searchInput.value).toBe('Movie');
  });

  test('displays search results based on user input', () => {
    const setAvailableShowsMock = jest.fn();
    const setSearchDataMock = jest.fn();

    render(<Search movieRepo={movies} setAvailableShows={setAvailableShowsMock} setSearchData={setSearchDataMock} />);
    const searchInput = screen.getByPlaceholderText('Search Your Movie...');
    
    // Type a search query for 'Movie 2'
    fireEvent.change(searchInput, { target: { value: 'Movie 2' } });

    // Check if the setAvailableShows and setSearchData functions are called with the correct parameters
    expect(setAvailableShowsMock).toHaveBeenCalledWith([{ id: 2, title: 'Movie 2' }]);
    expect(setSearchDataMock).toHaveBeenCalledWith(true);
  });

  test('displays all shows when search term is empty', () => {
    const setAvailableShowsMock = jest.fn();
    const setSearchDataMock = jest.fn();

    render(<Search movieRepo={movies} setAvailableShows={setAvailableShowsMock} setSearchData={setSearchDataMock} />);
    const searchInput = screen.getByPlaceholderText('Search Your Movie...');
    
    // Clear the search query
    fireEvent.change(searchInput, { target: { value: '' } });

    // Check if the setAvailableShows and setSearchData functions are called with the correct parameters
    expect(setAvailableShowsMock).toHaveBeenCalledWith(movies.slice(0, 3)); // Assuming paginationLimit is 3
    expect(setSearchDataMock).toHaveBeenCalledWith(false);
  });
});
