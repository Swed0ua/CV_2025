import React from 'react';
import { useParams } from 'react-router-dom';
import {
  ServiceDetailTemplate,
  servicesData,
} from '../../constants/servicesData';
import DefaultServiceTemplate from './ServiceDetailTemplates/DefaultServiceTemplate';
import './ServiceDetail.css';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = servicesData.find(
    (s) => s.id === serviceId || s.slug === serviceId,
  );

  if (!service) {
    return (
      <div className="service-detail-container">
        <div className="service-detail-content">
          <h1>Service not found</h1>
        </div>
      </div>
    );
  }

  const renderTemplate = () => {
    switch (service.detailTemplate) {
      case ServiceDetailTemplate.WEB:
        return <DefaultServiceTemplate service={service} />;
      case ServiceDetailTemplate.MOBILE:
        return <DefaultServiceTemplate service={service} />;
      case ServiceDetailTemplate.AUTOMATION:
        return <DefaultServiceTemplate service={service} />;
      default:
        return <DefaultServiceTemplate service={service} />;
    }
  };

  return (
    <div className="service-detail-container">
      <div className="service-detail-content">{renderTemplate()}</div>
    </div>
  );
};

export default ServiceDetail;
