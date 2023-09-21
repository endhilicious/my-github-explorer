import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';
import { ResponsiveProvider } from '@/context/useResponsive';

describe('SearchBar', () => {
  const useResponsive = jest.fn(() => ({
    isDesktopView: true,
  }));

  jest.mock('../../../context/useResponsive', () => ({
    ...jest.requireActual('../../../context/useResponsive'),
    useResponsive,
  }));

  it('renders search input correctly', () => {
    const { container } = render(
      <ResponsiveProvider>
        <SearchBar onSearch={() => {}} />
      </ResponsiveProvider>
    );


    const searchInput = container.querySelector('input');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput?.getAttribute('placeholder')).toBe('Type here...');
  });

  it('triggers search function when search button is clicked', () => {
    const mockOnSearch = jest.fn();
    render(
      <ResponsiveProvider>
        <SearchBar onSearch={mockOnSearch} />
      </ResponsiveProvider>
      );


    fireEvent.click(screen.getByText('Search'));
    expect(mockOnSearch).toHaveBeenCalled();
  });

  it('updates search input value when typing', () => {
    render(
      <ResponsiveProvider>
        <SearchBar onSearch={() => {}} />
      </ResponsiveProvider>
    );


    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: 'movie' } });
    expect(searchInput).toHaveValue('movie');
  });
});
