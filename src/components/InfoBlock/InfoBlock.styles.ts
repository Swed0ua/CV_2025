import { CSSProperties } from 'react';

export const createInfoBlockStyles = (): CSSProperties => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '70%',
  maxWidth: '1000px',
  height: '200px',
  padding: '25px 75px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  color: 'white',
  fontSize: '16px',
  fontWeight: '500',
  fontFamily: 'Arial, sans-serif',
  zIndex: 10,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  gap: '20px',
});

export const createInfoSectionStyles = (): CSSProperties => ({
  flex: 1,
  paddingRight: '20px',
  display: 'flex',
  flexDirection: 'column',
});

export const createInfoTitleStyles = (): CSSProperties => ({
  fontWeight: 'bold',
  marginBottom: '18px',
  opacity: 0.7,
  fontSize: '16px',
  color: 'white',
});

export const createInfoDescriptionStyles = (): CSSProperties => ({
  fontSize: '14px',
  lineHeight: '1.4',
  opacity: 0.4,
  color: 'white',
});
