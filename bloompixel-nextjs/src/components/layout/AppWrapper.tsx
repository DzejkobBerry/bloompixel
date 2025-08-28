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

  return (
    <div suppressHydrationWarning>
      {mounted && (
        <>
          {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
          <ParticlesBackground />
          {children}
        </>
      )}
      {!mounted && (
        <div style={{ visibility: 'hidden' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default AppWrapper;