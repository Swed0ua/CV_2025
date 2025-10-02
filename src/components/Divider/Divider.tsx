import React from 'react';
import { motion } from 'framer-motion';
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
  variants?: any;
  initial?: any;
  animate?: any;
  delay?: number;
  duration?: number;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'auto',
  className = '',
  style = {},
  color = 'rgba(255, 255, 255, 0.3)',
  thickness = 1,
  length = '100%',
  gradient = true,
  variants,
  initial = 'hidden',
  animate = 'visible',
  delay = 0,
  duration = 0.8,
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

  const getDefaultVariants = () => {
    if (variants) return variants;

    const isHorizontal = orientation === 'horizontal' || orientation === 'auto';

    return {
      hidden: {
        opacity: 0,
        scaleX: isHorizontal ? 0 : 1,
        scaleY: isHorizontal ? 1 : 0,
      },
      visible: {
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        transition: {
          duration,
          delay,
          ease: 'easeOut',
        },
      },
    };
  };

  return (
    <motion.div
      className={`divider ${getOrientationClass()} ${className}`.trim()}
      style={{
        ...getDividerStyle(),
        ...getBackgroundStyle(),
      }}
      variants={getDefaultVariants()}
      initial={initial}
      animate={animate}
    />
  );
};

export default Divider;
