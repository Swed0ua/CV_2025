import React, { useState } from 'react';
import { HeaderItem } from './HeaderItem';

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  // eslint-disable-next-line no-unused-vars
  onTabChange?: (tabId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  className = '',
  style = {},
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState('about');

  const navigationItems = [
    { id: 'about', label: 'Про мене' },
    { id: 'skills', label: 'Навички' },
    { id: 'works', label: 'Роботи' },
    { id: 'experience', label: 'Досвід' },
    { id: 'contact', label: 'Контакти' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  const combinedStyles: React.CSSProperties = {
    position: 'relative',
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
                onClick={() => handleTabClick(item.id)}
                isActive={activeTab === item.id}
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
