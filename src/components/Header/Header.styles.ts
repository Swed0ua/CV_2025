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
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  background: 'rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  zIndex: 1000,
};

export const logoStyles: CSSProperties = {
  height: '40px',
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',
};

export const navStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

export const spacerStyles: CSSProperties = {
  width: '40px',
};
