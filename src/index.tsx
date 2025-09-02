import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
// Add framer-motion
import { MotionConfig } from 'framer-motion';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MotionConfig reducedMotion="user">
    <App />
  </MotionConfig>
);