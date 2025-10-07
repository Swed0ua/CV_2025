export interface MapValueProps {
  value: number;
  fromMin: number;
  fromMax: number;
  toMin?: number;
  toMax?: number;
}

export interface ScrollVisibilityOptions {
  element: HTMLElement;
  endpoint?: number;
  maxShift?: number;
  minShift?: number;
  fromMax?: number;
}

export const mapValue = ({
  value,
  fromMin,
  fromMax,
  toMin = 0,
  toMax = 1,
}: MapValueProps) => {
  const isReversed = fromMin > fromMax;

  if (isReversed) {
    const clampedValue = Math.max(fromMax, Math.min(fromMin, value));
    const progress = (clampedValue - fromMax) / (fromMin - fromMax);
    return toMax - progress * (toMax - toMin);
  } else {
    const clampedValue = Math.max(fromMin, Math.min(fromMax, value));
    const progress = (clampedValue - fromMin) / (fromMax - fromMin);
    return toMin + progress * (toMax - toMin);
  }
};

export const calculateScrollVisibility = (element: HTMLElement): number => {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  const elementTop = rect.top;
  const elementHeight = rect.height;

  return Math.max(
    0,
    Math.min(
      1,
      (viewportHeight - elementTop) / (viewportHeight + elementHeight),
    ),
  );
};

export const calculateScrollTransform = ({
  element,
  endpoint = 0.5,
  maxShift = 100,
  minShift = 0,
  fromMax = 0,
}: ScrollVisibilityOptions): number => {
  const visibilityPercentage = calculateScrollVisibility(element);

  if (visibilityPercentage <= endpoint) {
    return mapValue({
      value: visibilityPercentage,
      fromMin: endpoint,
      fromMax: fromMax,
      toMin: minShift,
      toMax: maxShift,
    });
  }

  return minShift;
};
