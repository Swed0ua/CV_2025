import { CSSProperties } from 'react';

export const mainContentContainerStyles: CSSProperties = {
  width: '100%',
  backgroundColor: '#000000',
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
  position: 'relative',
  zIndex: 10,
};
