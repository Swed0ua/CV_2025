import React, { useCallback } from 'react';
import { MAIN_SLIDE_DATA } from '../constants/slideData';
import { SlideSection } from '../components/Sections/SlideSection/SlideSection';
import { SectionItem } from '../types/slideSectionTypes';
import { SimpleSection } from '../components/Sections/SimpleSection/SimpleSection';

const MainScreen: React.FC = () => {
  const onIntersectSlide = useCallback(
    (isIntersecting: boolean, entry?: IntersectionObserverEntry | null) => {
      if (isIntersecting && entry) {
        entry.target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },
    [],
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
          threshold={section.threshold || 0.01}
          rootMargin={section.rootMargin || '0px'}
          onIntersect={onIntersectSlide}
          slideIndex={index}
        >
          {section.component}
        </SlideSection>
      );
    },
    [onIntersectSlide],
  );

  return <main className="relative">{MAIN_SLIDE_DATA.map(renderSection)}</main>;
};

export default MainScreen;
