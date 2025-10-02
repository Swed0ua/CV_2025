import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './TechRow.css';
import { techRowAnimationVariants } from './TechRow.styles';

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
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [chunksCount, setChunksCount] = useState(8);
  const containerRef = useRef<HTMLDivElement>(null);

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
    setTimeout(() => setShouldAnimate(true), 100);

    // Infinite loop logic
    const interval = setInterval(() => {
      if (containerRef.current) {
        const firstChunk =
          containerRef.current.querySelector('.tech-row-icons');
        if (firstChunk) {
          const rect = firstChunk.getBoundingClientRect();
          const screenWidth = window.innerWidth;

          // If first chunk completely exits screen, move it to end
          if (rect.right < -screenWidth) {
            const chunks =
              containerRef.current.querySelectorAll('.tech-row-icons');
            const firstMainChunk = chunks[0];

            // Remove first chunk
            firstMainChunk.remove();

            // Clone first chunk and add to end
            const clonedChunk = firstMainChunk.cloneNode(true) as HTMLElement;
            containerRef.current.appendChild(clonedChunk);
          }
        }
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`tech-row ${className}`.trim()} style={style}>
      <motion.div
        className="tech-row-track"
        variants={techRowAnimationVariants}
        initial="hidden"
        animate={shouldAnimate ? 'visible' : 'hidden'}
      >
        <div
          ref={containerRef}
          className="tech-row-content"
          style={{ gap: '60px' }}
        >
          {Array(chunksCount)
            .fill(0)
            .map((_, chunkIndex) => (
              <div
                key={`chunk-${chunkIndex}`}
                className={`tech-row-icons tech-row-icons-${chunkIndex}`}
              >
                {techIcons.map((icon) => (
                  <motion.div
                    key={`${chunkIndex}-${icon.id}`}
                    className="tech-icon"
                    style={{
                      backgroundColor: icon.color,
                    }}
                  >
                    <span className="tech-icon-text">{icon.name}</span>
                  </motion.div>
                ))}
              </div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechRow;
