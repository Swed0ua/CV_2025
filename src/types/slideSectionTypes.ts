import React, { CSSProperties } from 'react';

export type HeightVariant = 'full' | 'auto' | 'custom';

export type SectionType = 'slide' | 'simple';

export interface BaseSectionItem {
  id: string;
  component: React.ReactNode;
  height: HeightVariant;
  customHeight?: number;
  className?: string;
  type: SectionType;
}

export interface SlideSectionItem extends BaseSectionItem {
  type: 'slide';
  threshold?: number | number[];
  rootMargin?: string;
  animationDelay?: number;
  animationDuration?: number;
  onIntersect?: (
    // eslint-disable-next-line no-unused-vars
    isIntersecting: boolean,
    // eslint-disable-next-line no-unused-vars
    entry?: IntersectionObserverEntry | null,
    // eslint-disable-next-line no-unused-vars
    slideIndex?: number,
  ) => void;
}

export interface SimpleSectionItem extends BaseSectionItem {
  type: 'simple';
  style?: CSSProperties;
}

export type SectionItem = SlideSectionItem | SimpleSectionItem;
