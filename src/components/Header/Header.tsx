import React from 'react';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 data-testid="header-text">G ithub Re positories Explorer</h1>
    </header>
  );
};

export default Header;
