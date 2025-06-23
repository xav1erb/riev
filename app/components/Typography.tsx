import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading1({ children, className = '' }: TextProps) {
  return (
    <h1 className={`font-[Playfair Display] text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-black ${className}`}>
      {children}
    </h1>
  );
}

export function Heading2({ children, className = '' }: TextProps) {
  return (
    <h2 className={`font-[Playfair Display] text-2xl md:text-3xl font-semibold mb-4 tracking-tight text-black ${className}`}>
      {children}
    </h2>
  );
}

export function Heading3({ children, className = '' }: TextProps) {
  return (
    <h3 className={`font-[Playfair Display] text-xl md:text-2xl font-medium mt-8 mb-2 text-black ${className}`}>
      {children}
    </h3>
  );
}

export function Paragraph({ children, className = '' }: TextProps) {
  return (
    <p className={`text-lg leading-relaxed text-black mb-4 ${className}`}>
      {children}
    </p>
  );
}

export function SmallText({ children, className = '' }: TextProps) {
  return (
    <p className={`text-sm text-gray-600 ${className}`}>
      {children}
    </p>
  );
}

export function Quote({ children, className = '' }: TextProps) {
  return (
    <blockquote className={`border-l-4 border-accent pl-4 py-1 italic text-gray-800 my-6 ${className}`}>
      {children}
    </blockquote>
  );
}

export function Highlight({ children, className = '' }: TextProps) {
  return (
    <span className={`text-accent font-medium ${className}`}>
      {children}
    </span>
  );
} 