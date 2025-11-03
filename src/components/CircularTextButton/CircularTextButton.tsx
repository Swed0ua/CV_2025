import React from 'react';
import './CircularTextButton.css';
import CircularText from './CircularText';

export interface CircularTextButtonProps {
  text: string;
  textRepetitions?: number;
  rotationSpeed?: number;
  radius?: number;
  fontSize?: number;
  textColor?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const CircularTextButton: React.FC<CircularTextButtonProps> = ({
  text,
  textRepetitions = 3,
  rotationSpeed = 5,
  radius = 60,
  fontSize = 16,
  textColor = '#000',
  children,
  className = '',
  style,
  onClick,
}) => {
  return (
    <button
      className={`circular-text-button ${className}`.trim()}
      style={style}
      onClick={onClick}
      type="button"
    >
      <CircularText
        text={text}
        textRepetitions={textRepetitions}
        rotationSpeed={rotationSpeed}
        radius={radius}
        fontSize={fontSize}
        textColor={textColor}
      />
      <div className="circular-text-button-content">
        {children || (
          // TODO: Refactoring component to use icon from icons folder
          <svg
            className="circular-text-button-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              d="M23.91 11.413A1 1 0 0 1 23 12h-3v17a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V12H9a1 1 0 0 1-.752-1.658l7-8a1.03 1.03 0 0 1 1.504 0l7 8a1 1 0 0 1 .159 1.071z"
              style={{ fill: '#262628' }}
            />
          </svg>
        )}
      </div>
    </button>
  );
};

export default CircularTextButton;
