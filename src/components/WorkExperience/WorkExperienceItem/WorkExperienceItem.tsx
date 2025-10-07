import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './WorkExperienceItem.css';
import { Divider } from '../../Divider';
import { calculateScrollTransform } from '../../../utils/math';

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
  endpoint = 0.55,
  maxShift = 70,
}) => {
  const [translateX, setTranslateX] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const translateXValue = calculateScrollTransform({
        element: elementRef.current,
        endpoint: endpoint,
        maxShift: maxShift,
      });

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
