import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
  getActiveItemId: () => string;
  // Burger menu state
  isBurgerMenuOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  openBurgerMenu: () => void;
  // eslint-disable-next-line no-unused-vars
  closeBurgerMenu: () => void;
  // eslint-disable-next-line no-unused-vars
  toggleBurgerMenu: () => void;
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
  const [activeSection, setActiveSection] = useState('');
  const [hasActiveSection, setHasActiveSection] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationConfigs = useMemo(
    () => ({
      '/': [
        { id: 'aboutMe', label: 'Про мене', type: 'section' as const },
        { id: 'skills', label: 'Навички', type: 'section' as const },
        { id: 'works', label: 'Роботи', type: 'section' as const },
        {
          id: 'Main',
          label: 'Головна',
          type: 'page' as const,
          path: '/',
        },
        {
          id: 'experience',
          label: 'Досвід',
          type: 'page' as const,
          path: '/experience',
        },
        {
          id: 'contact',
          label: 'Контакти',
          type: 'page' as const,
          path: '/contact',
        },
      ],
      '/experience': [
        { id: 'home', label: 'Головна', type: 'page' as const, path: '/' },
        { id: 'timeline', label: 'Хронологія', type: 'section' as const },
        { id: 'projects', label: 'Проекти', type: 'section' as const },
        { id: 'skills', label: 'Навички', type: 'section' as const },
        {
          id: 'contact',
          label: 'Контакти',
          type: 'page' as const,
          path: '/contact',
        },
      ],
      '/contact': [
        { id: 'home', label: 'Головна', type: 'page' as const, path: '/' },
        {
          id: 'experience',
          label: 'Досвід',
          type: 'page' as const,
          path: '/experience',
        },
        { id: 'form', label: 'Форма', type: 'section' as const },
        { id: 'social', label: 'Соцмережі', type: 'section' as const },
      ],
    }),
    [],
  );

  const navigationItems = useMemo((): NavigationItem[] => {
    return (
      navigationConfigs[location.pathname as keyof typeof navigationConfigs] ||
      navigationConfigs['/']
    );
  }, [location.pathname, navigationConfigs]);

  const getActiveItemId = (): string => {
    if (hasActiveSection && activeSection) {
      return activeSection;
    }

    const currentPageItem = navigationItems.find(
      (item) => item.type === 'page' && item.path === location.pathname,
    );

    if (currentPageItem) {
      return currentPageItem.id;
    }

    const firstSection = navigationItems.find(
      (item) => item.type === 'section',
    );
    return firstSection?.id || navigationItems[0]?.id || '';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId);
      setHasActiveSection(true);
    }
  };

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  // Burger menu functions
  const openBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

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
              setHasActiveSection(true);
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

  // Reset state when page changes
  useEffect(() => {
    setHasActiveSection(false);
    setActiveSection('');
    setIsBurgerMenuOpen(false);
  }, [location.pathname]);

  const value: NavigationContextType = {
    activeSection,
    setActiveSection,
    scrollToSection,
    navigateToPage,
    navigationItems,
    getActiveItemId,
    isBurgerMenuOpen,
    openBurgerMenu,
    closeBurgerMenu,
    toggleBurgerMenu,
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
