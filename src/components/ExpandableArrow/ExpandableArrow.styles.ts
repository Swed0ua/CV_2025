import { CSSProperties } from 'react';

export const expandableArrowSizes: Record<string, CSSProperties> = {
  small: {
    width: '16px',
    height: '16px',
  },
  medium: {
    width: '24px',
    height: '24px',
  },
  large: {
    width: '32px',
    height: '32px',
  },
};

export const expandableArrowBaseStyles: CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '4px',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease-in-out',
  outline: 'none',
};

export const expandableArrowHoverStyles: CSSProperties = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
};

export const expandableArrowDisabledStyles: CSSProperties = {
  cursor: 'not-allowed',
  opacity: 0.5,
};
