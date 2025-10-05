interface MapValueProps {
  value: number;
  fromMin: number;
  fromMax: number;
  toMin?: number;
  toMax?: number;
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
