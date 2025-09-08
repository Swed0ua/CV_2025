import React, { useEffect, useRef, useState } from 'react';
import './AboutMe.css';
import {
  aboutMeContainerStyles,
  aboutMeContentStyles,
  aboutMeTitleStyles,
  aboutMeTextStyles,
} from './AboutMe.styles';

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
      <div className="aboutMeContent" style={aboutMeContentStyles}>
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
          <p>
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
          <p>
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
