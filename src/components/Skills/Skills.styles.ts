import { CSSProperties } from 'react';

export const glassContainerStyles: CSSProperties = {
  padding: '2em',
  paddingBottom: '2em',
  borderRadius: '20px',
};

// Animation variants for Skills Grid
export const skillsGridContainerAnimationVariants = {
  hidden: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  visible: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: {
      duration: 0.3,
      ease: 'easeOut' as const,
      delay: 4,
    },
  },
};

export const skillsGridAnimationVariants = {
  hidden: {
    width: '40%',
    opacity: 0,
    transform: 'scale(0)',
    transformOrigin: 'top',
  },
  visible: {
    width: '100%',
    transform: 'scale(1)',
    transformOrigin: 'top',
    opacity: 1,
    transition: {
      width: { duration: 1, ease: 'easeOut' as const, delay: 1.2 },
      transform: {
        duration: 1.2,
        ease: [0.65, 0.13, 0.22, 0.9] as [number, number, number, number],
      },
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
      delay: 1.4 + index * 0.15, // Random-ish delay based on index
    },
  }),
};

export const skillsVariants = {
  // Variants for different skill display modes
};
