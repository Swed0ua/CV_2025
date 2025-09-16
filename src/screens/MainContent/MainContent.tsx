import React from 'react';
import './MainContent.css';
import {
  mainContentContainerStyles,
  mainContentTextStyles,
} from './MainContent.styles';

const MainContent: React.FC = () => {
  return (
    <div className="mainContentContainer" style={mainContentContainerStyles}>
      <div className="mainContentText" style={mainContentTextStyles}>
        Hello World
      </div>
    </div>
  );
};

export default MainContent;
