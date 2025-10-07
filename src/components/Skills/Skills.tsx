import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SkillItem } from './SkillItem';
import MainTitle from '../MainTitle';
import './Skills.css';
import { GlassContainer } from '../GlassContainer';
import { Divider } from '../Divider';
import { useLocalization } from '../../contexts/LocalizationContext';
import {
  glassContainerStyles,
  skillsGridAnimationVariants,
  skillItemAnimationVariants,
  skillsGridContainerAnimationVariants,
  delaySkillsDescription,
  skillsDescriptionAnimationVariants,
  skillsDescriptionTextTitleAnimationVariants,
  skillsDescriptionTextMainAnimationVariants,
  delaySkillsExpandableArrow,
} from './Skills.styles';
import { LiquidButton } from '../LiquidButton/LiquidButton';
import ExpandableArrow, { ExpandableArrowSize } from '../ExpandableArrow';
import { skillsData } from '../../constants/skillsData';

interface SkillsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Skills: React.FC<SkillsProps> = ({
  className = '',
  style = {},
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t, currentLanguage } = useLocalization();

  useEffect(() => {
    // Animation for expandable block
    let timeoutAnimExpandable: ReturnType<typeof setTimeout>;
    if (shouldAnimate) {
      timeoutAnimExpandable = setTimeout(() => {
        setIsExpanded(true);
      }, 1000);
    }
    return () => clearTimeout(timeoutAnimExpandable);
  }, [shouldAnimate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10px 0px',
      },
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const measureContentHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.scrollHeight;
        setContentHeight(height);
      }
    };

    measureContentHeight();
    window.addEventListener('resize', measureContentHeight);

    return () => window.removeEventListener('resize', measureContentHeight);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div ref={skillsRef} className={`skills ${className}`.trim()} style={style}>
      <MainTitle>{t('skills.title')}</MainTitle>
      <motion.div
        variants={skillsGridAnimationVariants}
        initial="hidden"
        animate={shouldAnimate ? 'visible' : 'hidden'}
        className="skills-grid-container"
      >
        <GlassContainer
          style={glassContainerStyles}
          className="skills-glass-container"
        >
          <motion.div
            className="skills-description"
            variants={skillsDescriptionAnimationVariants}
            initial="hidden"
            animate={shouldAnimate ? 'visible' : 'hidden'}
          >
            <div className="wisdom-text">
              <motion.p
                variants={skillsDescriptionTextTitleAnimationVariants}
                initial="hidden"
                animate={shouldAnimate ? 'visible' : 'hidden'}
              >
                {t('skills.wisdomText')}
              </motion.p>
            </div>
            <Divider
              orientation={isMobile ? 'horizontal' : 'vertical'}
              color="rgba(255, 255, 255, 0.3)"
              thickness={1}
              gradient={true}
              length={isMobile ? '80%' : '130px'}
              animate={shouldAnimate ? 'visible' : 'hidden'}
              duration={0.4}
              delay={delaySkillsDescription}
            />
            <div className="description-text">
              <motion.p
                variants={skillsDescriptionTextMainAnimationVariants}
                initial="hidden"
                animate={shouldAnimate ? 'visible' : 'hidden'}
              >
                {t('skills.descriptionText')}
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            className="skills-grid"
            variants={skillsGridContainerAnimationVariants(
              contentHeight,
              isExpanded,
            )}
            initial="hidden"
            animate={shouldAnimate ? 'visible' : 'hidden'}
          >
            <div ref={contentRef} className="skills-content">
              <div className="skills-content-data-wrapper">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    variants={skillItemAnimationVariants}
                    custom={index}
                  >
                    <SkillItem
                      logo={skill.logo}
                      backgroundImage={skill.backgroundImage}
                      name={skill.name}
                      description={skill.description[currentLanguage]}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <ExpandableArrow
            isExpanded={isExpanded}
            onToggle={toggleExpanded}
            style={{ position: 'absolute', top: 12, right: 12 }}
            size={ExpandableArrowSize.VeryLarge}
            isVisible={shouldAnimate}
            delay={delaySkillsExpandableArrow}
          />
        </GlassContainer>
      </motion.div>
      <div style={{}} className="skills-liquid-button-container">
        <LiquidButton onClick={() => alert('Get Started clicked!')}>
          {t('welcome.buttonText')}
        </LiquidButton>
      </div>
    </div>
  );
};

export default Skills;
