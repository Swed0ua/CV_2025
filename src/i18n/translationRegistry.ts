import enTranslations from './translations/en';
import ukTranslations from './translations/uk';
import { SupportedLanguage } from './types/LocalizationTypes';

const TRANSLATION_REGISTRY = {
  en: enTranslations,
  uk: ukTranslations,
} as const;

export const getTranslations = (language: SupportedLanguage) => {
  return TRANSLATION_REGISTRY[language] || TRANSLATION_REGISTRY.en;
};

export const getAvailableLanguages = (): SupportedLanguage[] => {
  return Object.keys(TRANSLATION_REGISTRY) as SupportedLanguage[];
};
