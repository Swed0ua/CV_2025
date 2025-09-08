import React from 'react';
import { HeaderItem } from './HeaderItem';
import { useNavigation } from '../../contexts/NavigationContext';
import {
  headerStyles,
  logoStyles,
  navStyles,
  spacerStyles,
} from './Header.styles';

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ className = '', style = {} }) => {
  const {
    // activeSection,
    scrollToSection,
    navigateToPage,
    navigationItems,
    getActiveItemId,
  } = useNavigation();

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

  const combinedStyles: React.CSSProperties = {
    ...headerStyles,
    ...style,
  };

  return (
    <header className={`header ${className}`} style={combinedStyles}>
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

      <nav>
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

      <div style={spacerStyles} />
    </header>
  );
};

export default Header;
export { Header };
