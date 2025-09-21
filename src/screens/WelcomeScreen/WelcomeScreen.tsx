import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  welcomeScreenContainerStyles,
  splineIframeStyles,
  nameTextStyles,
  textInfoBlockWrapperStyles,
  textInfoBlockStyles,
  textInfoBlockAnimationVariants,
  textInfoBlockTransition,
  titleTextAnimationVariants,
  titleTextTransition,
  nameTextAnimationVariants,
  nameTextTransition,
  descriptionTextAnimationVariants,
  descriptionTextTransition,
  buttonAnimationVariants,
  buttonTransition,
} from './WelcomeScreen.styles';
import Button from '../../components/Button';
import { useLocalization } from '../../i18n';
import { useAppState } from '../../contexts/AppStateContext';
import './WelcomeScreen.css';
import {
  InfoBlock,
  InfoBlockSection,
  InfoDescription,
  InfoTitle,
} from '../../components/InfoBlock';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    VANTA: any;
  }
}

const WelcomeScreen: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const { t } = useLocalization();
  const { isPreloaderVisible } = useAppState();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (vantaRef.current && window.VANTA) {
      const vantaEffect = window.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        highlightColor: 0x22201b,
        midtoneColor: 0x7c4949,
        lowlightColor: 0x2f12bb,
        baseColor: 0x181212,
        blurFactor: 0.59,
      });

      return () => {
        if (vantaEffect && vantaEffect.destroy) {
          vantaEffect.destroy();
        }
      };
    }
  }, []);

  useEffect(() => {
    if (!isPreloaderVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isPreloaderVisible]);

  return (
    <div ref={vantaRef} style={welcomeScreenContainerStyles}>
      <div
        className="WS__textInfoBlockWrapper"
        style={textInfoBlockWrapperStyles}
      >
        <motion.div
          className="WS__textInfoBlock"
          style={textInfoBlockStyles}
          variants={textInfoBlockAnimationVariants}
          transition={textInfoBlockTransition}
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={titleTextAnimationVariants}
            transition={titleTextTransition}
            style={{
              fontSize: '18px',
              fontWeight: '600',
              opacity: 0.8,
              marginBottom: '10px',
            }}
          >
            {t('welcome.title')}
          </motion.p>
          <motion.div
            className="nameText"
            style={nameTextStyles}
            variants={nameTextAnimationVariants}
            transition={nameTextTransition}
          >
            {t('welcome.name')}
          </motion.div>
          <motion.p
            className="textInfoBlock_desc"
            variants={descriptionTextAnimationVariants}
            transition={descriptionTextTransition}
            style={{ opacity: 0.4, marginTop: '30px' }}
          >
            <em style={{ fontStyle: 'italic', opacity: 0.8 }}>
              {t('welcome.experience')}
            </em>{' '}
            <span
              dangerouslySetInnerHTML={{ __html: t('welcome.description') }}
            />
          </motion.p>
          <motion.div
            variants={buttonAnimationVariants}
            transition={buttonTransition}
          >
            <Button
              style={{
                marginTop: '30px',
                width: 'fit-content',
                padding: '16px 70px',
              }}
              pulsePeriodTime={10000}
              className="textInfoBlock__btnDefault"
            >
              {t('welcome.buttonText')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <iframe
        src="https://my.spline.design/digitalpass-NaEnQ17JYfnR13DFAK3rCZAy/"
        frameBorder="0"
        className="splineIframe"
        style={splineIframeStyles}
        title="Spline 3D Design"
      />

      <InfoBlock
        showDivider={false}
        useResponsive={true}
        className="WS__bottomCornerBlock"
        style={{
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          height: '200px',
        }}
      >
        <InfoBlockSection>
          <InfoTitle>{t('welcome.expertiseTitle')}</InfoTitle>
          <InfoDescription>{t('welcome.expertiseText')}</InfoDescription>
        </InfoBlockSection>

        <InfoBlockSection>
          <InfoTitle>{t('welcome.projectsTitle')}</InfoTitle>
          <InfoDescription>{t('welcome.projectsText')}</InfoDescription>
        </InfoBlockSection>
      </InfoBlock>
    </div>
  );
};

export default WelcomeScreen;
