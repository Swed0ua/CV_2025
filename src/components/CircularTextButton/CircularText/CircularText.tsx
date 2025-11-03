import React, { useMemo } from 'react';
import './CircularText.css';

export interface CircularTextProps {
  text: string;
  textRepetitions?: number;
  rotationSpeed?: number;
  radius?: number;
  fontSize?: number;
  textColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const CircularText: React.FC<CircularTextProps> = ({
  text = 'Click me',
  textRepetitions = 3,
  rotationSpeed = 5,
  radius = 60,
  fontSize = 16,
  textColor = '#000',
  className = '',
  style,
}) => {
  const repeatedText = useMemo(() => {
    const baseText = `${text} `;
    return baseText.repeat(textRepetitions);
  }, [text, textRepetitions]);

  const pathId = useMemo(
    () => `circlePath-${Math.random().toString(36).substr(2, 9)}`,
    [],
  );

  const svgSize = 300;
  const center = svgSize / 2;

  return (
    <div
      className={`circular-text-container ${className}`.trim()}
      style={style}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width={`${svgSize}px`}
        height={`${svgSize}px`}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        className="circular-text-svg"
        style={
          {
            '--rotation-speed': `${rotationSpeed}s`,
          } as React.CSSProperties
        }
      >
        <defs>
          <path
            id={pathId}
            d={`M ${center}, ${center} m -${radius}, 0 a ${radius},${radius} 0 0,1 ${radius * 2},0 a ${radius},${radius} 0 0,1 -${radius * 2},0 `}
          />
        </defs>
        <g>
          {/* <use xlinkHref={`#${pathId}`} fill="none" /> */}
          <text
            fill={textColor}
            fontSize={fontSize}
            fontWeight="bold"
            className="circular-text-element"
          >
            <textPath xlinkHref={`#${pathId}`}>{repeatedText}</textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default CircularText;
