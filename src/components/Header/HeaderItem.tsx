import React from 'react';

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
  const baseStyles: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    padding: '12px 24px',
    borderRadius: '12px',
    cursor: 'pointer',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    color: 'white',
    fontSize: '16px',
    fontWeight: '500',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    outline: 'none',
    ...style,
  };

  const activeStyles: React.CSSProperties = isActive
    ? {
        boxShadow: `
      inset 0 2px 8px rgba(255, 255, 255, 0.3),
      inset 0 -1px 2px rgba(0, 0, 0, 0.1),
      0 4px 16px rgba(255, 255, 255, 0.1)
    `,
        border: '1px solid rgba(255, 255, 255, 0.4)',
        background: 'rgba(255, 255, 255, 0.1)',
      }
    : {
        boxShadow: `
      inset 0 1px 3px rgba(255, 255, 255, 0.1),
      inset 0 -1px 1px rgba(0, 0, 0, 0.05),
      0 2px 8px rgba(0, 0, 0, 0.1)
    `,
      };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) {
      e.currentTarget.style.boxShadow = `
        inset 0 2px 6px rgba(255, 255, 255, 0.2),
        inset 0 -1px 2px rgba(0, 0, 0, 0.1),
        0 4px 12px rgba(255, 255, 255, 0.15)
      `;
      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.3)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive) {
      e.currentTarget.style.boxShadow = `
        inset 0 1px 3px rgba(255, 255, 255, 0.1),
        inset 0 -1px 1px rgba(0, 0, 0, 0.05),
        0 2px 8px rgba(0, 0, 0, 0.1)
      `;
      e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`header-item ${className}`}
      style={{
        ...baseStyles,
        ...activeStyles,
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
