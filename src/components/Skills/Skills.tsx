import React from 'react';
import { SkillItem } from './SkillItem';
import './Skills.css';

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
  return (
    <div className={`skills ${className}`.trim()} style={style}>
      <h2 className="skills-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <SkillItem
            key={skill.id}
            logo={skill.logo}
            backgroundImage={skill.backgroundImage}
            name={skill.name}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
