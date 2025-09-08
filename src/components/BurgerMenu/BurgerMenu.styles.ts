import { CSSProperties } from 'react';

export const burgerMenuOverlayStyles: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 9999,
};

export const burgerMenuContainerStyles: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
  backgroundColor: 'rgba(0, 0, 0, 0.35)',
};

export const closeButtonStyles: CSSProperties = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '60px',
  height: '60px',
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  zIndex: 10000,
};

export const closeButtonHoverStyles: CSSProperties = {
  background: 'rgba(255, 255, 255, 0.2)',
};

export const closeIconContainerStyles: CSSProperties = {
  position: 'relative',
  width: '24px',
  height: '24px',
};

export const closeIconLineStyles: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '0',
  width: '100%',
  height: '2px',
  backgroundColor: 'white',
  borderRadius: '1px',
  transition: 'all 0.3s ease',
};

export const closeIconLineFirstStyles: CSSProperties = {
  ...closeIconLineStyles,
  transform: 'translateY(-50%) rotate(45deg)',
};

export const closeIconLineSecondStyles: CSSProperties = {
  ...closeIconLineStyles,
  transform: 'translateY(-50%) rotate(-45deg)',
};

export const menuContentStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: '40px 20px',
};

export const menuNavStyles: CSSProperties = {
  width: '100%',
};

export const menuListStyles: CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  width: '100%',
};

export const menuListItemStyles: CSSProperties = {
  width: '100%',
  maxWidth: '400px',
};

export const menuItemStyles: CSSProperties = {
  width: '100%',
  textAlign: 'center',
  fontSize: '18px',
  padding: '16px 32px',
};
