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
  elasticity = 0,
  cornerRadius = 200,
  padding = '48px 96px',
}) => {
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

  return (
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
      style={buttonStyles}
    >
      {children}
    </LiquidGlass>
  );
};
