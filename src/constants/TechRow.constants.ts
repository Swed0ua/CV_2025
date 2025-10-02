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

// Mock data for tech icons - різнокольорові кружки
export const TECH_ICONS: TechIcon[] = [
  { id: '1', color: '#FF6B6B', name: 'JavaScript' },
  { id: '2', color: '#4ECDC4', name: 'TypeScript' },
  { id: '3', color: '#45B7D1', name: 'React' },
  { id: '4', color: '#96CEB4', name: 'Node.js' },
  { id: '5', color: '#FFEAA7', name: 'Python' },
  { id: '6', color: '#DDA0DD', name: 'AWS' },
  { id: '7', color: '#98D8C8', name: 'MongoDB' },
  { id: '8', color: '#F7DC6F', name: 'Git' },
  { id: '9', color: '#BB8FCE', name: 'Docker' },
  { id: '10', color: '#85C1E9', name: 'Express' },
  { id: '11', color: '#F39C12', name: 'Nest.js' },
  { id: '12', color: '#E74C3C', name: 'GCP' },
];
