export type SupportedLanguage = 'uk' | 'en';

export interface TranslationKeys {
  // Welcome Screen
  welcome: {
    title: string;
    name: string;
    experience: string;
    description: string;
    buttonText: string;
    expertiseTitle: string;
    expertiseText: string;
    projectsTitle: string;
    projectsText: string;
  };

  // Header
  header: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };

  // About Me
  aboutMe: {
    title: string;
    personalInfoTitle: string;
    birthDate: string;
    birthDateValue: string;
    location: string;
    locationValue: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
  };
}

export interface LocalizationContextType {
  currentLanguage: SupportedLanguage;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (language: SupportedLanguage) => void;
  // eslint-disable-next-line no-unused-vars
  t: (key: string) => string;
  isLoading: boolean;
}
