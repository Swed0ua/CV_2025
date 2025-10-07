import { SupportedLanguage } from '../i18n/types/LocalizationTypes';

export type SkillDescription = {
  // eslint-disable-next-line no-unused-vars
  [K in SupportedLanguage]: string;
};

export interface Skill {
  id: string;
  logo: string;
  backgroundImage: string;
  name: string;
  description: SkillDescription;
}

export const skillsData: Skill[] = [
  // Frontend Technologies
  {
    id: '1',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    name: 'JavaScript',
    description: {
      uk: 'Основа сучасного веб-розробки. Створення інтерактивних додатків та серверних рішень.',
      en: 'Foundation of modern web development. Creating interactive applications and server solutions.',
    },
  },
  {
    id: '2',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop',
    name: 'TypeScript',
    description: {
      uk: 'Типізована надмножина JavaScript для масштабних проектів з кращою підтримкою коду.',
      en: 'Typed superset of JavaScript for large-scale projects with better code support.',
    },
  },
  {
    id: '3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    name: 'React',
    description: {
      uk: 'Бібліотека для створення користувацьких інтерфейсів з компонентною архітектурою.',
      en: 'Library for creating user interfaces with component architecture.',
    },
  },
  {
    id: '4',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    name: 'React Native',
    description: {
      uk: 'Крос-платформна розробка мобільних додатків з використанням React.',
      en: 'Cross-platform mobile app development using React.',
    },
  },

  // Backend Technologies
  {
    id: '5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
    name: 'Node.js',
    description: {
      uk: 'JavaScript runtime для створення серверних додатків та API.',
      en: 'JavaScript runtime for creating server applications and APIs.',
    },
  },
  {
    id: '6',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    name: 'Express.js',
    description: {
      uk: 'Мінімалістичний веб-фреймворк для Node.js для швидкої розробки API.',
      en: 'Minimalist web framework for Node.js for rapid API development.',
    },
  },
  {
    id: '7',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    name: 'Nest.js',
    description: {
      uk: 'Прогресивний Node.js фреймворк для створення ефективних серверних додатків.',
      en: 'Progressive Node.js framework for building efficient server applications.',
    },
  },
  {
    id: '8',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    name: 'Python',
    description: {
      uk: 'Універсальна мова програмування для веб-розробки, аналітики та автоматизації.',
      en: 'Universal programming language for web development, analytics and automation.',
    },
  },

  // Cloud & DevOps
  {
    id: '9',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    name: 'AWS',
    description: {
      uk: 'Хмарна платформа Amazon для розгортання та масштабування додатків.',
      en: 'Amazon cloud platform for deploying and scaling applications.',
    },
  },
  {
    id: '10',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
    name: 'Google Cloud',
    description: {
      uk: 'Хмарні сервіси Google для розробки, розгортання та управління додатками.',
      en: 'Google cloud services for development, deployment and application management.',
    },
  },

  // APIs & Integration
  {
    id: '11',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    name: 'REST API',
    description: {
      uk: 'Архітектурний стиль для створення веб-сервісів та інтеграції систем.',
      en: 'Architectural style for creating web services and system integration.',
    },
  },
  {
    id: '12',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    name: 'AI Integration',
    description: {
      uk: 'Інтеграція штучного інтелекту в проекти та автоматизація бізнес-процесів.',
      en: 'Artificial intelligence integration into projects and business process automation.',
    },
  },

  // Development Tools
  {
    id: '13',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop',
    name: 'Git',
    description: {
      uk: 'Система контролю версій для ефективної роботи в команді та управління кодом.',
      en: 'Version control system for efficient team work and code management.',
    },
  },
  {
    id: '14',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    name: 'Databases',
    description: {
      uk: 'Робота з різними типами баз даних та оптимізація запитів для продуктивності.',
      en: 'Working with different types of databases and query optimization for performance.',
    },
  },
  // DevOps & General Skills
  {
    id: '15',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    name: 'DevOps',
    description: {
      uk: 'Автоматизація розгортання, CI/CD пайплайни та управління інфраструктурою.',
      en: 'Deployment automation, CI/CD pipelines and infrastructure management.',
    },
  },
  {
    id: '16',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    name: 'Adaptive Learning',
    description: {
      uk: 'Швидке освоєння нових технологій та сервісів. Розуміння деталей, ефективне впровадження та успішне використання у проектах.',
      en: 'Rapid mastery of new technologies and services. Understanding details, effective implementation and successful use in projects.',
    },
  },
];
