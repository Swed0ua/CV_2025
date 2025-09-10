import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Preloader.css';

interface PreloaderProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  isVisible?: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({
  children,
  className = '',
  style = {},
  isVisible = true,
}) => {
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (!isVisible && shouldRender) {
      setIsFadingOut(true);

      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500);

      return () => clearTimeout(timer);
    } else if (isVisible && !shouldRender) {
      setShouldRender(true);
      setIsFadingOut(false);
    }
  }, [isVisible, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`preloader ${isFadingOut ? 'preloader--fade-out' : ''} ${className}`.trim()}
      style={style}
    >
      <div className="preloader-lottie-container">
        <DotLottieReact src="/animations/Welcome.json" autoplay />
      </div>
      {children}
    </div>
  );
};

export default Preloader;
