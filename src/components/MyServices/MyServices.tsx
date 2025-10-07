import React from 'react';

import './MyServices.css';

export interface MyServicesProps {
  className?: string;
  style?: React.CSSProperties;
}

export const MyServices: React.FC<MyServicesProps> = ({
  className = '',
  style = {},
}) => {
  return (
    <div className={`my-services ${className}`.trim()} style={style}>
      <div className="mobile-service-card">
        <h1>Hello World - My Services</h1>
      </div>
    </div>
  );
};

export default MyServices;
