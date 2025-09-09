import React, { useEffect, useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import './AboutMe.css';
import {
  aboutMeContainerStyles,
  aboutMeContentStyles,
  aboutMeTitleStyles,
  aboutMeTextStyles,
  lottieAnimation1Styles,
} from './AboutMe.styles';
import TopographicLines from '../../components/TopographicLines';
import InfoBlock, {
  InfoBlockSection,
  InfoDescription,
  InfoTitle,
} from '../../components/InfoBlock';

const AboutMe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [titleAnimated, setTitleAnimated] = useState(false);
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setTitleAnimated(true);
            }, 200);

            setTimeout(() => {
              setTextAnimated(true);
            }, 500);
          }
        });
      },
      { threshold: 0.3 },
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="aboutMeContainer"
      style={aboutMeContainerStyles}
    >
      <InfoBlock
        showDivider={false}
        useResponsive={true}
        className="AboutMe__bottomCornerBlock"
        style={{
          position: 'absolute',
          bottom: '0px',
          right: '0px',
          maxWidth: '500px',
        }}
      >
        <InfoBlockSection>
          <InfoTitle>Персональна інформація</InfoTitle>
          <InfoDescription>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                fontSize: '14px',
                lineHeight: '1.6',
              }}
            >
              <div>
                <span style={{ color: '#A5B4FF', fontWeight: '600' }}>
                  Дата народження:
                </span>{' '}
                25.02.2001
              </div>
              <div>
                <span style={{ color: '#A5B4FF', fontWeight: '600' }}>
                  Проживання:
                </span>{' '}
                Lviv, Ukraine
              </div>
            </div>
          </InfoDescription>
        </InfoBlockSection>
      </InfoBlock>
      <div className="aboutMeContent" style={aboutMeContentStyles}>
        <TopographicLines
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.2,
          }}
        />
        <div
          className="aboutMeContent__lottieAnim1"
          style={lottieAnimation1Styles}
        >
          <DotLottieReact
            src="/animations/Animated_shapes.json"
            loop
            autoplay
          />
        </div>
        <h1
          ref={titleRef}
          className={`aboutMeTitle ${titleAnimated ? 'titleAnimated' : ''}`}
          style={aboutMeTitleStyles}
        >
          About Me
        </h1>
        <div
          ref={textRef}
          className={`aboutMeText ${textAnimated ? 'textAnimated' : ''}`}
          style={aboutMeTextStyles}
        >
          <p style={{ width: '80%' }}>
            Я –{' '}
            <strong style={{ color: '#A5B4FF' }}>Full Stack розробник</strong>{' '}
            із 2+ роками досвіду у створенні сучасних веб-додатків та мобільних
            платформ. Спеціалізуюся на повному циклі розробки – від концепції до
            релізу продукту.
          </p>
          <p>
            У сфері <strong style={{ color: '#A5B4FF' }}>frontend</strong>{' '}
            працюю з <strong style={{ color: '#A5B4FF' }}>React</strong> для
            веб-додатків та{' '}
            <strong style={{ color: '#A5B4FF' }}>React Native</strong> для
            мобільних платформ. Backend розробку веду на{' '}
            <strong style={{ color: '#A5B4FF' }}>Nest.js</strong>,{' '}
            <strong style={{ color: '#A5B4FF' }}>Express</strong>,{' '}
            <strong style={{ color: '#A5B4FF' }}>Flask</strong> та{' '}
            <strong style={{ color: '#A5B4FF' }}>Django</strong>.
          </p>
          <p style={{ width: '80%' }}>
            Керую проектами від архітектурного планування до деплою та випуску в
            реліз. Досвідчений у інтеграції API, автоматизації процесів та
            роботі з різними базами даних.
          </p>
          <p>
            Працюю як в команді, так і самостійно над проектами різної
            складності. Постійно розвиваюся та готовий до вивчення нових
            технологій для вирішення складних бізнес-завдань.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
