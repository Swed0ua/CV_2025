import React from 'react';

import './ColorBlobs.css';
import { colorBlobsContainerStyles } from './ColorBlobs.styles';

interface ColorBlobsProps {
  className?: string;
  style?: React.CSSProperties;
}

const ColorBlobs: React.FC<ColorBlobsProps> = ({ className = '', style }) => {
  return (
    <div
      className={`colorBlobsContainer ${className}`}
      style={{ ...colorBlobsContainerStyles, ...style }}
    >
      <div className="colorBlob colorBlob--purple colorBlob--shape1 colorBlob--pos1" />
      <div className="colorBlob colorBlob--green colorBlob--shape2 colorBlob--pos2" />
      <div className="colorBlob colorBlob--blue colorBlob--shape3 colorBlob--pos3" />
      <div className="colorBlob colorBlob--orange colorBlob--shape4 colorBlob--pos4" />
      <div className="colorBlob colorBlob--pink colorBlob--shape5 colorBlob--pos5" />
    </div>
  );
};

export default ColorBlobs;
