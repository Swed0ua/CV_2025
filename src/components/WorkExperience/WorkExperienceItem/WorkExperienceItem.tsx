import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './WorkExperienceItem.css';
import { Divider } from '../../Divider';
import { mapValue } from '../../../utils/math';

interface WorkExperienceItemProps {
  id: string;
  companyName: string;
  role: string;
  description: string;
  endpoint?: number;
  maxShift?: number;
}

export const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  id,
  companyName,
  role,
  description,
  endpoint = 0.6,
  maxShift = 50,
}) => {
  const [translateX, setTranslateX] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const elementTop = rect.top;
      const elementHeight = rect.height;

      const visibilityPercentage = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight - elementTop) / (viewportHeight + elementHeight),
        ),
      );

      let translateXValue = 0;
      if (visibilityPercentage <= endpoint) {
        const shiftValue = mapValue({
          value: visibilityPercentage,
          fromMin: endpoint,
          fromMax: 0,
          toMin: 0,
          toMax: maxShift,
        });
        translateXValue = shiftValue;
      }
      setTranslateX(translateXValue);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} className="work-experience-item" key={id}>
      <div className="work-experience-left">
        <h3 className="company-name">{companyName}</h3>
        <p className="role">{role}</p>
      </div>
      <Divider
        length="100px"
        orientation="vertical"
        className="work-experience-divider"
      />
      <motion.div
        className="work-experience-right"
        animate={{
          x: `${translateX}vh`,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 100,
        }}
      >
        <p className="description">{description}</p>
      </motion.div>
    </div>
  );
};

export default WorkExperienceItem;
