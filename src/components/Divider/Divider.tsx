import React from 'react';
import './Divider.css';

export type DividerOrientation = 'horizontal' | 'vertical' | 'auto';

export interface DividerProps {
  orientation?: DividerOrientation;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  thickness?: number;
  length?: string;
  gradient?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'auto',
  className = '',
  style = {},
  color = 'rgba(255, 255, 255, 0.3)',
  thickness = 1,
  length = '100%',
  gradient = true,
}) => {
  const getOrientationClass = () => {
    if (orientation === 'auto') {
      return 'divider-auto';
    }
    return `divider-${orientation}`;
  };

  const getDividerStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      ...style,
    } as React.CSSProperties & {
      '--divider-color': string;
      '--divider-thickness': string;
      '--divider-length': string;
    };

    (baseStyle as any)['--divider-color'] = color;
    (baseStyle as any)['--divider-thickness'] = `${thickness}px`;
    (baseStyle as any)['--divider-length'] = length;

    if (orientation === 'horizontal' || orientation === 'auto') {
      return {
        ...baseStyle,
        width: length,
        height: `${thickness}px`,
      };
    }

    return {
      ...baseStyle,
      height: length,
      width: `${thickness}px`,
    };
  };

  const getBackgroundStyle = () => {
    if (!gradient) {
      return { backgroundColor: color };
    }

    if (orientation === 'horizontal' || orientation === 'auto') {
      return {
        background: `linear-gradient(to right, transparent, ${color}, transparent)`,
      };
    }

    return {
      background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
    };
  };

  return (
    <div
      className={`divider ${getOrientationClass()} ${className}`.trim()}
      style={{
        ...getDividerStyle(),
        ...getBackgroundStyle(),
      }}
    />
  );
};

export default Divider;
