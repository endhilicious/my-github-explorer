import React, { createContext, useState, useContext, useCallback, ReactNode } from 'react';

import Toast from '@/common/Toast';

interface ToastContextType {
  toastData: {
    message: string;
    visible: boolean;
    type?: string;
  };
  showToast: (message: string, type?: string, time?: number) => void;
  hideToast: () => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('tolong periksa kembali ToastProvider anda');
  }
  return context;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toastData, setToastData] = useState({
    message: '',
    visible: false,
    type: 'success'
  });

  const showToast = useCallback((message: string, type = 'success', time = 3000) => {
    setToastData({ message, visible: true, type });
    setTimeout(hideToast, time);
  }, []);

  const hideToast = useCallback(() => {
    setToastData({ message: '', visible: false, type: 'success' });
  }, []);

  return (
    <ToastContext.Provider value={{ toastData, showToast, hideToast }}>
      {children}
      <Toast />
    </ToastContext.Provider>
  );
};
