import { CSSProperties } from 'react';
import { ExpandableArrowSize } from './ExpandableArrowTypes';

export const expandableArrowSizes: Record<ExpandableArrowSize, CSSProperties> =
  {
    [ExpandableArrowSize.Small]: {
      width: '16px',
      height: '16px',
    },
    [ExpandableArrowSize.Medium]: {
      width: '24px',
      height: '24px',
    },
    [ExpandableArrowSize.Large]: {
      width: '32px',
      height: '32px',
    },
    [ExpandableArrowSize.VeryLarge]: {
      width: '42px',
      height: '42px',
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
