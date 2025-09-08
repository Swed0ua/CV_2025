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
  threshold?: number | number[];
  onIntersect?: (
    // eslint-disable-next-line no-unused-vars
    isIntersecting: boolean,
    // eslint-disable-next-line no-unused-vars
    entry?: IntersectionObserverEntry | null,
  ) => void;
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
  onIntersect,
  as: Component = 'section',
}) => {
  const { ref, isIntersecting, entry } = useIntersectionObserver({
    threshold,
    rootMargin: '0px',
  });

  React.useEffect(() => {
    onIntersect?.(isIntersecting, entry);
  }, [isIntersecting, onIntersect, entry]);

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

  const combinedStyle: CSSProperties = {
    ...getHeightStyle(),
    ...style,
  };

  return (
    <Component
      // TODO: fix any
      ref={ref as any}
      id={id}
      className={className}
      style={combinedStyle}
    >
      {children}
    </Component>
  );
};
