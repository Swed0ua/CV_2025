import React, { useEffect, useState } from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  pulsePeriodTime?: number | null;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  style = {},
  disabled = false,
  type = 'button',
  pulsePeriodTime = null,
}) => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    if (pulsePeriodTime && !disabled) {
      let timeoutId: ReturnType<typeof setTimeout>;

      const interval = setInterval(() => {
        setIsPulsing(true);

        timeoutId = setTimeout(() => {
          setIsPulsing(false);
        }, 1000);
      }, pulsePeriodTime);

      return () => {
        clearInterval(interval);
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    }
  }, [pulsePeriodTime, disabled]);

  const combinedClassName = `btnDefault ${className} ${
    isPulsing ? 'btnPulse' : ''
  }`.trim();

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
