import { SupportedLanguage } from '../i18n/types/LocalizationTypes';

export type ServiceDescription = {
  // eslint-disable-next-line no-unused-vars
  [K in SupportedLanguage]: string;
};

export interface Service {
  id: string;
  title: ServiceDescription;
  description: ServiceDescription;
  backgroundImage?: string;
  backgroundColor?: string;
  className?: string;
  endpoint?: number;
  maxShift?: number;
  minShift?: number;
}

export const servicesData: Service[] = [
  {
    id: '1',
    title: {
      uk: 'Веб-розробка',
      en: 'Web Development',
    },
    description: {
      uk: 'Швидкі та масштабовані веб-додатки на React/Nest.js. SPA, SSR, SEO-оптимізація та сучасні архітектурні рішення.',
      en: 'Fast and scalable web applications on React/Nest.js. SPA, SSR, SEO optimization and modern architectural solutions.',
    },
    backgroundColor: '#FF004D',
    backgroundImage:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
  },
  {
    id: '2',
    title: {
      uk: 'Мобільна розробка',
      en: 'Mobile Development',
    },
    description: {
      uk: 'React Native додатки з нативною продуктивністю. Крос-платформенні рішення з сучасним UI/UX.',
      en: 'React Native apps with native-like performance. Cross-platform solutions with modern UI/UX.',
    },
    backgroundImage:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    backgroundColor: '#EF9B41',
  },
  {
    id: '3',
    title: {
      uk: 'Інтеграції / Автоматизації / Telegram боти',
      en: 'Integrations / Automation / Telegram Bots',
    },
    description: {
      uk: 'Автоматизація бізнес-процесів, інтеграції API, Telegram/WhatsApp боти, AI-асистенти та оптимізація workflow.',
      en: 'Business process automation, API integrations, Telegram/WhatsApp bots, AI assistants and workflow optimization.',
    },
    backgroundImage:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    backgroundColor: '#973EFF',
    className: 'service-card-accent',
  },
];
