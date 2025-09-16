import { CSSProperties } from 'react';

export const mainContentContainerStyles: CSSProperties = {
  width: '100%',
  height: '2000px',
  background:
    'linear-gradient(-45deg, rgb(29, 28, 25), rgb(35, 19, 19), rgb(9, 5, 29), #181212)',
  backgroundSize: '400% 400%',
  animation: 'gradientShift 35s ease infinite',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontFamily: 'Roboto Mono, monospace',
  padding: '20px',
  position: 'relative',
  overflow: 'hidden',
};

export const mainContentTextStyles: CSSProperties = {
  fontSize: '3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  opacity: 0.9,
  textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
};
