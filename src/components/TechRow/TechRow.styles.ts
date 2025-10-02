export const techRowAnimationVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export const TECH_ROW_CSS_DIMENSIONS = {
  ICON_WIDTH: 50,
  ICON_HEIGHT: 50,
  ICON_GAP: 60,
  CONTAINER_HEIGHT: 120,
} as const;
