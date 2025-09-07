import React from 'react';
import { Header } from './Header';
import LiquidGlass from 'liquid-glass-react';
import { wrapperHeaderStyles } from './Header.styles';

export const LiquidGlassHeader: React.FC = () => {
  return (
    <LiquidGlass
      // borderRadius={15}
      // blur={0.3}
      // contrast={1.1}
      // brightness={1.05}
      // saturation={1.2}
      // shadowIntensity={0.2}
      style={{ ...wrapperHeaderStyles }}
    >
      <Header />
    </LiquidGlass>
  );
};
