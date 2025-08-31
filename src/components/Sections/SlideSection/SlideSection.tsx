import React, { ReactNode, CSSProperties } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { HeightVariant } from '../../../types/slideSectionTypes';

interface SlideSectionProps {
  children: ReactNode;

  height?: HeightVariant;
  customHeight?: string | number;

  threshold?: number;
  rootMargin?: string;

  animationDelay?: number;
  animationDuration?: number;

  // TODO: deal with entry and isIntersecting about eslint
  onIntersect?: (
    // eslint-disable-next-line no-unused-vars
    isIntersecting: boolean,
    // eslint-disable-next-line no-unused-vars
    entry?: IntersectionObserverEntry | null,
    // eslint-disable-next-line no-unused-vars
    slideIndex?: number,
  ) => void;

  className?: string;
  style?: CSSProperties;

  id?: string;

  slideIndex?: number;
}

export const SlideSection: React.FC<SlideSectionProps> = ({
  children,
  height = 'full',
  customHeight,
  threshold = 0.3,
  rootMargin = '0px',
  animationDelay = 0,
  animationDuration = 1000,
  onIntersect,
  className = '',
  style = {},
  id,
  slideIndex,
}) => {
  const { ref, isIntersecting, entry } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  React.useEffect(() => {
    onIntersect?.(isIntersecting, entry, slideIndex);
  }, [isIntersecting, onIntersect]);

  const getHeightStyle = (): CSSProperties => {
    switch (height) {
      case 'full':
        return { minHeight: '100vh' };
      case 'auto':
        return { minHeight: 'auto' };
      case 'custom':
        return {
          minHeight:
            typeof customHeight === 'number'
              ? `${customHeight}px`
              : customHeight || 'auto',
        };
      default:
        return { minHeight: '100vh' };
    }
  };

  const baseClasses = `
    flex items-center justify-center
    transition-all duration-1000 ease-out
    ${
      isIntersecting
        ? 'opacity-100 transform translate-y-0'
        : 'opacity-0 transform translate-y-8'
    }
  `.trim();

  const combinedStyle: CSSProperties = {
    ...getHeightStyle(),
    transitionDelay: `${animationDelay}ms`,
    transitionDuration: `${animationDuration}ms`,
    ...style,
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`${baseClasses} ${className}`}
      style={combinedStyle}
    >
      {children}
    </section>
  );
};
