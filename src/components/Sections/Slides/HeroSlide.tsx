import React from 'react';

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
      <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  );
};
