'use client';

import { useState, useEffect } from 'react';

export interface AppState {
  showPreloader: boolean;
  mounted: boolean;
}

export const useAppState = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return {
    showPreloader,
    mounted,
    handlePreloaderComplete,
  };
};