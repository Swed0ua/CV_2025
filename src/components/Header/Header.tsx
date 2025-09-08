import React, { useState, useEffect } from 'react';
import { HeaderItem } from './HeaderItem';
import { useNavigation } from '../../contexts/NavigationContext';
import { getScreenType, ScreenType } from '../../constants/screenBreakpoints';
import {
  headerStyles,
  logoStyles,
  navStyles,
  navWrapperStyles,
  burgerIconStyles,
  burgerLineStyles,
  cursorGlowStyles,
} from './Header.styles';

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ className = '', style = {} }) => {
  const [screenType, setScreenType] = useState<ScreenType>('large');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [lastUpdateTime, setLastUpdateTime] = useState(0);

  const {
    scrollToSection,
    navigateToPage,
    navigationItems,
    getActiveItemId,
    toggleBurgerMenu,
  } = useNavigation();

  useEffect(() => {
    const checkScreenSize = () => {
      setScreenType(getScreenType(window.innerWidth));
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
  };

  const handleLogoClick = () => {
    navigateToPage('/');
  };

  const handleBurgerClick = () => {
    toggleBurgerMenu();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const now = Date.now();
    // Throttling - 16ms (60fps)
    if (now - lastUpdateTime > 16) {
      setLastUpdateTime(now);
      const target = e.currentTarget;
      const clientX = e.clientX;
      const clientY = e.clientY;

      requestAnimationFrame(() => {
        if (target) {
          const rect = target.getBoundingClientRect();
          setCursorPosition({
            x: clientX - rect.left,
            y: clientY - rect.top,
          });
        }
      });
    }
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const combinedStyles: React.CSSProperties = {
    ...headerStyles,
    ...style,
  };

  return (
    <header
      className={`header ${className}`}
      style={combinedStyles}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor glow effect */}
      <div
        style={{
          ...cursorGlowStyles,
          left: cursorPosition.x,
          top: cursorPosition.y,
          opacity: isMouseOver ? 1 : 0,
        }}
      />

      <img
        src="/images/My_logo_white.png"
        alt="Logo"
        style={logoStyles}
        onClick={handleLogoClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.8';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      />

      {screenType === 'large' && (
        <nav style={navWrapperStyles}>
          <ul style={navStyles}>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <HeaderItem
                  onClick={() => handleTabClick(item)}
                  isActive={getActiveItemId() === item.id}
                >
                  {item.label}
                </HeaderItem>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {screenType !== 'large' && (
        <button style={burgerIconStyles} onClick={handleBurgerClick}>
          <span style={burgerLineStyles} />
          <span style={burgerLineStyles} />
          <span style={burgerLineStyles} />
        </button>
      )}
    </header>
  );
};

export default Header;
export { Header };
