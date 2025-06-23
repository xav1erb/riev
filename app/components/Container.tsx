import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  centered?: boolean;
}

export function Container({
  children,
  className = '',
  fullWidth = false,
  centered = false,
}: ContainerProps) {
  const baseClasses = fullWidth ? '' : `max-w-4xl ${centered ? 'mx-auto' : ''} px-6`;
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
} 