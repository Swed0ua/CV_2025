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
    id: '1',
    color: '#FF6B6B',
    name: 'JavaScript',
    imagePath: '/images/TechRowIco/SK_logo.jpg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: '2',
    color: '#4ECDC4',
    name: 'TypeScript',
    imagePath: '/images/TechRowIco/typescript.png',
    url: 'https://www.typescriptlang.org/',
  },
  {
    id: '3',
    color: '#45B7D1',
    name: 'React',
    imagePath: '/images/TechRowIco/react.png',
    url: 'https://reactjs.org/',
  },
  {
    id: '4',
    color: '#96CEB4',
    name: 'Node.js',
    imagePath: '/images/TechRowIco/nodejs.png',
    url: 'https://nodejs.org/',
  },
  {
    id: '5',
    color: '#FFEAA7',
    name: 'Python',
    imagePath: '/images/TechRowIco/python.png',
    url: 'https://www.python.org/',
  },
  {
    id: '6',
    color: '#DDA0DD',
    name: 'AWS',
    imagePath: '/images/TechRowIco/aws.png',
    url: 'https://aws.amazon.com/',
  },
  {
    id: '7',
    color: '#98D8C8',
    name: 'MongoDB',
    imagePath: '/images/TechRowIco/mongodb.png',
    url: 'https://www.mongodb.com/',
  },
  {
    id: '8',
    color: '#F7DC6F',
    name: 'Git',
    imagePath: '/images/TechRowIco/git.png',
    url: 'https://git-scm.com/',
  },
  {
    id: '9',
    color: '#BB8FCE',
    name: 'Docker',
    imagePath: '/images/TechRowIco/docker.png',
    url: 'https://www.docker.com/',
  },
  {
    id: '10',
    color: '#85C1E9',
    name: 'Express',
    imagePath: '/images/TechRowIco/express.png',
    url: 'https://expressjs.com/',
  },
  {
    id: '11',
    color: '#F39C12',
    name: 'Nest.js',
    imagePath: '/images/TechRowIco/nestjs.png',
    url: 'https://nestjs.com/',
  },
  {
    id: '12',
    color: '#E74C3C',
    name: 'GCP',
    imagePath: '/images/TechRowIco/gcp.png',
    url: 'https://cloud.google.com/',
  },
];
