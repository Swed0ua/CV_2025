import React, { useState, useRef, useEffect } from 'react';
import { useLocalization } from '../../contexts/LocalizationContext';
import { GlassContainer } from '../GlassContainer/GlassContainer';
import { GlassContainerStyles } from '../GlassContainer/GlassContainer.styles';
import { SupportedLanguage } from '../../i18n/types/LocalizationTypes';
import './LanguageSwitcher.css';

const LANGUAGE_OPTIONS: Record<
  SupportedLanguage,
  { name: string; flag: string }
> = {
  en: { name: 'ENGLISH', flag: '🇬🇧' },
  uk: { name: 'УКРАЇНСЬКА', flag: '🇺🇦' },
} as const;

interface LanguageSwitcherProps {
  className?: string;
  style?: React.CSSProperties;
  glassStyles?: {
    trigger?: GlassContainerStyles;
    dropdown?: GlassContainerStyles;
  };
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = '',
  style = {},
  glassStyles = {},
}) => {
  const { currentLanguage, setLanguage } = useLocalization();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGE_OPTIONS[currentLanguage];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language: SupportedLanguage) => {
    setLanguage(language);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`language-switcher ${className}`}
      style={style}
    >
      <GlassContainer
        className="language-switcher__trigger"
        glassStyles={{
          padding: '0',
          ...glassStyles.trigger,
        }}
      >
        <button
          className="language-switcher__button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          style={{
            padding: '14px 20px',
          }}
        >
          <span className="language-switcher__flag">{currentOption.flag}</span>
          <span className="language-switcher__arrow">{isOpen ? '▲' : '▼'}</span>
        </button>
      </GlassContainer>

      {isOpen && (
        <GlassContainer
          className="language-switcher__dropdown"
          glassStyles={{
            padding: '0',
            ...glassStyles.dropdown,
          }}
        >
          {Object.entries(LANGUAGE_OPTIONS).map(([code, option]) => (
            <div
              key={code}
              className={`language-switcher__option ${
                code === currentLanguage
                  ? 'language-switcher__option--active'
                  : ''
              }`}
            >
              <button
                className="language-switcher__option-button"
                onClick={() => handleLanguageChange(code as SupportedLanguage)}
                role="option"
                aria-selected={code === currentLanguage}
              >
                <span className="language-switcher__option-flag">
                  {option.flag}
                </span>
                <span className="language-switcher__option-name">
                  {option.name}
                </span>
                {code === currentLanguage && (
                  <span className="language-switcher__checkmark">✓</span>
                )}
              </button>
            </div>
          ))}
        </GlassContainer>
      )}
    </div>
  );
};

export default LanguageSwitcher;
