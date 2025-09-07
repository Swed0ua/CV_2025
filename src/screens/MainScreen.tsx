import React, { useCallback, useRef } from 'react';
import { MAIN_SLIDE_DATA } from '../constants/slideData';
import { SlideSection } from '../components/Sections/SlideSection/SlideSection';
import { SectionItem } from '../types/slideSectionTypes';
import { SimpleSection } from '../components/Sections/SimpleSection/SimpleSection';
import { useScrollDirection } from '../hooks/useScrollDirection';

const MainScreen: React.FC = () => {
  const scrollDirection = useScrollDirection();
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollTimeMs = 100;

  const scrollToTargetElement = (targerElement: HTMLElement | Element) => {
    if (targerElement && !isScrollingRef.current) {
      isScrollingRef.current = true;
      targerElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, scrollTimeMs);
    }
  };

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
      if (isScrollingRef.current) return;

      if (isIntersecting && entry) {
        const intersectionRatio = entry.intersectionRatio;

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = setTimeout(() => {
          if (intersectionRatio >= 0.001 && intersectionRatio <= 0.1) {
            scrollToTargetElement(entry.target);
          } else {
            if (slideIndex !== undefined) {
              const targetSection = getTargetSection(
                slideIndex,
                scrollDirection,
              );

              if (shouldSwitchToSimple(targetSection)) {
                const targetElement = document.getElementById(targetSection.id);
                if (targetElement) {
                  scrollToTargetElement(targetElement);
                }
              }
            }
          }
        }, scrollTimeMs);
      }
    },
    [scrollDirection, getTargetSection, shouldSwitchToSimple],
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
