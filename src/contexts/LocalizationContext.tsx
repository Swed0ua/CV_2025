import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SupportedLanguage } from '../i18n/types/LocalizationTypes';
import { getTranslations } from '../i18n/translationRegistry';

interface LocalizationContextType {
  currentLanguage: SupportedLanguage;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (language: SupportedLanguage) => void;
  // eslint-disable-next-line no-unused-vars
  t: (key: string) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(
  undefined,
);

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] =
    useState<SupportedLanguage>('uk');

  const setLanguage = (language: SupportedLanguage) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = getTranslations(currentLanguage);

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  const value: LocalizationContextType = {
    currentLanguage,
    setLanguage,
    t,
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
