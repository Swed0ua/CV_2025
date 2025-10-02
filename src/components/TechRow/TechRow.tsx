import React, { useEffect, useState, useRef } from 'react';
import './TechRow.css';
import { TECH_ROW_CSS_DIMENSIONS } from './TechRow.styles';
import {
  TECH_ICONS,
  TECH_ROW_CONSTANTS,
} from '../../constants/TechRow.constants';
import TechRowItem from './components/TechRowItem/TechRowItem';

interface TechRowProps {
  className?: string;
  style: React.CSSProperties;
}

export const TechRow: React.FC<TechRowProps> = ({
  className = '',
  style = {},
}) => {
  const [chunksCount, setChunksCount] = useState<number>(
    TECH_ROW_CONSTANTS.MIN_CHUNKS_COUNT,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const speedRef = useRef(TECH_ROW_CONSTANTS.DEFAULT_ANIMATION_SPEED);

  useEffect(() => {
    const calculateChunks = () => {
      const screenWidth = window.innerWidth;
      const iconWidth = TECH_ROW_CSS_DIMENSIONS.ICON_WIDTH;
      const iconGap = TECH_ROW_CSS_DIMENSIONS.ICON_GAP;
      const chunkWidth = (iconWidth + iconGap) * TECH_ICONS.length - iconGap;
      const neededWidth =
        screenWidth * TECH_ROW_CONSTANTS.SCREEN_COVERAGE_MULTIPLIER;

      let count = TECH_ROW_CONSTANTS.MIN_CHUNKS_COUNT;
      while (
        count <= TECH_ROW_CONSTANTS.MAX_CHUNKS_COUNT &&
        chunkWidth * count < neededWidth
      ) {
        count += TECH_ROW_CONSTANTS.DEFAULT_CHUNKS_INCREMENT;
      }

      setChunksCount(Math.min(count, TECH_ROW_CONSTANTS.MAX_CHUNKS_COUNT));
    };

    calculateChunks();
  }, []);

  useEffect(() => {
    const startAnimation = () => {
      const animate = () => {
        if (!containerRef.current) return;
        positionRef.current += speedRef.current;
        containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
        animationRef.current = requestAnimationFrame(animate);
      };

      const checkLoop = () => {
        if (!containerRef.current) return;
        const firstChunk = containerRef.current.querySelector(
          '.tech-row-icons',
        ) as HTMLElement;
        if (firstChunk) {
          const chunkWidth =
            (TECH_ROW_CSS_DIMENSIONS.ICON_WIDTH +
              TECH_ROW_CSS_DIMENSIONS.ICON_GAP) *
            TECH_ICONS.length;
          const screenWidth = window.innerWidth;

          if (positionRef.current <= -chunkWidth - screenWidth) {
            firstChunk.remove();
            const clonedChunk = firstChunk.cloneNode(true) as HTMLElement;
            containerRef.current.appendChild(clonedChunk);
            positionRef.current += chunkWidth;
            containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
          }
        }
      };

      animationRef.current = requestAnimationFrame(animate);
      intervalRef.current = window.setInterval(
        checkLoop,
        TECH_ROW_CONSTANTS.ANIMATION_CHECK_INTERVAL,
      );
    };

    setTimeout(startAnimation, TECH_ROW_CONSTANTS.ANIMATION_START_DELAY);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [chunksCount]);

  return (
    <div className={`tech-row ${className}`.trim()} style={style}>
      <div className="tech-row-track">
        <div
          ref={containerRef}
          className="tech-row-content"
          style={{ gap: TECH_ROW_CSS_DIMENSIONS.ICON_GAP }}
        >
          {Array(chunksCount)
            .fill(0)
            .map((_, chunkIndex) => (
              <div
                key={`chunk-${chunkIndex}`}
                className="tech-row-icons"
                style={{ gap: TECH_ROW_CSS_DIMENSIONS.ICON_GAP }}
              >
                {TECH_ICONS.map((icon) => (
                  <TechRowItem
                    key={`${chunkIndex}-${icon.id}`}
                    itemIndex={chunkIndex}
                    icon={icon}
                    size={{
                      width: TECH_ROW_CSS_DIMENSIONS.ICON_WIDTH,
                      height: TECH_ROW_CSS_DIMENSIONS.ICON_HEIGHT,
                    }}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TechRow;
