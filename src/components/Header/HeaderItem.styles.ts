import { CSSProperties } from 'react';

export const baseStyles: CSSProperties = {
  position: 'relative',
  display: 'inline-block',
  padding: '12px 24px',
  borderRadius: '120px',
  cursor: 'pointer',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  color: 'white',
  fontSize: '16px',
  fontWeight: '500',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  outline: 'none',
  overflow: 'hidden',
};

export const activeStyles: CSSProperties = {
  boxShadow: `
    inset 0 2px 8px rgba(255, 255, 255, 0.3),
    inset 0 -1px 2px rgba(0, 0, 0, 0.1),
    0 4px 16px rgba(255, 255, 255, 0.1)
  `,
  border: '1px solid rgba(255, 255, 255, 0.4)',
  background: 'rgba(255, 255, 255, 0.1)',
};

export const inactiveStyles: CSSProperties = {
  boxShadow: `
    inset 0 1px 3px rgba(255, 255, 255, 0.1),
    inset 0 -1px 1px rgba(0, 0, 0, 0.05),
    0 2px 8px rgba(0, 0, 0, 0.1)
  `,
};

export const getActiveStyles = (isActive: boolean): CSSProperties => {
  return isActive ? activeStyles : inactiveStyles;
};

export const headerItemCSS = `
  .header-item:not(.active):hover {
    box-shadow: 
      inset 0 2px 6px rgba(255, 255, 255, 0.15),
      inset 0 -1px 2px rgba(0, 0, 0, 0.05),
      0 4px 12px rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    background: rgba(255, 255, 255, 0.08) !important;
  }
`;
