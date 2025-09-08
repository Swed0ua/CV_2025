import { TranslationKeys, SupportedLanguage } from '../types/LocalizationTypes';

export interface ILocalizationService {
  // eslint-disable-next-line no-unused-vars
  getTranslation(key: string): string;
  // eslint-disable-next-line no-unused-vars
  setLanguage(language: SupportedLanguage): void;
  // eslint-disable-next-line no-unused-vars
  getCurrentLanguage(): SupportedLanguage;
  // eslint-disable-next-line no-unused-vars
  loadTranslations(language: SupportedLanguage): Promise<void>;
}

export class LocalizationService implements ILocalizationService {
  private currentLanguage: SupportedLanguage = 'uk';
  private translations: TranslationKeys | null = null;
  private isLoading: boolean = false;

  constructor() {
    this.loadTranslations(this.currentLanguage);
  }

  async loadTranslations(language: SupportedLanguage): Promise<void> {
    this.isLoading = true;

    try {
      const translations = await import(`../translations/${language}`);
      this.translations = translations.default;
      this.currentLanguage = language;
    } catch (error) {
      // Fallback to Ukrainian
      const fallbackTranslations = await import('../translations/uk');
      this.translations = fallbackTranslations.default;
      this.currentLanguage = 'uk';
    } finally {
      this.isLoading = false;
    }
  }

  getTranslation(key: string): string {
    if (!this.translations) {
      return key; // Return key if translations not loaded
    }

    const keys = key.split('.');
    let value: any = this.translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  }

  setLanguage(language: SupportedLanguage): void {
    if (language !== this.currentLanguage) {
      this.loadTranslations(language);
    }
  }

  getCurrentLanguage(): SupportedLanguage {
    return this.currentLanguage;
  }

  getIsLoading(): boolean {
    return this.isLoading;
  }
}
