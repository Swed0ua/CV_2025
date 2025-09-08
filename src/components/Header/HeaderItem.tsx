import React, { useEffect } from 'react';
import {
  baseStyles,
  getActiveStyles,
  headerItemCSS,
} from './HeaderItem.styles';

interface HeaderItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const HeaderItem: React.FC<HeaderItemProps> = ({
  children,
  onClick,
  isActive = false,
  className = '',
  style = {},
}) => {
  // Add CSS styles for hover
  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = headerItemCSS;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`header-item ${isActive ? 'active' : ''} ${className}`}
      style={{
        ...baseStyles,
        ...getActiveStyles(isActive),
        ...style,
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {children}
    </div>
  );
};
