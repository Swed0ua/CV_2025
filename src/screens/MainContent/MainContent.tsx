import React from 'react';
import './MainContent.css';
import {
  mainContentContainerStyles,
  mainContentTextStyles,
} from './MainContent.styles';
import ColorBlobs from '../../components/ColorBlobs/ColorBlobs';
import { MAIN_CONTENT_BLOBS } from '../../constants/colorBlobsData';

const MainContent: React.FC = () => {
  return (
    <div className="mainContentContainer" style={mainContentContainerStyles}>
      <ColorBlobs blobs={MAIN_CONTENT_BLOBS} />
      <div className="mainContentText" style={mainContentTextStyles}>
        Hello World
      </div>
    </div>
  );
};

export default MainContent;
