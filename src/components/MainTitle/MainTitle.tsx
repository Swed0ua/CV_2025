import React, { useEffect, useRef, useState } from 'react';

import './MainTitle.css';
import { mainTitleStyles } from './MainTitle.styles';

interface MainTitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animationDelay?: number;
  threshold?: number;
  animationName?: string;
}

const MainTitle: React.FC<MainTitleProps> = ({
  children,
  className = '',
  style,
  animationDelay = 200,
  threshold = 0.3,
  animationName = 'titleAnimated',
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsAnimated(true);
            }, animationDelay);
          }
        });
      },
      { threshold },
    );

    const currentTitle = titleRef.current;
    if (currentTitle) {
      observer.observe(currentTitle);
    }

    return () => {
      if (currentTitle) {
        observer.unobserve(currentTitle);
      }
    };
  }, [animationDelay, threshold]);

  return (
    <h1
      ref={titleRef}
      className={`mainTitle ${isAnimated ? animationName : ''} ${className}`}
      style={{ ...mainTitleStyles, ...style }}
    >
      {children}
    </h1>
  );
};

export default MainTitle;
