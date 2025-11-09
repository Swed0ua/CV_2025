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
  delay: 0.3,
  type: 'spring' as const,
  stiffness: 70,
  damping: 10,
};
