import React from 'react';
import './RotatingLogoBanner.css';

export interface RotatingLogoBannerProps {
  rotatingImageSrc?: string;
  logoSrc?: string;
  rotationSpeed?: string; // e.g., '20s'
  className?: string;
  style?: React.CSSProperties;
  height?: string | number;
  width?: string | number;
}

export const RotatingLogoBanner: React.FC<RotatingLogoBannerProps> = ({
  rotatingImageSrc = '/images/circle_text_FSD_light_blue.png',
  logoSrc = '/images/My_logo_white.png',
  rotationSpeed = '20s',
  className = '',
  style,
  height = 300,
  width = 300,
}) => {
  return (
    <div
      className={`rotating-logo-banner ${className}`.trim()}
      style={{
        ...style,
        ...(height && { height }),
        ...(width && { width }),
      }}
    >
      <div
        className="rotating-image-container"
        style={
          {
            backgroundImage: `url(${rotatingImageSrc})`,
            '--rotation-speed': rotationSpeed,
          } as React.CSSProperties
        }
      ></div>
      <img src={logoSrc} alt="Logo" className="center-logo" />
    </div>
  );
};

export default RotatingLogoBanner;
