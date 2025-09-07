import React from 'react';
import { LiquidButton } from '../../LiquidButton/LiquidButton';

export const HeroSlide: React.FC = () => {
  return (
    <div className="text-center" style={{ position: 'relative' }}>
      <img
        src={
          'https://i0.wp.com/picjumbo.com/wp-content/uploads/crazy-iridescent-smoke-abstract-background-free-image.jpeg?w=600&quality=80'
        }
        alt="logo"
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      />
      <h1 className="text-6xl font-bold text-gray-800 mb-6">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Professional developer with passion for creating amazing digital
        experiences
      </p>
      <div style={{}} id="liquid-button-container">
        <LiquidButton onClick={() => alert('Get Started clicked!')}>
          Get Started
        </LiquidButton>
      </div>
    </div>
  );
};
