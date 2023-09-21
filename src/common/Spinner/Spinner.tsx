import React from 'react';
import styles from './Spinner.module.scss';

const Spinner: React.FC = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Spinner;
