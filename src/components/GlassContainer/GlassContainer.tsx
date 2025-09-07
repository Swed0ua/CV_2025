import React, { JSX, ReactNode } from 'react';
import {
  createGlassStyles,
  GlassContainerStyles,
} from './GlassContainer.styles';

interface GlassContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glassStyles?: GlassContainerStyles;
  as?: keyof JSX.IntrinsicElements;
}

export const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  className = '',
  style = {},
  glassStyles,
  as: Component = 'div',
}) => {
  const glassEffectStyles = createGlassStyles(glassStyles);
  const combinedStyles: React.CSSProperties = {
    ...glassEffectStyles,
    ...style,
  };

  return (
    <Component
      className={`glass-container ${className}`}
      style={combinedStyles}
    >
      {children}
    </Component>
  );
};
