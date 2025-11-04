import React from 'react';
import { useNavigate } from 'react-router-dom';

import './MyServices.css';
import TitleWithBg from '../TitleWithBg';
import ServiceCard from './ServiceCard';
import { servicesData } from '../../constants/servicesData';
import { useLocalization } from '../../contexts/LocalizationContext';

export interface MyServicesProps {
  className?: string;
  style?: React.CSSProperties;
}

export const MyServices: React.FC<MyServicesProps> = ({
  className = '',
  style = {},
}) => {
  const { currentLanguage } = useLocalization();
  const navigate = useNavigate();

  return (
    <div
      className={`my-services ${className}`.trim()}
      style={{ ...style, paddingBottom: 2000 }}
    >
      <TitleWithBg style={{ marginLeft: '2rem' }}>My Services</TitleWithBg>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service.id}
            title={service.title[currentLanguage]}
            description={service.description[currentLanguage]}
            backgroundImage={service.backgroundImage}
            backgroundColor={service.backgroundColor}
            imagePosition={index % 2 === 0 ? 'left' : 'right'}
            className={service.className}
            endpoint={service.endpoint}
            maxShift={service.maxShift}
            minShift={service.minShift}
            onClickFunction={() => {
              navigate(`/service/${service.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MyServices;
