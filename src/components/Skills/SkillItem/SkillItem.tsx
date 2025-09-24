import React, { useState } from 'react';
import './SkillItem.css';

interface SkillItemProps {
  logo: string;
  backgroundImage: string;
  name: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

export const SkillItem: React.FC<SkillItemProps> = ({
  logo,
  backgroundImage,
  name,
  description,
  className = '',
  style = {},
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`skill-item ${className}`.trim()}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="skill-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="skill-content">
        <div className="skill-logo">
          <img src={logo} alt={name} />
        </div>

        <h3 className="skill-name">{name}</h3>

        <div className={`skill-description ${isHovered ? 'visible' : ''}`}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
