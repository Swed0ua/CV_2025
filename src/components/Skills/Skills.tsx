import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SkillItem } from './SkillItem';
import MainTitle from '../MainTitle';
import './Skills.css';
import { GlassContainer } from '../GlassContainer';
import {
  glassContainerStyles,
  skillsGridAnimationVariants,
  skillItemAnimationVariants,
} from './Skills.styles';

interface Skill {
  id: string;
  logo: string;
  backgroundImage: string;
  name: string;
  description: string;
}

interface SkillsProps {
  className?: string;
  style?: React.CSSProperties;
}

// Mock data - замініть на реальні дані
const skillsData: Skill[] = [
  {
    id: '1',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    name: 'JavaScript',
    description:
      'Мова програмування для створення інтерактивних веб-додатків та серверних рішень.',
  },
  {
    id: '2',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop',
    name: 'TypeScript',
    description:
      'Типізована надмножина JavaScript, що забезпечує кращу розробку та підтримку коду.',
  },
  {
    id: '3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    name: 'React',
    description:
      'Бібліотека для створення користувацьких інтерфейсів з компонентною архітектурою.',
  },
  {
    id: '4',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
    name: 'Node.js',
    description: 'JavaScript runtime для створення серверних додатків та API.',
  },
];

export const Skills: React.FC<SkillsProps> = ({
  className = '',
  style = {},
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10px 0px',
      },
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={skillsRef} className={`skills ${className}`.trim()} style={style}>
      <MainTitle>Skills & Technologies</MainTitle>
      <motion.div
        variants={skillsGridAnimationVariants}
        initial="hidden"
        animate={shouldAnimate ? 'visible' : 'hidden'}
        className="skills-grid-container"
      >
        <GlassContainer style={glassContainerStyles}>
          <motion.div className="skills-grid">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.id}
                variants={skillItemAnimationVariants}
                custom={index}
              >
                <SkillItem
                  logo={skill.logo}
                  backgroundImage={skill.backgroundImage}
                  name={skill.name}
                  description={skill.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </GlassContainer>
      </motion.div>
    </div>
  );
};

export default Skills;
