import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  style = {},
  disabled = false,
  type = 'button',
}) => {
  const combinedClassName = `btnDefault ${className}`.trim();

  return (
    <button
      type={type}
      className={combinedClassName}
      style={style}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
