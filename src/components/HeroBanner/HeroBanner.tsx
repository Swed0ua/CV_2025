import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './HeroBanner.css';
import RotatingLogoBanner from '../RotatingLogoBanner';
import Button from '../Button';
import { useLocalization } from '../../i18n';
import { useAppState } from '../../contexts/AppStateContext';
import { buttonAnimationVariants, buttonTransition } from './HeroBanner.styles';

export interface HeroBannerProps {
  children?: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  backgroundImage = '/images/smooth-stucco-wall_dark.png',
  backgroundColor = '#FF004D',
  className = '',
  style,
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRectangleRef = useRef<HTMLImageElement>(null);
  const nameTextRef = useRef<HTMLDivElement>(null);
  const personRef = useRef<HTMLImageElement>(null);
  const coffeeRef = useRef<HTMLImageElement>(null);
  const laptopRef = useRef<HTMLImageElement>(null);
  const phoneRef = useRef<HTMLImageElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useLocalization();
  const { isPreloaderVisible } = useAppState();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Mouse parallax - завжди на весь екран
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Нормалізуємо позицію курсора від -1 до 1 відносно центру екрану
      const x = (e.clientX / windowWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / windowHeight - 0.5) * 2; // -1 to 1

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!isPreloaderVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isPreloaderVisible]);

  const bannerStyle: React.CSSProperties = {
    ...style,
    ...(backgroundImage
      ? { backgroundImage: `url(${backgroundImage})` }
      : { backgroundColor }),
  };

  // Parallax intensities for each element
  const parallaxIntensities = {
    backgroundRectangle: { x: 10, y: 10 },
    nameText: { x: 15, y: 15 },
    person: { x: 25, y: 25 },
    coffee: { x: 35, y: 45 },
    laptop: { x: 50, y: 40 },
    phone: { x: 30, y: 40 },
  };

  const getTransform = (element: string) => {
    const intensity =
      parallaxIntensities[element as keyof typeof parallaxIntensities];
    const translateX = mousePosition.x * intensity.x;
    const translateY = mousePosition.y * intensity.y;
    return `translate(${translateX}px, ${translateY}px)`;
  };

  return (
    <div
      ref={bannerRef}
      className={`hero-banner ${className}`.trim()}
      style={bannerStyle}
    >
      <div className="hero-banner-wrapper">
        <div className="hero-banner-rotating-logo-banner">
          <RotatingLogoBanner />
        </div>

        <div ref={containerRef} className="hero-banner-images-container">
          {/* Back Rectangle */}
          <img
            ref={backgroundRectangleRef}
            src="/images/Back_Rectangle_Banner.png"
            alt="Background Rectangle"
            className="hero-banner-background-rectangle"
            style={{
              transform: `translate(-50%, -0%) ${getTransform('backgroundRectangle')}`,
            }}
          />
          {/* Name Text */}
          <div
            ref={nameTextRef}
            className="hero-banner-name-text"
            style={{
              transform: `translate(-0%, -50%) ${getTransform('nameText')}`,
            }}
          >
            SHMAGALA
            <br /> ANDRII
          </div>
          {/* Person - center */}
          <img
            ref={personRef}
            src="/images/my_pers_1.png"
            alt="Personal"
            className="hero-banner-person"
            style={{
              transform: `translate(-50%, -55%) ${getTransform('person')}`,
            }}
          />

          {/* Coffee Cup - top left */}
          <img
            ref={coffeeRef}
            src="/images/3d_icons/ready_3d_coffe_cup.png"
            alt="Coffee Cup"
            className="hero-banner-coffee"
            style={{ transform: getTransform('coffee') }}
          />

          {/* Laptop - bottom left */}
          <img
            ref={laptopRef}
            src="/images/3d_icons/ready_3d_laptop.png"
            alt="Laptop"
            className="hero-banner-laptop"
            style={{ transform: getTransform('laptop') }}
          />

          {/* Phone - right */}
          <img
            ref={phoneRef}
            src="/images/3d_icons/ready_3d_phone.png"
            alt="Phone"
            className="hero-banner-phone"
            style={{ transform: getTransform('phone') }}
          />
        </div>

        <div className="hero-banner-content">
          <motion.div
            variants={buttonAnimationVariants}
            transition={buttonTransition}
            initial="hidden"
            animate={shouldAnimate ? 'visible' : 'hidden'}
          >
            <p className="hero-banner-content-text">
              {t('heroBanner.contactText')}
            </p>
            <Button
              style={{
                marginTop: '20px',
                width: 'fit-content',
                padding: '16px 70px',
              }}
              pulsePeriodTime={10000}
              className="hero-banner__btn"
            >
              {t('welcome.buttonText')}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
