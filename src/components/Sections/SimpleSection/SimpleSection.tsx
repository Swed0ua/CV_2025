import React, { ReactNode, CSSProperties } from 'react';
import { HeightVariant } from '../../../types/slideSectionTypes';

interface SimpleSectionProps {
  children: ReactNode;
  id?: string;
  height?: HeightVariant;
  customHeight?: number;
  className?: string;
  style?: CSSProperties;
}

export const SimpleSection: React.FC<SimpleSectionProps> = ({
  children,
  id,
  height = 'full',
  customHeight,
  className = '',
  style = {},
}) => {
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
    <div id={id} className={className} style={combinedStyle}>
      {children}
    </div>
  );
};
