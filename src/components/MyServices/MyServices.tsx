import React, { useEffect, useRef, useState } from 'react';

import './MyServices.css';
import { calculateScrollTransform } from '../../utils/math';
import TitleWithBg from '../TitleWithBg';

export interface MyServicesProps {
  className?: string;
  style?: React.CSSProperties;
}

export const MyServices: React.FC<MyServicesProps> = ({
  className = '',
  style = {},
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [elemenWidthProc, setElementWidthProc] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const vl = calculateScrollTransform({
        element: elementRef.current,
        endpoint: 0.35,
        maxShift: 80,
        minShift: 100,
      });

      setElementWidthProc(vl);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`my-services ${className}`.trim()}
      style={{ ...style, paddingBottom: 2000 }}
    >
      <TitleWithBg>My Services</TitleWithBg>
      <div
        className="mobile-service-card"
        ref={elementRef}
        style={{ width: `${elemenWidthProc}%` }}
      >
        <h1>Hello World - My Services</h1>
      </div>
    </div>
  );
};

export default MyServices;
