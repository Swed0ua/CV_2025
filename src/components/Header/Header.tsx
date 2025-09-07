import React from 'react';
import { HeaderItem } from './HeaderItem';
import { useNavigation } from './NavigationContext';

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ className = '', style = {} }) => {
  const { activeSection, scrollToSection, navigateToPage, navigationItems } =
    useNavigation();

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

  const combinedStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    background: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 1000,
    ...style,
  };

  const navStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  return (
    <header className={`header ${className}`} style={combinedStyles}>
      <nav>
        <ul style={navStyles}>
          {navigationItems.map((item) => (
            <li key={item.id}>
              <HeaderItem
                onClick={() => handleTabClick(item)}
                isActive={activeSection === item.id}
              >
                {item.label}
              </HeaderItem>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
export { Header };
