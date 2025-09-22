import React from 'react';
import AnimatedBackground from '../../components/AnimatedBackground';
import './MainContent.css';
import {
  mainContentContainerStyles,
  mainContentTextStyles,
} from './MainContent.styles';

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
      <div className="mainContentText" style={mainContentTextStyles}>
        Hello World
      </div>
    </div>
  );
};

export default MainContent;
