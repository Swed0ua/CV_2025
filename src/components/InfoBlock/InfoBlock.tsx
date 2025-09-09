import React, { useState, useRef, useEffect } from 'react';
import './InfoBlock.css';
import {
  createInfoBlockStyles,
  createInfoSectionStyles,
  createInfoTitleStyles,
  createInfoDescriptionStyles,
} from './InfoBlock.styles';

interface InfoBlockProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  columns?: 1 | 2 | 3 | 4;
  showDivider?: boolean;
  useResponsive?: boolean;
}

interface InfoBlockSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface InfoTitleProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface InfoDescriptionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  children,
  className = '',
  style = {},
  // eslint-disable-next-line no-unused-vars
  showDivider = true, // TODO: fix unused vars
  useResponsive = true,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [hoveredSection, setHoveredSection] = useState<number | null>(null); // TODO: fix unused vars
  const [visibleSections, setVisibleSections] = useState<boolean[]>([]);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionCount = React.Children.count(children);
    setVisibleSections(new Array(sectionCount).fill(false));
  }, [children]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(
              entry.target.parentElement?.children || [],
            ).indexOf(entry.target);
            setVisibleSections((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    const sectionElements = blockRef.current?.querySelectorAll('.info-section');
    sectionElements?.forEach((section) => observer.observe(section));

    return () => {
      sectionElements?.forEach((section) => observer.unobserve(section));
    };
  }, [children]);

  const blockStyles: React.CSSProperties = {
    ...createInfoBlockStyles(),
    ...style,
  };

  const combinedClassName = useResponsive
    ? `info-block ${className}`.trim()
    : className;

  return (
    <div ref={blockRef} className={combinedClassName} style={blockStyles}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<InfoBlockSectionProps>(child)) {
          return React.cloneElement(child, {
            ...child.props,
            className: `info-section ${child.props.className || ''} ${visibleSections[index] ? 'visible' : ''}`,
            onMouseEnter: () => setHoveredSection(index),
            onMouseLeave: () => setHoveredSection(null),
          });
        }
        return child;
      })}
    </div>
  );
};

export const InfoBlockSection: React.FC<InfoBlockSectionProps> = ({
  children,
  className = '',
  style = {},
  onClick,
}) => {
  const sectionStyles: React.CSSProperties = {
    ...createInfoSectionStyles(),
    ...style,
  };

  return (
    <div
      className={`info-section ${className}`}
      style={sectionStyles}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const InfoTitle: React.FC<InfoTitleProps> = ({
  children,
  className = '',
  style = {},
}) => {
  const titleStyles: React.CSSProperties = {
    ...createInfoTitleStyles(),
    ...style,
  };

  return (
    <div className={`info-title ${className}`} style={titleStyles}>
      {children}
    </div>
  );
};

export const InfoDescription: React.FC<InfoDescriptionProps> = ({
  children,
  className = '',
  style = {},
}) => {
  const descriptionStyles: React.CSSProperties = {
    ...createInfoDescriptionStyles(),
    ...style,
  };

  return (
    <div className={`info-description ${className}`} style={descriptionStyles}>
      {children}
    </div>
  );
};

export default InfoBlock;
