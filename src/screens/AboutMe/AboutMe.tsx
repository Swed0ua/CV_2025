import React, { useEffect, useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useLocalization } from '../../i18n';

import './AboutMe.css';
import {
  aboutMeContainerStyles,
  aboutMeContentStyles,
  aboutMeTextStyles,
  lottieAnimation1Styles,
} from './AboutMe.styles';
import TopographicLines from '../../components/TopographicLines';
import MainTitle from '../../components/MainTitle';
import InfoBlock, {
  InfoBlockSection,
  InfoDescription,
  InfoTitle,
} from '../../components/InfoBlock';

const AboutMe: React.FC = () => {
  const { t } = useLocalization();
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
          <InfoTitle>{t('aboutMe.personalInfoTitle')}</InfoTitle>
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
                  {t('aboutMe.birthDate')}
                </span>{' '}
                {t('aboutMe.birthDateValue')}
              </div>
              <div>
                <span style={{ color: '#A5B4FF', fontWeight: '600' }}>
                  {t('aboutMe.location')}
                </span>{' '}
                {t('aboutMe.locationValue')}
              </div>
            </div>
          </InfoDescription>
        </InfoBlockSection>
      </InfoBlock>
      <div className="aboutMeContent" style={aboutMeContentStyles}>
        <TopographicLines
          className="topographicLinesAnimated"
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
        <MainTitle>{t('aboutMe.title')}</MainTitle>
        <div
          ref={textRef}
          className={`aboutMeText ${textAnimated ? 'textAnimated' : ''}`}
          style={aboutMeTextStyles}
        >
          <p style={{ width: '80%' }}>
            <span
              dangerouslySetInnerHTML={{ __html: t('aboutMe.description1') }}
            />
          </p>
          <p>
            <span
              dangerouslySetInnerHTML={{ __html: t('aboutMe.description2') }}
            />
          </p>
          <p style={{ width: '80%' }}>{t('aboutMe.description3')}</p>
          <p>{t('aboutMe.description4')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
