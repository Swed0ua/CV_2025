import React from 'react';
import MainTitle from '../MainTitle';
import './TitleWithBg.css';

interface TitleWithBgProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animationDelay?: number;
  threshold?: number;
}

const TitleWithBg: React.FC<TitleWithBgProps> = ({
  children,
  className = '',
  style,
  animationDelay,
  threshold,
}) => {
  return (
    <div className={`title-with-bg-wrapper ${className}`.trim()} style={style}>
      <MainTitle
        animationName="title-with-bg-animated"
        animationDelay={animationDelay}
        threshold={threshold}
        className="title-with-bg"
      >
        {children}
      </MainTitle>
    </div>
  );
};

export default TitleWithBg;
