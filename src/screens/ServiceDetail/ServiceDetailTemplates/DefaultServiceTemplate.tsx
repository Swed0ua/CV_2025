import React from 'react';
import { Service } from '../../../constants/servicesData';
import { serviceDetailsConfig } from '../../../constants/serviceDetailsConfig';
import { useLocalization } from '../../../contexts/LocalizationContext';
import TechnologyTags from '../../../components/TechnologyTags';
import './ServiceDetailTemplates.css';

interface ServiceTemplateProps {
  service: Service;
}

export const DefaultServiceTemplate: React.FC<ServiceTemplateProps> = ({
  service,
}) => {
  const { currentLanguage } = useLocalization();
  const config = serviceDetailsConfig[service.id];

  return (
    <div className="service-template default-template">
      <div className="service-template-header">
        <h1>{service.title[currentLanguage]}</h1>
        <p className="service-template-description">
          {service.description[currentLanguage]}
        </p>
      </div>

      {config?.sections && (
        <div className="service-template-sections">
          {config.sections.map((section, index) => (
            <div key={index} className="service-template-section">
              <h2>{section.title[currentLanguage]}</h2>
              <p>{section.content[currentLanguage]}</p>
            </div>
          ))}
        </div>
      )}

      {config?.features && (
        <div className="service-template-features">
          <h2>Features</h2>
          <ul>
            {config.features.map((feature, index) => (
              <li key={index}>{feature[currentLanguage]}</li>
            ))}
          </ul>
        </div>
      )}

      {config?.technologies && (
        <TechnologyTags technologies={config.technologies} />
      )}
    </div>
  );
};

export default DefaultServiceTemplate;
