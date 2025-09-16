import React from 'react';

import './ColorBlobs.css';
import { colorBlobsContainerStyles } from './ColorBlobs.styles';
import { DEFAULT_COLOR_BLOBS } from '../../constants/colorBlobsData';

export interface ColorBlobConfig {
  id: string;
  colorClass: string;
  shapeClass: string;
  positionClass: string;
  customStyle?: React.CSSProperties;
}

interface ColorBlobProps {
  config: ColorBlobConfig;
}

export const ColorBlob: React.FC<ColorBlobProps> = ({ config }) => {
  const { colorClass, shapeClass, positionClass, customStyle } = config;

  return (
    <div
      className={`colorBlob ${colorClass} ${shapeClass} ${positionClass}`}
      style={customStyle}
    />
  );
};

interface ColorBlobsProps {
  className?: string;
  style?: React.CSSProperties;
  blobs?: ColorBlobConfig[];
}

const ColorBlobs: React.FC<ColorBlobsProps> = ({
  className = '',
  style,
  blobs,
}) => {
  const blobsToRender = blobs || DEFAULT_COLOR_BLOBS;

  const containerStyle = {
    ...colorBlobsContainerStyles,
    ...style,
  };

  return (
    <div className={`colorBlobsContainer ${className}`} style={containerStyle}>
      {blobsToRender.map((blob) => (
        <ColorBlob key={blob.id} config={blob} />
      ))}
    </div>
  );
};

export default ColorBlobs;
