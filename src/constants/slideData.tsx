import { HeroSlide } from '../components/Sections/Slides/HeroSlide';
import AboutMe from '../screens/AboutMe';
import WelcomeScreen from '../screens/WelcomeScreen';
import { SectionItem } from '../types/slideSectionTypes';

export const MAIN_SLIDE_DATA: SectionItem[] = [
  {
    id: 'welcomeScreen',
    component: <WelcomeScreen />,
    height: 'full',
    type: 'slide',
    threshold: [0.1],
    rootMargin: '0px',
  },
  {
    id: 'aboutMe',
    component: <AboutMe />,
    height: 'full',
    type: 'slide',
    threshold: [0.1],
    rootMargin: '0px',
  },
  {
    id: 'projects',
    component: <HeroSlide />,
    height: 'full',
    type: 'slide',
    threshold: [0.1],
    rootMargin: '0px',
  },
  {
    id: 'projects',
    component: <HeroSlide />,
    height: 'full',
    type: 'slide',
    threshold: [0.1],
    rootMargin: '0px',
  },
  {
    id: 'projects',
    component: <HeroSlide />,
    height: 'full',
    type: 'slide',
    threshold: [0.1],
    rootMargin: '0px',
  },
];
