import React from 'react';
import './Skills.css';

interface SkillsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Skills: React.FC<SkillsProps> = ({
  className = '',
  style = {},
}) => {
  return (
    <div className={`skills ${className}`.trim()} style={style}>
      <h2>Hello World</h2>
    </div>
  );
};

export default Skills;
