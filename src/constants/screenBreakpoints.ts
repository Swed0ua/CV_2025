export const SCREEN_BREAKPOINTS = {
  LARGE: 990,
  MEDIUM: 768,
  SMALL: 480,
  EXTRA_SMALL: 0,
} as const;

export type ScreenType = 'large' | 'medium' | 'small' | 'extra-small';

export const getScreenType = (width: number): ScreenType => {
  if (width >= SCREEN_BREAKPOINTS.LARGE) {
    return 'large';
  } else if (width >= SCREEN_BREAKPOINTS.MEDIUM) {
    return 'medium';
  } else if (width >= SCREEN_BREAKPOINTS.SMALL) {
    return 'small';
  } else {
    return 'extra-small';
  }
};
