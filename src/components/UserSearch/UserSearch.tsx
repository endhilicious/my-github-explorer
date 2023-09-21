import React from 'react';
import styles from './UserSearch.module.scss';
import SearchBar from '@/common/SearchBar';

interface UserSearchProps {
  onSearch: (query: string) => void;
}

const UserSearch: React.FC<UserSearchProps> = ({ onSearch }) => {

  return (
    <div className={styles.userSearch}>
      <SearchBar
        placeholder="Search for users..."
        onSearch={onSearch}
      />
    </div>
  );
};

export default UserSearch;
