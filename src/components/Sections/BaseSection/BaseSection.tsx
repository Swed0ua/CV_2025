import React, { ReactNode, CSSProperties } from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { HeightVariant } from '../../../types/slideSectionTypes';

interface BaseSectionProps {
  children: ReactNode;
  id?: string;
  height?: HeightVariant;
  customHeight?: string | number;
  className?: string;
  style?: CSSProperties;

  // Intersection Observer
  threshold?: number | number[];
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

  animationDelay?: number;
  animationDuration?: number;
  showAnimation?: boolean;

  as?: 'section' | 'div';
}

export const BaseSection: React.FC<BaseSectionProps> = ({
  children,
  id,
  height = 'full',
  customHeight,
  className = '',
  style = {},
  threshold = 0.3,
  rootMargin = '0px',
  onIntersect,
  slideIndex,
  animationDelay = 0,
  animationDuration = 1000,
  showAnimation = false,
  as: Component = 'section',
}) => {
  const { ref, isIntersecting, entry } = useIntersectionObserver({
    threshold,
    rootMargin,
  });

  React.useEffect(() => {
    onIntersect?.(isIntersecting, entry, slideIndex);
  }, [isIntersecting, onIntersect, entry, slideIndex]);

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

  const getAnimationClasses = (): string => {
    if (!showAnimation) return '';

    return `
      flex items-center justify-center
      transition-all duration-1000 ease-out
      ${
        isIntersecting
          ? 'opacity-100 transform translate-y-0'
          : 'opacity-0 transform translate-y-8'
      }
    `.trim();
  };

  const combinedStyle: CSSProperties = {
    ...getHeightStyle(),
    ...(showAnimation && {
      transitionDelay: `${animationDelay}ms`,
      transitionDuration: `${animationDuration}ms`,
    }),
    ...style,
  };

  return (
    <Component
      // TODO: fix any
      ref={ref as any}
      id={id}
      className={`${getAnimationClasses()} ${className}`}
      style={combinedStyle}
    >
      {children}
    </Component>
  );
};
