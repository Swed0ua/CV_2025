import React, { useState, useEffect } from 'react';
import { GlassContainer } from '../GlassContainer/GlassContainer';
import { useScrollLock } from '../../hooks/useScrollLock';
import { getScreenType, ScreenType } from '../../constants/screenBreakpoints';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [screenType, setScreenType] = useState<ScreenType>('large');

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const checkScreenSize = () => {
      setScreenType(getScreenType(window.innerWidth));
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useScrollLock({
    isLocked: isOpen && screenType !== 'large',
    enabled: true,
  });

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.15s ease-in-out',
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
