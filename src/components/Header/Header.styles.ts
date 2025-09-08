import { CSSProperties } from 'react';

export const wrapperHeaderStyles: CSSProperties = {
  width: '90%',
  maxWidth: '1000px',
  height: '80px',
  maxHeight: '80px',
  margin: '0 auto',
  padding: '0',
  zIndex: 1000,
  position: 'fixed',
  top: '16px',
  left: '50%',
  transform: 'translateX(-50%) ',
  borderRadius: '20px',
  overflow: 'hidden',
};

export const headerStyles: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
};

export const logoStyles: CSSProperties = {
  height: '40px',
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',
};

export const navWrapperStyles: CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
};

export const navStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

// Styles for medium screen (< 990px)
export const mediumScreenNavStyles: CSSProperties = {
  ...navStyles,
  display: 'none',
};

export const burgerIconStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '30px',
  height: '30px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
};

export const burgerLineStyles: CSSProperties = {
  width: '100%',
  height: '3px',
  backgroundColor: 'white',
  borderRadius: '2px',
};

export const spacerStyles: CSSProperties = {
  width: '40px',
};
