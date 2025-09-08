import { CSSProperties } from 'react';

export const aboutMeContainerStyles: CSSProperties = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#000000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontFamily: 'Roboto Mono, monospace',
  padding: '20px',
};

export const aboutMeContentStyles: CSSProperties = {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

export const aboutMeTitleStyles: CSSProperties = {
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  color: '#A5B4FF',
};

export const aboutMeTextStyles: CSSProperties = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  opacity: 0.8,
  maxWidth: '800px',
};
