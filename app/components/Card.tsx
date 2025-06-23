'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'light' | 'testimonial';
  className?: string;
}

export function Card({
  children,
  variant = 'default',
  className = '',
}: CardProps) {
  const theme = useTheme();
  
  const baseClasses = 'rounded-lg shadow-sm p-6 border border-gray-200';
  
  const variantClasses = {
    default: 'bg-white',
    light: 'bg-white',
    testimonial: 'bg-white italic text-gray-700',
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <div className={allClasses}>
      {children}
    </div>
  );
} 