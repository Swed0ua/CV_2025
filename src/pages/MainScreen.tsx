import React, { useRef } from 'react';
import { MAIN_SLIDE_DATA } from '../constants/slideData';
import { BaseSection } from '../components/Sections/BaseSection/BaseSection';
import { SectionItem } from '../types/slideSectionTypes';

const MainScreen: React.FC = () => {
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollTimeMs = 50;

  const scrollToTargetElement = (targetElement: HTMLElement | Element) => {
    if (targetElement && !isScrollingRef.current) {
      isScrollingRef.current = true;
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, scrollTimeMs);
    }
  };

  const handleSectionIntersect = (
    isIntersecting: boolean,
    entry?: IntersectionObserverEntry | null,
  ) => {
    if (isScrollingRef.current) return;

    if (isIntersecting && entry) {
      const intersectionRatio = entry.intersectionRatio;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        if (intersectionRatio >= 0.01) {
          scrollToTargetElement(entry.target);
        }
      }, scrollTimeMs);
    }
  };

  const renderSection = (section: SectionItem) => {
    return (
      <BaseSection
        key={section.id}
        id={section.id}
        height={section.height}
        customHeight={section.customHeight}
        className={section.className}
        threshold={0.01}
        onIntersect={handleSectionIntersect}
      >
        {section.component}
      </BaseSection>
    );
  };

  return <main className="relative">{MAIN_SLIDE_DATA.map(renderSection)}</main>;
};

export default MainScreen;
