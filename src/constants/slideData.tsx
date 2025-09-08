import { HeroSlide } from '../components/Sections/Slides/HeroSlide';
import WelcomeScreen from '../screens/WelcomeScreen';
import { SectionItem } from '../types/slideSectionTypes';

export const MAIN_SLIDE_DATA: SectionItem[] = [
  {
    id: 'welcomeScreen',
    component: <WelcomeScreen />,
    height: 'full',
    type: 'slide',
    threshold: [0.001, 0.8],
    rootMargin: '0px',
  },
  // {
  //   id: 'skills',
  //   component: <HeroSlide />,
  //   height: 'full',
  //   type: 'simple',
  //   className: 'bg-gray-100',
  //   style: { padding: '2rem', backgroundColor: 'red' },
  // },
  // {
  //   id: 'skills2',
  //   component: <HeroSlide />,
  //   height: 'full',
  //   type: 'simple',
  //   className: 'bg-gray-100',
  //   style: { padding: '2rem', backgroundColor: 'yellow' },
  // },
  {
    id: 'projects',
    component: <HeroSlide />,
    height: 'full',
    type: 'slide',
    threshold: [0.001, 0.8],
    rootMargin: '0px',
  },
  {
    id: 'projects',
    component: <HeroSlide />,
    height: 'full',
    type: 'slide',
    threshold: [0.001, 0.8],
    rootMargin: '0px',
  },
  {
    id: 'projects',
    component: <HeroSlide />,
    height: 'full',
    type: 'slide',
    threshold: [0.001, 0.8],
    rootMargin: '0px',
  },
];
