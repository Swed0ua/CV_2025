import React from 'react';
import './MyProjects.css';
import ProjectItem from './ProjectItem';
import { projectsData } from '../../constants/projectsData';
import MainTitle from '../MainTitle';

export interface MyProjectsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const MyProjects: React.FC<MyProjectsProps> = ({
  className = '',
  style = {},
}) => {
  return (
    <div className={`my-projects ${className}`.trim()} style={style}>
      <MainTitle>My Projects</MainTitle>
      <div className="my-projects-container">
        {projectsData.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
