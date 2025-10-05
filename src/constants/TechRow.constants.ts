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
  },
  {
    id: '2',
    color: '#4ECDC4',
    name: 'TypeScript',
    imagePath: '/images/TechRowIco/typescript.png',
  },
  {
    id: '3',
    color: '#45B7D1',
    name: 'React',
    imagePath: '/images/TechRowIco/react.png',
  },
  {
    id: '4',
    color: '#96CEB4',
    name: 'Node.js',
    imagePath: '/images/TechRowIco/nodejs.png',
  },
  {
    id: '5',
    color: '#FFEAA7',
    name: 'Python',
    imagePath: '/images/TechRowIco/python.png',
  },
  {
    id: '6',
    color: '#DDA0DD',
    name: 'AWS',
    imagePath: '/images/TechRowIco/aws.png',
  },
  {
    id: '7',
    color: '#98D8C8',
    name: 'MongoDB',
    imagePath: '/images/TechRowIco/mongodb.png',
  },
  {
    id: '8',
    color: '#F7DC6F',
    name: 'Git',
    imagePath: '/images/TechRowIco/git.png',
  },
  {
    id: '9',
    color: '#BB8FCE',
    name: 'Docker',
    imagePath: '/images/TechRowIco/docker.png',
  },
  {
    id: '10',
    color: '#85C1E9',
    name: 'Express',
    imagePath: '/images/TechRowIco/express.png',
  },
  {
    id: '11',
    color: '#F39C12',
    name: 'Nest.js',
    imagePath: '/images/TechRowIco/nestjs.png',
  },
  {
    id: '12',
    color: '#E74C3C',
    name: 'GCP',
    imagePath: '/images/TechRowIco/gcp.png',
  },
];
