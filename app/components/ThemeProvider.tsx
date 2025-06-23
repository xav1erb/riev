'use client';

import { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  colors: {
    beige: string;
    accent: string;
    deepGray: string;
    mediumGray: string;
    subtleGray: string;
    lightPink: string;
    borderGray: string;
  };
  layout: {
    maxWidth: string;
    contentPadding: string;
    cardPadding: string;
    sectionSpacing: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    baseFontSize: string;
    lineHeight: string;
    letterSpacing: string;
  };
}

const defaultTheme = {
  colors: {
    beige: '#FFFFFF',
    accent: '#6B4B4B',
    deepGray: '#000000',
    mediumGray: '#292929',
    subtleGray: '#555555',
    lightPink: '#FFFFFF',
    borderGray: '#EDEDED',
  },
  layout: {
    maxWidth: '56rem',
    contentPadding: '1.5rem',
    cardPadding: '1.5rem',
    sectionSpacing: '3rem',
  },
  typography: {
    headingFont: 'Playfair Display, serif',
    bodyFont: 'Inter, Open Sans, sans-serif',
    baseFontSize: '18px',
    lineHeight: '1.7',
    letterSpacing: '-0.025em',
  },
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
} 