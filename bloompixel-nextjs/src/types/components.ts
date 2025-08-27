import { ReactNode } from 'react';

// Layout Components
export interface AppWrapperProps {
  children: ReactNode;
}

export interface MainLayoutProps {
  children: ReactNode;
}

// Preloader Component
export interface PreloaderProps {
  onComplete: () => void;
}

// App State Hook
export interface AppState {
  showPreloader: boolean;
  mounted: boolean;
}

export interface UseAppStateReturn {
  showPreloader: boolean;
  mounted: boolean;
  handlePreloaderComplete: () => void;
}

// Common Props
export interface BaseComponentProps {
  className?: string;
  id?: string;
}

// Section Props
export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
}

// Button Props
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

// Card Props
export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}