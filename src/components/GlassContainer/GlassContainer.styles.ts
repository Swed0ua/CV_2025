import { CSSProperties } from 'react';

export interface GlassContainerStyles {
  borderRadius?: string | number;
  backdropFilter?: string;
  backgroundColor?: string;
  border?: string;
  boxShadow?: string;
  padding?: string | number;
  margin?: string | number;
}

export const defaultGlassStyles: CSSProperties = {
  backdropFilter: 'blur(10px) saturate(180%)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px 0 rgb(27 32 95 / 20%)',
};

export const createGlassStyles = (
  customStyles?: GlassContainerStyles,
): CSSProperties => {
  const baseStyles = {
    ...defaultGlassStyles,
    borderRadius: customStyles?.borderRadius || '12px',
    padding: customStyles?.padding || '16px',
    margin: customStyles?.margin || '0',
  };

  return {
    ...baseStyles,
    ...customStyles,
  };
};
