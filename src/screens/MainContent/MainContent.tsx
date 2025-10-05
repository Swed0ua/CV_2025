import React from 'react';
import AnimatedBackground from '../../components/AnimatedBackground';
import './MainContent.css';
import { mainContentContainerStyles } from './MainContent.styles';
import { Skills } from '../../components/Skills';
import TechRow from '../../components/TechRow';

const MainContent: React.FC = () => {
  return (
    <div className="mainContentContainer" style={mainContentContainerStyles}>
      <AnimatedBackground
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0.6,
        }}
      />
      <Skills className="contentContainer" />
      <TechRow
        style={{
          position: 'relative',
          zIndex: 2,
          marginLeft: '-20px',
          width: 'calc(100% + 40px)',
        }}
      />
    </div>
  );
};

export default MainContent;
