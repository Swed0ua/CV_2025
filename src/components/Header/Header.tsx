import React from 'react';

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Header: React.FC<HeaderProps> = ({
  className = '',
  style = {},
}) => {
  const combinedStyles: React.CSSProperties = {
    ...style,
  };

  return (
    <header className={`header ${className}`} style={combinedStyles}></header>
  );
};
