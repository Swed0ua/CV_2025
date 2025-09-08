import React from 'react';
import { GlassContainer } from '../GlassContainer/GlassContainer';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
      }}
      onClick={handleOverlayClick}
    >
      <GlassContainer
        style={{
          width: '100%',
          height: '100%',
        }}
        glassStyles={{
          borderRadius: '0',
        }}
      >
        <></>
      </GlassContainer>
    </div>
  );
};
