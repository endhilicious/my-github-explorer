import React, { useState } from 'react';

import styles from './SearchBar.module.scss';
import SearchIcon from '@/common/Icons/SearchIcon';
import { useResponsive } from '@/context/useResponsive';
import CloseIcon from '@/common/Icons/CloseIcon';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClearSearch?: () => void;
  placeholder?: string;
  searchButtonText?: string;
  showSearchButton?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
    onSearch,
    onClearSearch,
    placeholder = 'Type here...',
    searchButtonText = 'Search',
    showSearchButton = true
  }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isDesktopView } = useResponsive();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    onClearSearch?.();
  }

  const handlekeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          data-testid="search-input"
          className={styles.searchInput}
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handlekeyPress}
        />
        {searchQuery && (
          <button data-testid="clear-button" className={styles.clearButton} onClick={handleClearSearch}>
            <CloseIcon />
          </button>
        )}
      </div>
      {showSearchButton && (
        <button className={styles.searchButton} onClick={handleSearch} data-testid="search-button">
          {isDesktopView ? (
            <span className={styles.searchButtonText}>{searchButtonText}</span>
          ) : (
            <SearchIcon />
          )}
        </button>
      )}
    </div>
  );
};

export default SearchBar;
