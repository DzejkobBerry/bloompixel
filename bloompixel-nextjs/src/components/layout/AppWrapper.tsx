'use client';

import { ReactNode } from 'react';
import { useAppState } from '@/hooks/useAppState';
import Preloader from './Preloader';
import ParticlesBackground from './ParticlesBackground';

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  const { showPreloader, mounted, handlePreloaderComplete } = useAppState();

  if (!mounted) {
    return null;
  }

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      <ParticlesBackground />
      {children}
    </>
  );
};

export default AppWrapper;