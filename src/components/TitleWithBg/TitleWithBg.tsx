import React, { useMemo } from 'react';
import MainTitle from '../MainTitle';
import './TitleWithBg.css';

interface TitleWithBgProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animationDelay?: number;
  threshold?: number;
  gradient?: string;
  solidColor?: string;
}

const TitleWithBg: React.FC<TitleWithBgProps> = ({
  children,
  className = '',
  style,
  animationDelay,
  threshold,
  gradient,
  solidColor,
}) => {
  const backgroundStyle = useMemo(() => {
    if (solidColor) {
      return { backgroundColor: solidColor };
    }
    if (gradient) {
      return { background: gradient };
    }
    return {
      background: 'linear-gradient(135deg, #ff3333 0%, #00ff66 100%)',
    };
  }, [gradient, solidColor]);

  return (
    <div className={`title-with-bg-wrapper ${className}`.trim()} style={style}>
      <div className="title-with-bg-background" style={backgroundStyle} />
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
