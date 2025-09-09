import React from 'react';
import { useLocalization } from '../contexts/LocalizationContext';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, setLanguage } = useLocalization();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as 'uk' | 'en';
    setLanguage(newLanguage);
  };

  return (
    <select value={currentLanguage} onChange={handleChange}>
      <option value="uk">🇺🇦 Українська</option>
      <option value="en">🇬🇧 English</option>
    </select>
  );
};

export default LanguageSwitcher;
