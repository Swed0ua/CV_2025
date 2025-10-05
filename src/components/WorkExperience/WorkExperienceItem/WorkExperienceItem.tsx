import React from 'react';
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
  return (
    <div className="work-experience-item" key={id}>
      <div className="work-experience-left">
        <h3 className="company-name">{companyName}</h3>
        <p className="role">{role}</p>
      </div>
      <Divider
        length="100px"
        orientation="vertical"
        className="work-experience-divider"
      />
      <div className="work-experience-right">
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
