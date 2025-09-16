import React from 'react';
import './MainContent.css';
import {
  mainContentContainerStyles,
  mainContentTextStyles,
} from './MainContent.styles';
import ColorBlobs from '../../components/ColorBlobs/ColorBlobs';

const MainContent: React.FC = () => {
  return (
    <div className="mainContentContainer" style={mainContentContainerStyles}>
      <ColorBlobs />
      <div className="mainContentText" style={mainContentTextStyles}>
        Hello World
      </div>
    </div>
  );
};

export default MainContent;
