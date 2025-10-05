import React from 'react';
import './WorkExperience.css';
import WorkExperienceItem from './WorkExperienceItem';

interface WorkExperienceProps {
  className?: string;
}

interface WorkExperienceData {
  id: string;
  companyName: string;
  role: string;
  description: string;
}

const workExperienceData: WorkExperienceData[] = [
  {
    id: '1',
    companyName: 'SmartKasa',
    role: 'Frontend Developer',
    description:
      'Розробка та підтримка веб-додатків для системи управління касовими операціями. Використання React, TypeScript та сучасних інструментів розробки.',
  },
  // {
  //   id: '2',
  //   companyName: 'MonoBank',
  //   role: 'Full Stack Developer',
  //   description:
  //     'Розробка фінансових додатків та інтеграція з банківськими системами. Робота з Node.js, React та різними API для обробки платежів.',
  // },
  // {
  //   id: '3',
  //   companyName: 'FreelanceHunt',
  //   role: 'React Developer',
  //   description:
  //     'Створення інтерактивних інтерфейсів для платформи фрілансу. Оптимізація продуктивності та покращення користувацького досвіду.',
  // },
];

const WorkExperience: React.FC<WorkExperienceProps> = ({ className }) => {
  return (
    <div
      className={`work-experience-container ${className || ''}`}
      style={{ paddingBottom: '1000px' }}
    >
      <h2>Work Experience</h2>
      {workExperienceData.map((item) => (
        <WorkExperienceItem
          key={item.id}
          id={item.id}
          companyName={item.companyName}
          role={item.role}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default WorkExperience;
