import { useEffect } from 'react';

interface UseScrollLockOptions {
  isLocked: boolean;
  enabled?: boolean;
}

export const useScrollLock = ({
  isLocked,
  enabled = true,
}: UseScrollLockOptions) => {
  useEffect(() => {
    if (!enabled) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked, enabled]);
};
