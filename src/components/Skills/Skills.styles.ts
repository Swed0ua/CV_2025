import { CSSProperties } from 'react';

// Delays variables
export const delaySkillsDescription = 4;
export const delaySkillsDescriptionTextTitle = 0.5;
export const delaySkillsDescriptionTextMain = 1.2;
export const delaySkillsExpandableArrow =
  delaySkillsDescription + delaySkillsDescriptionTextMain + 1;

export const glassContainerStyles: CSSProperties = {
  padding: '2em',
  paddingBottom: '2em',
  borderRadius: '20px',
};

// Animation variants for Skills Grid
export const skillsGridContainerAnimationVariants = (
  height: number,
  isExpanded: boolean,
) => ({
  hidden: {
    height: 0,
    transform: 'translateY(-160px)',
    overflow: 'hidden',
  },
  visible: {
    height: isExpanded ? height : 0,
    overflow: 'hidden',
    transform: 'translateY(0px)',
    transition: {
      height: { duration: 1, ease: 'easeInOut' as const },
      opacity: { duration: 0.3, ease: 'easeOut' as const },
      transform: { duration: 1, ease: 'easeOut' as const, delay: 3 },
    },
  },
});

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
      delay: 1.3 + index * 0.15, // Random-ish delay based on index
    },
  }),
};

// Description

export const skillsDescriptionAnimationVariants = {
  hidden: {
    transform: 'scaleY(0%)',
  },
  visible: {
    transform: 'scaleY(100%)',
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
      delay: delaySkillsDescription,
    },
  },
};

export const skillsDescriptionTextTitleAnimationVariants = {
  hidden: {
    transform: 'translateX(100%)',
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transform: 'translateX(0%)',
    transformOrigin: 'right',
    transition: {
      duration: 1.3,
      ease: 'easeOut' as const,
      delay: delaySkillsDescription + delaySkillsDescriptionTextTitle,
    },
  },
};

export const skillsDescriptionTextMainAnimationVariants = {
  hidden: {
    transform: 'translateX(-100%)',
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transform: 'translateX(0%)',
    transformOrigin: 'left',
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
      delay: delaySkillsDescription + delaySkillsDescriptionTextMain,
    },
  },
};

export const skillsVariants = {
  // Variants for different skill display modes
};
