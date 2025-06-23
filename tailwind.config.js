/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#FFFFFF',
        'accent': '#6B4B4B',
        'deep-gray': '#000000',
        'medium-gray': '#292929',
        'subtle-gray': '#555555',
        'light-pink': '#FFFFFF',
        'border-gray': '#EDEDED',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'Open Sans', 'sans-serif'],
      },
      fontSize: {
        base: '18px',
      },
      borderRadius: {
        'lg': '0.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      maxWidth: {
        '4xl': '56rem',
      },
      padding: {
        '6': '1.5rem',
        '12': '3rem',
        '16': '4rem',
      },
      lineHeight: {
        'relaxed': '1.7',
      },
      letterSpacing: {
        'tight': '-0.025em',
      },
      spacing: {
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '12': '3rem',
      },
    },
  },
  plugins: [],
}; 