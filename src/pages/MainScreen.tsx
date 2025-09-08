import React from 'react';
import { MAIN_SLIDE_DATA } from '../constants/slideData';
import { BaseSection } from '../components/Sections/BaseSection/BaseSection';
import { SectionItem } from '../types/slideSectionTypes';

const MainScreen: React.FC = () => {
  const renderSection = (section: SectionItem) => {
    return (
      <BaseSection
        key={section.id}
        id={section.id}
        height={section.height}
        customHeight={section.customHeight}
        className={section.className}
      >
        {section.component}
      </BaseSection>
    );
  };

  return <main className="relative">{MAIN_SLIDE_DATA.map(renderSection)}</main>;
};

export default MainScreen;
