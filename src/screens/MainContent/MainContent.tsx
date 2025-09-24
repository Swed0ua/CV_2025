import React from 'react';
import AnimatedBackground from '../../components/AnimatedBackground';
import './MainContent.css';
import {
  mainContentContainerStyles,
  // mainContentTextStyles,
} from './MainContent.styles';
import { Skills } from '../../components/Skills';

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
      {/* <div className="mainContentText" style={mainContentTextStyles}>
        Hello World
      </div> */}
    </div>
  );
};

export default MainContent;
