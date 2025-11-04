import React, { useState, useEffect } from 'react';
import MainScreen from './pages/MainScreen';
import { GlassHeader } from './components/Header/GlassHeader';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import {
  NavigationProvider,
  useNavigation,
} from './contexts/NavigationContext';
import { AppStateProvider, useAppState } from './contexts/AppStateContext';
import { LocalizationProvider } from './i18n';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getScreenType, ScreenType } from './constants/screenBreakpoints';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import { Preloader } from './components/Preloader';
import { useScrollLock } from './hooks/useScrollLock';
import AboutMe from './screens/AboutMe';
import ServiceDetail from './screens/ServiceDetail';

const AppContent: React.FC = () => {
  const [screenType, setScreenType] = useState<ScreenType>('large');
  const { isPreloaderVisible } = useAppState();
  const { isBurgerMenuOpen, closeBurgerMenu } = useNavigation();

  useEffect(() => {
    const checkScreenSize = () => {
      setScreenType(getScreenType(window.innerWidth));
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useScrollLock({
    isLocked: isPreloaderVisible,
    enabled: true,
  });

  return (
    <div className="App">
      <GlassHeader />
      <div className="language-switcher-container">
        <LanguageSwitcher />
      </div>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
      </Routes>

      {screenType !== 'large' && (
        <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closeBurgerMenu} />
      )}

      <Preloader isVisible={isPreloaderVisible} />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppStateProvider>
        <LocalizationProvider>
          <NavigationProvider>
            <AppContent />
          </NavigationProvider>
        </LocalizationProvider>
      </AppStateProvider>
    </BrowserRouter>
  );
}

export default App;
