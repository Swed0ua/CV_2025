import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationItem {
  id: string;
  label: string;
  type: 'section' | 'page';
  path?: string;
}

interface NavigationContextType {
  activeSection: string;
  // eslint-disable-next-line no-unused-vars
  setActiveSection: (sectionId: string) => void;
  // eslint-disable-next-line no-unused-vars
  scrollToSection: (sectionId: string) => void;
  // eslint-disable-next-line no-unused-vars
  navigateToPage: (path: string) => void;
  navigationItems: NavigationItem[];
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState('about');
  const navigate = useNavigate();

  const navigationItems = useMemo(
    (): NavigationItem[] => [
      { id: 'about', label: 'Про мене', type: 'section' },
      { id: 'skills', label: 'Навички', type: 'section' },
      { id: 'works', label: 'Роботи', type: 'section' },
      { id: 'experience', label: 'Досвід', type: 'page', path: '/experience' },
      { id: 'contact', label: 'Контакти', type: 'page', path: '/contact' },
    ],
    [],
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId);
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  // Automatically determine the active section when scrolling
  useEffect(() => {
    const sections = navigationItems
      .filter((item) => item.type === 'section')
      .map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sections.includes(sectionId)) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px',
      },
    );

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navigationItems]);

  const value: NavigationContextType = {
    activeSection,
    setActiveSection,
    scrollToSection,
    navigateToPage,
    navigationItems,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
