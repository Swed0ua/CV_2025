import React from 'react';
import LiquidGlass from 'liquid-glass-react';

interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;

  displacementScale?: number;
  blurAmount?: number;
  saturation?: number;
  aberrationIntensity?: number;
  elasticity?: number;
  cornerRadius?: number;
  padding?: string;
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({
  children,
  onClick,
  className,
  style,
  displacementScale = 40,
  blurAmount = 0.03,
  saturation = 130,
  aberrationIntensity = 3,
  elasticity = 0.35,
  cornerRadius = 200,
  padding = '48px 96px',
}) => {
  // Розраховуємо ширину на основі padding
  const paddingValues = padding.split(' ');
  const horizontalPadding =
    paddingValues.length > 1
      ? parseInt(paddingValues[1]) * 2
      : parseInt(paddingValues[0]) * 2;

  // Розраховуємо вертикальний padding
  const verticalPadding =
    paddingValues.length > 1
      ? parseInt(paddingValues[0]) * 2
      : parseInt(paddingValues[0]);

  // Приблизна ширина тексту (можна налаштувати)
  const textWidth = typeof children === 'string' ? children.length * 10 : 100;
  const totalWidth = horizontalPadding + textWidth;
  const buttonStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    ...style,
  };

  const textHeight = typeof children === 'string' ? 20 : 20; // Приблизна висота тексту
  const totalHeight = verticalPadding + textHeight;

  return (
    <div
      style={{
        position: 'relative',
        width: `${totalWidth + 30}px`,
        height: `${totalHeight + 20}px`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: `50%`,
          left: `5px`,
          width: `${totalWidth}px`,
        }}
      >
        <LiquidGlass
          className={className}
          displacementScale={displacementScale}
          blurAmount={blurAmount}
          saturation={saturation}
          aberrationIntensity={aberrationIntensity}
          elasticity={elasticity}
          cornerRadius={cornerRadius}
          padding={padding}
          onClick={onClick}
          style={{
            ...buttonStyles,
            position: 'absolute',
            left: `${totalWidth / 2}px`,
            width: `${totalWidth}px`,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          {children}
        </LiquidGlass>
      </div>
    </div>
  );
};
