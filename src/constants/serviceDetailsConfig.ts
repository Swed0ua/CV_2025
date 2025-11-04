import { ServiceDetailConfig } from './servicesData';

export const serviceDetailsConfig: Record<string, ServiceDetailConfig> = {
  '1': {
    sections: [
      {
        title: {
          uk: 'Frontend розробка',
          en: 'Frontend Development',
        },
        content: {
          uk: 'Створюю сучасні інтерфейси на React з TypeScript, використовуючи останні технології та бібліотеки. Фокусуюсь на продуктивності, доступності та адаптивності.',
          en: 'I create modern interfaces on React with TypeScript, using the latest technologies and libraries. I focus on performance, accessibility, and responsiveness.',
        },
      },
      {
        title: {
          uk: 'Backend розробка',
          en: 'Backend Development',
        },
        content: {
          uk: 'Розробляю потужні серверні додатки на Nest.js з підтримкою REST API та GraphQL. Забезпечую безпеку, масштабованість та оптимізацію.',
          en: 'I develop powerful server applications on Nest.js with REST API and GraphQL support. I ensure security, scalability, and optimization.',
        },
      },
    ],
    features: [
      {
        uk: 'Односторінкові додатки (SPA)',
        en: 'Single Page Applications (SPA)',
      },
      {
        uk: 'Серверний рендеринг (SSR)',
        en: 'Server-Side Rendering (SSR)',
      },
      {
        uk: 'SEO оптимізація',
        en: 'SEO Optimization',
      },
      {
        uk: 'Прогресивні веб-додатки (PWA)',
        en: 'Progressive Web Apps (PWA)',
      },
    ],
    technologies: ['React', 'Nest.js', 'TypeScript', 'Next.js', 'GraphQL'],
    videoUrl: '/videos/web-development.mp4',
  },
  '2': {
    sections: [
      {
        title: {
          uk: 'Крос-платформенна розробка',
          en: 'Cross-Platform Development',
        },
        content: {
          uk: 'Розробляю додатки на React Native, які працюють на iOS та Android з нативною продуктивністю. Використовую Expo для швидкої розробки та деплою.',
          en: 'I develop React Native applications that run on iOS and Android with native-like performance. I use Expo for rapid development and deployment.',
        },
      },
      {
        title: {
          uk: 'UI/UX дизайн',
          en: 'UI/UX Design',
        },
        content: {
          uk: 'Створюю інтуїтивні та елегантні інтерфейси, які забезпечують приємний досвід використання. Фокусуюсь на анімаціях та плавних переходах.',
          en: 'I create intuitive and elegant interfaces that provide a pleasant user experience. I focus on animations and smooth transitions.',
        },
      },
    ],
    features: [
      {
        uk: 'iOS та Android',
        en: 'iOS and Android',
      },
      {
        uk: 'Нативна продуктивність',
        en: 'Native Performance',
      },
      {
        uk: 'Адаптивний дизайн',
        en: 'Responsive Design',
      },
      {
        uk: 'Офлайн режим',
        en: 'Offline Mode',
      },
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Redux'],
    videoUrl: '/videos/mobile-development.mp4',
  },
  '3': {
    sections: [
      {
        title: {
          uk: 'Telegram та WhatsApp боти',
          en: 'Telegram & WhatsApp Bots',
        },
        content: {
          uk: 'Створюю інтелектуальних ботів для автоматизації комунікацій, обробки запитів та взаємодії з користувачами. Інтегрую з CRM системами та базами даних.',
          en: 'I create intelligent bots for automating communications, processing requests, and interacting with users. I integrate with CRM systems and databases.',
        },
      },
      {
        title: {
          uk: 'AI асистенти',
          en: 'AI Assistants',
        },
        content: {
          uk: 'Розробляю AI-асистентів для оптимізації workflow, аналізу даних та автоматизації рутинних задач. Використовую сучасні моделі машинного навчання.',
          en: 'I develop AI assistants to optimize workflows, analyze data, and automate routine tasks. I use modern machine learning models.',
        },
      },
      {
        title: {
          uk: 'API інтеграції',
          en: 'API Integrations',
        },
        content: {
          uk: 'Інтегрую різні сервіси та системи через REST API та webhooks. Забезпечую безшовну роботу між різними платформами та синхронізацію даних.',
          en: 'I integrate various services and systems through REST API and webhooks. I ensure seamless operation between different platforms and data synchronization.',
        },
      },
    ],
    features: [
      {
        uk: 'Автоматизація процесів',
        en: 'Process Automation',
      },
      {
        uk: 'Інтеграція з CRM',
        en: 'CRM Integration',
      },
      {
        uk: 'Webhook підтримка',
        en: 'Webhook Support',
      },
      {
        uk: 'Аналітика та звіти',
        en: 'Analytics & Reports',
      },
    ],
    technologies: ['Node.js', 'Python', 'Telegram Bot API', 'OpenAI API'],
    videoUrl: '/videos/coding.mp4',
  },
};
