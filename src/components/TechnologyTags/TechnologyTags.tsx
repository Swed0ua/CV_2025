import React from 'react';
import { useLocalization } from '../../contexts/LocalizationContext';
import TechnologyTag from './TechnologyTag';
import './TechnologyTags.css';

export interface TechnologyTagsProps {
  technologies: string[];
  title?: string;
  mainColor?: string | null;
  className?: string;
  style?: React.CSSProperties;
}

export const TechnologyTags: React.FC<TechnologyTagsProps> = ({
  technologies,
  title,
  mainColor = null,
  className = '',
  style,
}) => {
  const { currentLanguage } = useLocalization();
  const defaultTitle = currentLanguage === 'uk' ? 'Технології' : 'Technologies';

  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <div
      className={`technology-tags-container ${className}`.trim()}
      style={style}
    >
      {title && <h2 className="technology-tags-title">{title}</h2>}
      {!title && <h2 className="technology-tags-title">{defaultTitle}</h2>}
      <div className="technologies-list">
        {technologies.map((tech, index) => (
          <TechnologyTag key={index} technology={tech} mainColor={mainColor} />
        ))}
      </div>
    </div>
  );
};

export default TechnologyTags;
