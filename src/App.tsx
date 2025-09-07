import React from 'react';
import MainScreen from './screens/MainScreen';
import { GlassHeader } from './components/Header/GlassHeader';
import { NavigationProvider } from './components/Header/NavigationContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <div className="App">
          <GlassHeader />
          <Routes>
            <Route path="/" element={<MainScreen />} />
          </Routes>
        </div>
      </NavigationProvider>
    </BrowserRouter>
  );
}

export default App;
