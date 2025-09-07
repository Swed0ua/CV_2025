import React from 'react';
import { Header } from './Header';
import { GlassContainer } from '../GlassContainer/GlassContainer';
import { wrapperHeaderStyles } from './Header.styles';

export const GlassHeader: React.FC = () => {
  return (
    <GlassContainer
      style={{ ...wrapperHeaderStyles }}
      glassStyles={{ borderRadius: '0' }}
    >
      <Header />
    </GlassContainer>
  );
};
