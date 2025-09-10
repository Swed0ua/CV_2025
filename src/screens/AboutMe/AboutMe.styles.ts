import { CSSProperties } from 'react';

export const aboutMeContainerStyles: CSSProperties = {
  width: '100%',
  height: '100vh',
  background:
    'linear-gradient(-45deg,rgb(29, 28, 25),rgb(35, 19, 19),rgb(9, 5, 29), #181212)',
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

export const aboutMeContentStyles: CSSProperties = {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: '100px',
};

export const aboutMeTextStyles: CSSProperties = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  opacity: 0.9,
  maxWidth: '1000px',
  position: 'relative',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const lottieAnimation1Styles: CSSProperties = {
  width: '400px',
  position: 'absolute',
  top: '70px',
  left: 'calc(50% - 70px)',
  zIndex: 2,
};
