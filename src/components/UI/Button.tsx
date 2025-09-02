import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseClasses = 'rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center relative overflow-hidden group';
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg hover:shadow-blue-500/30',
    secondary: 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg hover:shadow-purple-500/30',
    outline: 'bg-transparent border-2 border-blue-500 text-blue-400 hover:border-blue-400 hover:text-blue-300',
    neon: 'neon-button'
  };
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3'
  };
  const widthClass = fullWidth ? 'w-full' : '';
  return <motion.button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={onClick} whileHover={!disabled ? {
    scale: 1.05
  } : undefined} whileTap={!disabled ? {
    scale: 0.95
  } : undefined} type={type} disabled={disabled}>
      {/* Add shine effect for primary and secondary buttons */}
      {(variant === 'primary' || variant === 'secondary') && !disabled && <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>}
      {children}
    </motion.button>;
};
export default Button;