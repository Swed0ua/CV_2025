import React from 'react';
import './HeroBanner.css';

export interface HeroBannerProps {
  children?: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  children,
  backgroundImage = '/images/smooth-stucco-wall_dark.png',
  backgroundColor = '#FF004D',
  className = '',
  style,
}) => {
  const bannerStyle: React.CSSProperties = {
    ...style,
    ...(backgroundImage
      ? { backgroundImage: `url(${backgroundImage})` }
      : { backgroundColor }),
  };

  return (
    <div className={`hero-banner ${className}`.trim()} style={bannerStyle}>
      <div className="hero-banner-content">
        {children || <h1>Hello World</h1>}
      </div>
    </div>
  );
};

export default HeroBanner;
