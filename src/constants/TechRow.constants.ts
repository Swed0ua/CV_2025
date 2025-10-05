import { TechIcon } from '../components/TechRow/TechRowTypes';

export const TECH_ROW_CONSTANTS = {
  // Animation settings
  DEFAULT_ANIMATION_SPEED: -0.4, // pixels per frame
  ANIMATION_CHECK_INTERVAL: 1000, // ms

  // Layout settings
  SCREEN_COVERAGE_MULTIPLIER: 3, // How many screens to cover
  MIN_CHUNKS_COUNT: 8,
  MAX_CHUNKS_COUNT: 50,
  DEFAULT_CHUNKS_INCREMENT: 8,

  // Timing
  ANIMATION_START_DELAY: 500, // ms delay before animation starts
} as const;

// Tech icons with images
export const TECH_ICONS: TechIcon[] = [
  {
    id: '2',
    color: '#4ECDC4',
    name: 'MonoBank',
    imagePath: '/images/TechRowIco/Monobank_logo.jpeg',
    url: 'https://www.monobank.ua/',
  },
  {
    id: '1',
    color: '#FF6B6B',
    name: 'SmartKasa',
    imagePath: '/images/TechRowIco/SK_logo.jpg',
    url: 'https://www.smartkasa.ua/',
  },
  {
    id: '3',
    color: '#45B7D1',
    name: 'Bitrix24',
    imagePath: '/images/TechRowIco/B24_logo.jpg',
    url: 'https://www.bitrix24.com/',
  },

  {
    id: '6',
    color: '#DDA0DD',
    name: 'FreelanceHunt',
    imagePath: '/images/TechRowIco/FH_logo.webp',
    url: 'https://freelancehunt.com/ua',
  },
  {
    id: '7',
    color: '#98D8C8',
    name: 'Insiders',
    imagePath: '/images/TechRowIco/Insiders_logo.png',
    url: 'https://www.insiders.software/',
  },
  {
    id: '5',
    color: '#FFEAA7',
    name: 'RageMP',
    imagePath: '/images/TechRowIco/RageMp_logo.webp',
    url: 'https://rage.mp/',
  },
  {
    id: '8',
    color: '#F7DC6F',
    name: 'Healthy Choice',
    imagePath: '/images/TechRowIco/HC_logo.png',
    url: 'https://healthychoice.ua/',
  },
  {
    id: '4',
    color: '#96CEB4',
    name: 'Youcontrol',
    imagePath: '/images/TechRowIco/Youcontrol_logo.jpg',
    url: 'https://www.youcontrol.com.ua/',
  },
  {
    id: '9',
    color: '#BB8FCE',
    name: 'My ChatBot AI',
    imagePath: '/images/TechRowIco/MyChatBotAI_logo.jpg',
    url: 'https://mychatbot.app/',
  },
  {
    id: '10',
    color: '#85C1E9',
    name: 'ReBud',
    imagePath: '/images/TechRowIco/ReBud_logo.png',
    url: 'https://rebud.com.ua/',
  },
];
