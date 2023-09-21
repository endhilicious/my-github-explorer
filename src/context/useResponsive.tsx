import React, { createContext, useContext, useEffect, useState } from 'react';

interface ResponsiveContextProps {
  isDesktopView: boolean;
}

const ResponsiveContext = createContext<ResponsiveContextProps | undefined>(undefined);

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  }
  return context;
};

export const ResponsiveProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(true);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsDesktopView(window.innerWidth > 768);
    };

    checkScreenWidth();

    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <ResponsiveContext.Provider value={{ isDesktopView }}>
      {children}
    </ResponsiveContext.Provider>
  );
};
