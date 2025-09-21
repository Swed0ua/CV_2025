import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface AppStateContextType {
  isPreloaderVisible: boolean;
  isAppReady: boolean;
  // eslint-disable-next-line no-unused-vars
  setPreloaderVisible: (visible: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  setAppReady: (ready: boolean) => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(
  undefined,
);

interface AppStateProviderProps {
  children: ReactNode;
  preloaderDuration?: number;
}

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children,
  preloaderDuration = 3500,
}) => {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false);
      // Small delay before marking app as ready for smooth transition
      setTimeout(() => {
        setIsAppReady(true);
      }, 500);
    }, preloaderDuration);

    return () => clearTimeout(timer);
  }, [preloaderDuration]);

  const setPreloaderVisible = (visible: boolean) => {
    setIsPreloaderVisible(visible);
  };

  const setAppReady = (ready: boolean) => {
    setIsAppReady(ready);
  };

  const value: AppStateContextType = {
    isPreloaderVisible,
    isAppReady,
    setPreloaderVisible,
    setAppReady,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = (): AppStateContextType => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
