import React, { useEffect, useRef } from 'react';
import {
  welcomeScreenContainerStyles,
  splineIframeStyles,
  bottomCornerBlockStyles,
  leftSectionStyles,
  rightSectionStyles,
  sectionTitleStyles,
  sectionTextStyles,
  nameTextStyles,
  textInfoBlockWrapperStyles,
  textInfoBlockStyles,
} from './WelcomeScreen.styles';
import Button from '../../components/Button';
import './WelcomeScreen.css';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    VANTA: any;
  }
}

const WelcomeScreen: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={vantaRef} style={welcomeScreenContainerStyles}>
      <div
        className="WS__textInfoBlockWrapper"
        style={textInfoBlockWrapperStyles}
      >
        <div className="WS__textInfoBlock" style={textInfoBlockStyles}>
          <p
            style={{
              fontSize: '18px',
              fontWeight: '600',
              opacity: 0.8,
              marginBottom: '10px',
            }}
          >
            Full-stack Developer
          </p>
          <div className="nameText" style={nameTextStyles}>
            SHMAGALA ANDRII
          </div>
          <p
            className="textInfoBlock_desc"
            style={{ opacity: 0.4, marginTop: '30px' }}
          >
            <em style={{ fontStyle: 'italic', opacity: 0.8 }}>
              2+ years experience
            </em>{' '}
            in <strong>mobile apps</strong>, <strong>web dev</strong>,{' '}
            <strong>Telegram bots</strong>, <strong>backend</strong> solutions.
          </p>
          <Button
            style={{
              marginTop: '30px',
              width: 'fit-content',
              padding: '16px 70px',
            }}
            pulsePeriodTime={10000}
            className="textInfoBlock__btnDefault"
          >
            Contact me
          </Button>
        </div>
      </div>
      <iframe
        src="https://my.spline.design/digitalpass-NaEnQ17JYfnR13DFAK3rCZAy/"
        frameBorder="0"
        className="splineIframe"
        style={splineIframeStyles}
        title="Spline 3D Design"
      />

      <div className="bottomCornerBlock" style={bottomCornerBlockStyles}>
        <div style={leftSectionStyles}>
          <div style={sectionTitleStyles}>EXPERTISE</div>
          <div style={sectionTextStyles}>
            Full-stack developer with extensive experience across multiple
            technologies. Always ready to embrace new challenges and learn
            cutting-edge solutions.
          </div>
        </div>
        <div style={rightSectionStyles}>
          <div style={sectionTitleStyles}>PROJECTS</div>
          <div style={sectionTextStyles}>
            Diverse portfolio spanning web applications, mobile solutions, and
            innovative tech implementations. Each project showcases unique
            problem-solving approaches.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
