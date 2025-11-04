import React from 'react';
import './TechnologyTag.css';

export interface TechnologyTagProps {
  technology: string;
  className?: string;
  style?: React.CSSProperties;
}

export const TechnologyTag: React.FC<TechnologyTagProps> = ({
  technology,
  className = '',
  style,
}) => {
  return (
    <span className={`technology-tag ${className}`.trim()} style={style}>
      {technology}
    </span>
  );
};

export default TechnologyTag;
