import React, { useEffect, useState, useRef } from 'react';
import './TechRow.css';

interface TechIcon {
  id: string;
  color: string;
  name: string;
}

// Mock data for tech icons - різнокольорові кружки
const techIcons: TechIcon[] = [
  { id: '1', color: '#FF6B6B', name: 'JavaScript' },
  { id: '2', color: '#4ECDC4', name: 'TypeScript' },
  { id: '3', color: '#45B7D1', name: 'React' },
  { id: '4', color: '#96CEB4', name: 'Node.js' },
  { id: '5', color: '#FFEAA7', name: 'Python' },
  { id: '6', color: '#DDA0DD', name: 'AWS' },
  { id: '7', color: '#98D8C8', name: 'MongoDB' },
  { id: '8', color: '#F7DC6F', name: 'Git' },
  { id: '9', color: '#BB8FCE', name: 'Docker' },
  { id: '10', color: '#85C1E9', name: 'Express' },
  { id: '11', color: '#F39C12', name: 'Nest.js' },
  { id: '12', color: '#E74C3C', name: 'GCP' },
];

interface TechRowProps {
  className?: string;
  style: React.CSSProperties;
}

export const TechRow: React.FC<TechRowProps> = ({
  className = '',
  style = {},
}) => {
  const [chunksCount, setChunksCount] = useState(8);
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const speedRef = useRef(-0.4);

  useEffect(() => {
    // Calculate chunks count based on screen width
    const calculateChunks = () => {
      const screenWidth = window.innerWidth;
      const iconWidth = 50;
      const iconGap = 60;
      const chunkWidth = (iconWidth + iconGap) * techIcons.length - iconGap;
      const neededWidth = screenWidth * 3; // Cover 3 screens

      let count = 8;
      while (count <= 50 && chunkWidth * count < neededWidth) {
        count += 8;
      }

      setChunksCount(Math.min(count, 50));
    };

    calculateChunks();
  }, []);

  useEffect(() => {
    const startAnimation = () => {
      // Pure animation function - only moves position
      const animate = () => {
        if (!containerRef.current) return;
        positionRef.current += speedRef.current;
        containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
        animationRef.current = requestAnimationFrame(animate);
      };

      // Check loop logic - runs every 1 second
      const checkLoop = () => {
        if (!containerRef.current) return;

        const firstChunk = containerRef.current.querySelector(
          '.tech-row-icons',
        ) as HTMLElement;
        if (firstChunk) {
          const chunkWidth = (50 + 60) * techIcons.length - 60;
          const screenWidth = window.innerWidth;

          if (positionRef.current <= -chunkWidth - screenWidth) {
            console.log('Moving first chunk to end');
            firstChunk.remove();
            const clonedChunk = firstChunk.cloneNode(true) as HTMLElement;
            containerRef.current.appendChild(clonedChunk);
            positionRef.current += chunkWidth;
            containerRef.current.style.transform = `translateX(${positionRef.current}px)`;
          }
        }
      };

      // Start animation
      animationRef.current = requestAnimationFrame(animate);
      console.log('Animation started!');

      // Start interval for checking loop
      intervalRef.current = window.setInterval(checkLoop, 1000);
    };

    setTimeout(startAnimation, 500);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [chunksCount]);

  return (
    <div className={`tech-row ${className}`.trim()} style={style}>
      <div className="tech-row-track">
        <div ref={containerRef} className="tech-row-content">
          {Array(chunksCount)
            .fill(0)
            .map((_, chunkIndex) => (
              <div key={`chunk-${chunkIndex}`} className="tech-row-icons">
                {techIcons.map((icon) => (
                  <div
                    key={`${chunkIndex}-${icon.id}`}
                    className="tech-icon"
                    style={{
                      backgroundColor: icon.color,
                    }}
                  >
                    <span className="tech-icon-text">{icon.name}</span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TechRow;
