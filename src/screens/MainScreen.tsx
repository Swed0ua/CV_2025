import React, { useCallback } from 'react';
import { MAIN_SLIDE_DATA } from '../constants/slideData';
import { SlideSection } from '../components/Sections/SlideSection/SlideSection';
import { SectionItem } from '../types/slideSectionTypes';
import { SimpleSection } from '../components/Sections/SimpleSection/SimpleSection';
import { useScrollDirection } from '../hooks/useScrollDirection';

const MainScreen: React.FC = () => {
  const scrollDirection = useScrollDirection();

  const getTargetSection = useCallback(
    (slideIndex: number, direction: 'up' | 'down') => {
      return direction === 'down'
        ? MAIN_SLIDE_DATA[slideIndex + 1]
        : MAIN_SLIDE_DATA[slideIndex - 1];
    },
    [],
  );

  const shouldSwitchToSimple = useCallback(
    (section: SectionItem | undefined) => {
      return section?.type === 'simple';
    },
    [],
  );

  const handleSlideSectionIntersect = useCallback(
    (
      isIntersecting: boolean,
      entry?: IntersectionObserverEntry | null,
      slideIndex?: number,
    ) => {
      if (isIntersecting && entry) {
        const intersectionRatio = entry.intersectionRatio;

        if (intersectionRatio >= 0.001 && intersectionRatio <= 0.1) {
          entry.target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else {
          if (slideIndex !== undefined) {
            if (scrollDirection === 'down') {
              const nextSection = MAIN_SLIDE_DATA[slideIndex + 1];
              if (nextSection && nextSection.type === 'simple') {
                const nextElement = document.getElementById(nextSection.id);
                if (nextElement) {
                  nextElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }
            } else if (scrollDirection === 'up') {
              const previousSection = MAIN_SLIDE_DATA[slideIndex - 1];
              if (previousSection && previousSection.type === 'simple') {
                const prevElement = document.getElementById(previousSection.id);
                if (prevElement) {
                  prevElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }
            }
          }
        }
      }
    },
    [scrollDirection],
  );

  const renderSection = useCallback(
    (section: SectionItem, index: number) => {
      const commonProps = {
        key: section.id,
        id: section.id,
        height: section.height,
        customHeight: section.customHeight,
        className: section.className,
      };

      if (section.type === 'simple') {
        return (
          <SimpleSection {...commonProps} style={section.style}>
            {section.component}
          </SimpleSection>
        );
      }

      return (
        <SlideSection
          {...commonProps}
          threshold={[0.001, 0.8]}
          rootMargin={section.rootMargin || '0px'}
          onIntersect={handleSlideSectionIntersect}
          slideIndex={index}
        >
          {section.component}
        </SlideSection>
      );
    },
    [handleSlideSectionIntersect],
  );

  return <main className="relative">{MAIN_SLIDE_DATA.map(renderSection)}</main>;
};

export default MainScreen;
