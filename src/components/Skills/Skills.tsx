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

interface Skill {
  id: string;
  logo: string;
  backgroundImage: string;
  name: string;
  description: string;
}

interface SkillsProps {
  className?: string;
  style?: React.CSSProperties;
}

// Mock data
const skillsData: Skill[] = [
  // Frontend Technologies
  {
    id: '1',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    name: 'JavaScript',
    description:
      'Основа сучасного веб-розробки. Створення інтерактивних додатків та серверних рішень.',
  },
  {
    id: '2',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop',
    name: 'TypeScript',
    description:
      'Типізована надмножина JavaScript для масштабних проектів з кращою підтримкою коду.',
  },
  {
    id: '3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    name: 'React',
    description:
      'Бібліотека для створення користувацьких інтерфейсів з компонентною архітектурою.',
  },
  {
    id: '4',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    name: 'React Native',
    description:
      'Крос-платформна розробка мобільних додатків з використанням React.',
  },

  // Backend Technologies
  {
    id: '5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
    name: 'Node.js',
    description: 'JavaScript runtime для створення серверних додатків та API.',
  },
  {
    id: '6',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    name: 'Express.js',
    description:
      'Мінімалістичний веб-фреймворк для Node.js для швидкої розробки API.',
  },
  {
    id: '7',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    name: 'Nest.js',
    description:
      'Прогресивний Node.js фреймворк для створення ефективних серверних додатків.',
  },
  {
    id: '8',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    name: 'Python',
    description:
      'Універсальна мова програмування для веб-розробки, аналітики та автоматизації.',
  },

  // Cloud & DevOps
  {
    id: '9',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
    name: 'AWS',
    description:
      'Хмарна платформа Amazon для розгортання та масштабування додатків.',
  },
  {
    id: '10',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
    name: 'Google Cloud',
    description:
      'Хмарні сервіси Google для розробки, розгортання та управління додатками.',
  },

  // APIs & Integration
  {
    id: '11',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    name: 'REST API',
    description:
      'Архітектурний стиль для створення веб-сервісів та інтеграції систем.',
  },
  {
    id: '12',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    name: 'AI Integration',
    description:
      'Інтеграція штучного інтелекту в проекти та автоматизація бізнес-процесів.',
  },

  // Development Tools
  {
    id: '13',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop',
    name: 'Git',
    description:
      'Система контролю версій для ефективної роботи в команді та управління кодом.',
  },
  {
    id: '14',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    name: 'Databases',
    description:
      'Робота з різними типами баз даних та оптимізація запитів для продуктивності.',
  },
  // DevOps & General Skills
  {
    id: '15',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
    name: 'DevOps',
    description:
      'Автоматизація розгортання, CI/CD пайплайни та управління інфраструктурою.',
  },
  {
    id: '16',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    backgroundImage:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    name: 'Adaptive Learning',
    description:
      'Швидке освоєння нових технологій та сервісів. Розуміння деталей, ефективне впровадження та успішне використання у проектах.',
  },
];

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
  const { t } = useLocalization();

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
                      description={skill.description}
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
