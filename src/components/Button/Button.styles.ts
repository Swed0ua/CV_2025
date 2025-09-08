import { CSSProperties } from 'react';
export const buttonVariants = {
  small: {
    padding: '8px 16px',
    fontSize: '14px',
  } as CSSProperties,

  large: {
    padding: '16px 32px',
    fontSize: '18px',
  } as CSSProperties,

  primary: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  } as CSSProperties,

  secondary: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  } as CSSProperties,
};
