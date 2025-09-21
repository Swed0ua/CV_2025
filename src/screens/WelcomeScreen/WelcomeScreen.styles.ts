import { CSSProperties } from 'react';

export const welcomeScreenContainerStyles: CSSProperties = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#000000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontFamily: 'Arial, sans-serif',
  overflow: 'hidden',
};

export const splineIframeStyles: CSSProperties = {
  position: 'absolute',
  right: 0,
  top: 0,
  width: '50%',
  height: '120%',
  border: 'none',
  zIndex: 1,
};

export const bottomCornerBlockStyles: CSSProperties = {
  width: '70%',
  maxWidth: '1000px',
  height: '200px',
  position: 'absolute',
  bottom: '0px',
  left: '0px',
  padding: '25px 75px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  color: 'white',
  fontSize: '16px',
  fontWeight: '500',
  fontFamily: 'Arial, sans-serif',
  zIndex: 10,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const sectionContainerStyles: CSSProperties = {
  flex: 1,
};

export const leftSectionStyles: CSSProperties = {
  flex: 1,
  paddingRight: '20px',
};

export const rightSectionStyles: CSSProperties = {
  flex: 1,
  paddingLeft: '20px',
};

export const sectionTitleStyles: CSSProperties = {
  fontWeight: 'bold',
  marginBottom: '18px',
  opacity: 0.7,
};

export const sectionTextStyles: CSSProperties = {
  fontSize: '14px',
  lineHeight: '1.4',
  opacity: 0.4,
};

export const textInfoBlockWrapperStyles: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
  width: '90%',
  maxWidth: '1000px',
  height: '500px',
};

export const textInfoBlockStyles: CSSProperties = {
  width: '70%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '-50px',
};

export const nameTextStyles: CSSProperties = {
  position: 'relative',
  fontFamily: 'Righteous, cursive',
  fontSize: '4rem',
  fontWeight: 'bold',
  color: 'white',
  textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
};

// Animation variants for Framer Motion
export const textInfoBlockAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    x: -500,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
};

export const textInfoBlockTransition = {
  duration: 0.8,
  ease: 'easeOut' as const,
  staggerChildren: 0.2,
};

export const titleTextAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export const titleTextTransition = {
  duration: 0.5,
  ease: 'easeOut' as const,
};

export const nameTextAnimationVariants = {
  hidden: {
    opacity: 0,
    x: -1500,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
};

export const nameTextTransition = {
  duration: 2.3,
  ease: 'easeOut' as const,
  delay: 1,
};

export const descriptionTextAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
};

export const descriptionTextTransition = {
  duration: 0.7,
  ease: 'easeOut' as const,
  delay: 1.2,
};

export const buttonAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.8,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
  },
};

export const buttonTransition = {
  delay: 0.8,
  type: 'spring' as const,
  stiffness: 70,
  damping: 10,
};
