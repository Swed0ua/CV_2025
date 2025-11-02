import React, { useEffect, useRef, useState } from 'react';

import './ServiceCard.css';
import { calculateScrollTransform } from '../../../utils/math';

export interface ServiceCardProps {
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundColor?: string;
  imagePosition?: 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
  endpoint?: number;
  maxShift?: number;
  minShift?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  backgroundImage,
  backgroundColor,
  imagePosition = 'left',
  className = '',
  style,
  endpoint = 0.5,
  maxShift = 60,
  minShift = 100,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementWidthProc, setElementWidthProc] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const vl = calculateScrollTransform({
        element: elementRef.current,
        endpoint,
        maxShift,
        minShift,
      });

      setElementWidthProc(vl);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [endpoint, maxShift, minShift]);

  const cardStyle: React.CSSProperties = {
    ...style,
    width: `${elementWidthProc}%`,
    ...(backgroundColor && { backgroundColor }),
  };

  return (
    <div
      className={`mobile-service-card ${imagePosition === 'right' ? 'service-card-right' : 'service-card-left'} ${className}`.trim()}
      ref={elementRef}
      style={cardStyle}
    >
      {backgroundImage && (
        <div className="service-card-image-wrapper">
          <img
            src={backgroundImage}
            alt={title}
            className="service-card-image"
          />
        </div>
      )}
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <div className="service-card-divider" />
        <p className="service-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
