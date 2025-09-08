import React, { useState, useEffect } from 'react';
import MainScreen from './pages/MainScreen';
import { GlassHeader } from './components/Header/GlassHeader';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import {
  NavigationProvider,
  useNavigation,
} from './contexts/NavigationContext';
import { LocalizationProvider } from './i18n';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getScreenType, ScreenType } from './constants/screenBreakpoints';

const AppContent: React.FC = () => {
  const [screenType, setScreenType] = useState<ScreenType>('large');
  const { isBurgerMenuOpen, closeBurgerMenu } = useNavigation();

  useEffect(() => {
    const checkScreenSize = () => {
      setScreenType(getScreenType(window.innerWidth));
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="App">
      <GlassHeader />
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>

      {screenType !== 'large' && (
        <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closeBurgerMenu} />
      )}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider>
        <NavigationProvider>
          <AppContent />
        </NavigationProvider>
      </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;
