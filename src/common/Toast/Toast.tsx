import React from 'react';
import cx from 'classnames';

import { useToast } from '@/context/useToast';
import styles from './Toast.module.scss';

const Toast: React.FC = () => {
  const { toastData, hideToast } = useToast();

  const handleStyleToast = () => {
    switch (toastData.type) {
      case 'warning':
        return { background: '#c87a0d', color: '#ffffff'};
      case 'danger':
        return { background: '#dc3545', color: '#ffffff'};
      case 'success':
      default:
        return { background: '#38a368', color: '#ffffff'};
    }
  }
  return (
    <div
      className={cx(styles.toast, { [styles.show]: toastData.visible })}
      style={handleStyleToast()}
    >
      <div className={styles.toastMessage}>{toastData.message}</div>
      <button className={styles.closeButton} onClick={hideToast}>
        X
      </button>
    </div>
  );
};

export default Toast;
