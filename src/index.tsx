import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { App } from './App';
// Add framer-motion
import { MotionConfig } from 'framer-motion';
render(<MotionConfig reducedMotion="user">
    <App />
  </MotionConfig>, document.getElementById('root'));