'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  href,
}: ButtonProps) {
  const theme = useTheme();
  
  const baseClasses = 'rounded-lg font-medium transition-all duration-300 inline-block text-center';
  
  const variantClasses = {
    primary: 'bg-[#F4B0B0] text-white hover:bg-[#E39D9D]',
    outline: 'bg-transparent border border-accent text-accent hover:bg-accent hover:text-white',
  };
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={allClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
} 