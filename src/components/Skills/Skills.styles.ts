import { CSSProperties } from 'react';

export const glassContainerStyles: CSSProperties = {
  padding: '20px',
  paddingBottom: '30px',
  borderRadius: '20px',
};

// Animation variants for Skills Grid
export const skillsGridAnimationVariants = {
  hidden: {
    width: '30%',
    opacity: 0,
    transform: 'scale(0)',
  },
  visible: {
    width: '100%',
    transform: 'scale(1)',
    opacity: 1,
    transition: {
      width: { duration: 0.8, ease: 'easeOut' as const, delay: 0.6 },
      transform: { duration: 0.5, ease: 'easeOut' as const },
      opacity: { duration: 0.3, ease: 'easeOut' as const, delay: 0 },
    },
  },
};

export const skillItemAnimationVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
      delay: 0.8 + index * 0.15, // Random-ish delay based on index
    },
  }),
};

export const skillsVariants = {
  // Variants for different skill display modes
};
