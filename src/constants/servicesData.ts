import { SupportedLanguage } from '../i18n/types/LocalizationTypes';

export type ServiceDescription = {
  // eslint-disable-next-line no-unused-vars
  [K in SupportedLanguage]: string;
};

export interface ServiceSection {
  title: ServiceDescription;
  content: ServiceDescription;
}

export interface ServiceDetailConfig {
  sections?: ServiceSection[];
  features?: ServiceDescription[];
  technologies?: string[];
  customComponent?: string;
  videoUrl?: string;
}

export enum ServiceDetailTemplate {
  // eslint-disable-next-line no-unused-vars
  WEB = 'web',
  // eslint-disable-next-line no-unused-vars
  MOBILE = 'mobile',
  // eslint-disable-next-line no-unused-vars
  AUTOMATION = 'automation',
  // eslint-disable-next-line no-unused-vars
  DEFAULT = 'default',
}

export interface Service {
  id: string;
  slug: string;
  title: ServiceDescription;
  description: ServiceDescription;
  backgroundImage?: string;
  backgroundColor?: string;
  className?: string;
  endpoint?: number;
  maxShift?: number;
  minShift?: number;
  detailTemplate?: ServiceDetailTemplate | null;
  detailConfig?: ServiceDetailConfig;
}

export const servicesData: Service[] = [
  {
    id: '1',
    slug: 'web-development',
    detailTemplate: ServiceDetailTemplate.WEB,
    title: {
      uk: 'Веб-розробка',
      en: 'Web Development',
    },
    description: {
      uk: 'Створюю потужні та швидкі веб-додатки на React та Nest.js, які не тільки виглядають сучасно, але й працюють бездоганно. Розробляю як односторінкові (SPA), так і серверні (SSR) рішення з повною SEO-оптимізацією. Кожен проект будується з урахуванням масштабованості, безпеки та швидкості завантаження, що забезпечує вашим користувачам найкращий досвід взаємодії.',
      en: 'I build powerful and fast web applications on React and Nest.js that not only look modern but also work flawlessly. I develop both single-page (SPA) and server-side (SSR) solutions with full SEO optimization. Each project is built with scalability, security, and loading speed in mind, ensuring your users get the best interaction experience.',
    },
    backgroundColor: '#FF004D',
    backgroundImage:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
  },
  {
    id: '2',
    slug: 'mobile-development',
    detailTemplate: ServiceDetailTemplate.MOBILE,
    title: {
      uk: 'Мобільна розробка',
      en: 'Mobile Development',
    },
    description: {
      uk: 'Розробляю крос-платформенні мобільні додатки на React Native, які працюють на iOS та Android з нативною продуктивністю. Фокусуюсь на створенні інтуїтивного та елегантного UI/UX, який робить взаємодію з додатком приємною та ефективною. Кожне рішення оптимізовано під різні пристрої та екранні розміри, забезпечуючи стабільну роботу на всіх платформах.',
      en: 'I develop cross-platform mobile applications on React Native that run on both iOS and Android with native-like performance. I focus on creating intuitive and elegant UI/UX that makes app interaction pleasant and efficient. Each solution is optimized for different devices and screen sizes, ensuring stable operation across all platforms.',
    },
    backgroundImage:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    backgroundColor: '#EF9B41',
  },
  {
    id: '3',
    slug: 'automation-integrations',
    detailTemplate: ServiceDetailTemplate.AUTOMATION,
    title: {
      uk: 'Автоматизація та інтеграції',
      en: 'Automation & Integrations',
    },
    description: {
      uk: 'Автоматизую ваші бізнес-процеси та інтегрую різні системи, щоб ваша команда працювала ефективніше. Створюю Telegram та WhatsApp боти для автоматизації комунікацій, AI-асистентів для оптимізації workflow та інтегрую будь-які API для безшовної роботи між сервісами. Це дозволяє зменшити ручну роботу, підвищити продуктивність та заощадити час та ресурси.',
      en: 'I automate your business processes and integrate different systems so your team works more efficiently. I create Telegram and WhatsApp bots to automate communications, AI assistants to optimize workflows, and integrate any APIs for seamless operation between services. This allows you to reduce manual work, increase productivity, and save time and resources.',
    },
    backgroundImage:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    backgroundColor: '#973EFF',
    className: 'service-card-accent',
  },
];
