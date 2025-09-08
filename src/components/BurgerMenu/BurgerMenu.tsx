import React, { useState, useEffect } from 'react';
import { GlassContainer } from '../GlassContainer/GlassContainer';
import { HeaderItem } from '../Header/HeaderItem';
import { useNavigation } from '../../contexts/NavigationContext';
import { useScrollLock } from '../../hooks/useScrollLock';
import { getScreenType, ScreenType } from '../../constants/screenBreakpoints';
import {
  burgerMenuOverlayStyles,
  burgerMenuContainerStyles,
  closeButtonStyles,
  closeIconContainerStyles,
  closeIconLineFirstStyles,
  closeIconLineSecondStyles,
  menuContentStyles,
  menuNavStyles,
  menuListStyles,
  menuListItemStyles,
  menuItemStyles,
} from './BurgerMenu.styles';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [screenType, setScreenType] = useState<ScreenType>('large');

  const { scrollToSection, navigateToPage, navigationItems, getActiveItemId } =
    useNavigation();

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

  const handleTabClick = (item: {
    id: string;
    type: 'section' | 'page';
    path?: string;
  }) => {
    if (item.type === 'section') {
      scrollToSection(item.id);
    } else if (item.type === 'page' && item.path) {
      navigateToPage(item.path);
    }
    onClose();
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div
      style={{
        ...burgerMenuOverlayStyles,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.15s ease-in-out',
      }}
      onClick={handleOverlayClick}
    >
      <GlassContainer
        style={burgerMenuContainerStyles}
        glassStyles={{
          borderRadius: '0',
        }}
      >
        <button
          onClick={onClose}
          style={closeButtonStyles}
          onMouseEnter={(e) => {
            Object.assign(e.currentTarget.style, closeButtonStyles, {
              background: 'rgba(255, 255, 255, 0.2)',
            });
          }}
          onMouseLeave={(e) => {
            Object.assign(e.currentTarget.style, closeButtonStyles);
          }}
        >
          <div style={closeIconContainerStyles}>
            <span style={closeIconLineFirstStyles} />
            <span style={closeIconLineSecondStyles} />
          </div>
        </button>

        <div style={menuContentStyles}>
          <nav style={menuNavStyles}>
            <ul style={menuListStyles}>
              {navigationItems.map((item) => (
                <li key={item.id} style={menuListItemStyles}>
                  <HeaderItem
                    onClick={() => handleTabClick(item)}
                    isActive={getActiveItemId() === item.id}
                    style={menuItemStyles}
                  >
                    {item.label}
                  </HeaderItem>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </GlassContainer>
    </div>
  );
};
