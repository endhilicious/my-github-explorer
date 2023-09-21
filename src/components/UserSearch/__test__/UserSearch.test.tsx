import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserSearch from '../UserSearch';
// import SearchBar from '@/common/SearchBar';

// Mocking SearchBar component
jest.mock('../../../common/SearchBar', () => {
  return jest.fn(({ onSearch }) => (
    <input
      data-testid="search-input"
      placeholder="Search for users..."
      onChange={(e) => onSearch(e.target.value)}
    />
  ));
});

describe('UserSearch Component', () => {
  it('renders UserSearch component correctly', () => {
    const { container } = render(<UserSearch onSearch={() => {}} />);
    const searchBarInput = container.querySelector('input');

    expect(searchBarInput).toBeInTheDocument();
    expect(searchBarInput?.getAttribute('placeholder')).toBe('Search for users...');
  });

  it('triggers search function when typing', () => {
    const mockOnSearch = jest.fn();
    const { getByTestId } = render(<UserSearch onSearch={mockOnSearch} />);
    const searchInput = getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value: 'user123' } });

    expect(mockOnSearch).toHaveBeenCalledWith('user123');
  });

  it('triggers search function when typing', () => {
    const mockOnSearch = jest.fn();
    const { getByTestId } = render(<UserSearch onSearch={mockOnSearch} />);
    const searchInput = getByTestId('search-input');

    fireEvent.change(searchInput, { target: { value: 'user123' } });

    expect(mockOnSearch).toHaveBeenCalledWith('user123');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<UserSearch onSearch={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
