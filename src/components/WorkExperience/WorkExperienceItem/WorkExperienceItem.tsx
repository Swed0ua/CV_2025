import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './WorkExperienceItem.css';
import { Divider } from '../../Divider';

interface WorkExperienceItemProps {
  id: string;
  companyName: string;
  role: string;
  description: string;
}

export const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  id,
  companyName,
  role,
  description,
}) => {
  const [translateX, setTranslateX] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Розраховуємо відсоток видимості елемента
      // 0% = елемент на початку viewport (top = viewportHeight)
      // 100% = елемент в кінці viewport (top = -elementHeight)
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Відсоток видимості від 0 до 1
      const visibilityPercentage = Math.max(
        0,
        Math.min(
          1,
          (viewportHeight - elementTop) / (viewportHeight + elementHeight),
        ),
      );

      console.log('visibilityPercentage', visibilityPercentage);

      // Мапуємо відсоток на translateX
      // 50% видимості = 0vh (на своєму місці)
      // 90% видимості = 100vh (максимально вправо)
      let translateXValue = 0;
      if (visibilityPercentage >= 0.5) {
        // Від 50% до 100% мапуємо на 0vh до 100vh
        // translateXValue = ((visibilityPercentage - 0.5) / 0.5) * 100;
      } else {
        // Від 0% до 50% мапуємо на -50vh до 0vh
        translateXValue = 100 - visibilityPercentage * 2 * 100;
      }
      console.log('translateXValue', translateXValue);

      setTranslateX(translateXValue);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Викликаємо одразу для поточної позиції

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
          stiffness: 100,
          damping: 20,
        }}
      >
        <p className="description">{description}</p>
      </motion.div>
    </div>
  );
};

export default WorkExperienceItem;
