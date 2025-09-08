import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  LocalizationContextType,
  SupportedLanguage,
} from '../i18n/types/LocalizationTypes';
import { LocalizationService } from '../i18n/services/LocalizationService';

const LocalizationContext = createContext<LocalizationContextType | undefined>(
  undefined,
);

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
}) => {
  const [localizationService] = useState(() => new LocalizationService());
  const [currentLanguage, setCurrentLanguage] =
    useState<SupportedLanguage>('uk');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeLocalization = async () => {
      setIsLoading(true);
      await localizationService.loadTranslations(currentLanguage);
      setIsLoading(false);
    };

    initializeLocalization();
  }, [localizationService, currentLanguage]);

  const setLanguage = (language: SupportedLanguage) => {
    setCurrentLanguage(language);
    localizationService.setLanguage(language);
  };

  const t = (key: string): string => {
    return localizationService.getTranslation(key);
  };

  const value: LocalizationContextType = {
    currentLanguage,
    setLanguage,
    t,
    isLoading,
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error(
      'useLocalization must be used within a LocalizationProvider',
    );
  }
  return context;
};
