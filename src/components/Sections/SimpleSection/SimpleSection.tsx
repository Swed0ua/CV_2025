import React, { ReactNode, CSSProperties } from 'react';
import { BaseSection } from '../BaseSection/BaseSection';
import { HeightVariant } from '../../../types/slideSectionTypes';

interface SimpleSectionProps {
  children: ReactNode;
  id?: string;
  height?: HeightVariant;
  customHeight?: string | number;
  className?: string;
  style?: CSSProperties;

  // Intersection Observer
  threshold?: number;
  rootMargin?: string;
  onIntersect?: (
    // eslint-disable-next-line no-unused-vars
    isIntersecting: boolean,
    // eslint-disable-next-line no-unused-vars
    entry?: IntersectionObserverEntry | null,
    // eslint-disable-next-line no-unused-vars
    slideIndex?: number,
  ) => void;
  slideIndex?: number;
}

export const SimpleSection: React.FC<SimpleSectionProps> = (props) => {
  return <BaseSection {...props} as="div" showAnimation={false} />;
};
