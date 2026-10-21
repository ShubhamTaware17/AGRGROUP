/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f7fa',
          100: '#e9edf3',
          200: '#cdd6e4',
          300: '#a3b2c9',
          400: '#6f86a8',
          500: '#4a6385',
          600: '#364a6b',
          700: '#283957',
          800: '#1c2a42',
          900: '#121d30',
          950: '#0a1322',
        },
        brand: {
          50: '#f0f7ff',
          100: '#dcecff',
          200: '#bcd7ff',
          300: '#8abaff',
          400: '#4f92ff',
          500: '#2470f0',
          600: '#1654d8',
          700: '#1342ae',
          800: '#14388a',
          900: '#16316f',
          950: '#0d1d47',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f5ecd2',
          200: '#ead6a0',
          300: '#ddbd69',
          400: '#d3a541',
          500: '#c08d2e',
          600: '#a66f24',
          700: '#85531f',
          800: '#6e4220',
          900: '#5d371f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tightish: '-0.015em',
        tighter2: '-0.03em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.12)',
        card: '0 1px 3px rgba(15,23,42,0.05), 0 20px 40px -24px rgba(15,23,42,0.18)',
        lift: '0 24px 60px -28px rgba(15,23,42,0.35)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.15)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'ken-burns': 'ken-burns 7s ease-out both',
      },
    },
  },
  plugins: [],
};
