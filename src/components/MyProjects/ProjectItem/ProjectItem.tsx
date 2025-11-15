import React from 'react';
import './ProjectItem.css';

export interface ProjectItemProps {
  name: string;
  description: string;
  image: string;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="project-item">
      <div className="project-item-image-wrapper">
        <img src={image} alt={name} className="project-item-image" />
      </div>
      <div className="project-item-content">
        <h3 className="project-item-name">{name}</h3>
        <p className="project-item-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
