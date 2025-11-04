import React from 'react';
import './TechnologyTag.css';

export interface TechnologyTagProps {
  technology: string;
  className?: string;
  mainColor?: string;
  style?: React.CSSProperties;
}

export const TechnologyTag: React.FC<TechnologyTagProps> = ({
  technology,
  className = '',
  // eslint-disable-next-line no-unused-vars
  mainColor = '#a5b4ff',
  style,
}) => {
  return (
    <span
      className={`technology-tag ${className}`.trim()}
      style={{ ...style, '--main-color': mainColor } as React.CSSProperties}
    >
      {technology}
    </span>
  );
};

export default TechnologyTag;
