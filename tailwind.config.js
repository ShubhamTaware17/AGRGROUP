/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#F4EFEA',  // Warm cream page canvas (exact screenshot background)
          100: '#EAE3D6', // Soft oatmeal card border
          200: '#DDD4C4', // Muted cream border
          300: '#BDB09C',
          400: '#8A7F6E', // Muted warm taupe text
          500: '#5F5647', // Secondary warm body text
          600: '#433D32',
          700: '#2C2821', // Dark text
          800: '#1C261D', // Primary forest-espresso text
          900: '#151F16', // Deepest forest headings
          950: '#121A13', // Deep botanical pine for dark sections
        },
        brand: {
          50: '#F2F6F1',
          100: '#E1EAE0', // Soft sage mist
          200: '#C5D7C3',
          300: '#9FBBA0',
          400: '#7E9F7F', // Dusty sage
          500: '#6F8B6E', // Screenshot sage card container
          600: '#577356',
          700: '#3D553A', // Rich forest green
          800: '#2A3C29',
          900: '#1C2A1D', // Deep pine
          950: '#121A13',
        },
        sage: {
          50: '#F2F6F1',
          100: '#E1EAE0',
          200: '#C5D7C3',
          300: '#9FBBA0',
          400: '#7E9F7F',
          500: '#6F8B6E', // Exact "Популярные напитки" container green
          600: '#577356',
          700: '#3D553A',
          800: '#2A3C29',
          900: '#1C2A1D',
          950: '#121A13',
        },
        gold: {
          // Terracotta / Warm Caramel (exact screenshot button color)
          50: '#FCF5F1',
          100: '#F9E7DE',
          200: '#F3CDBB',
          300: '#EAA88E',
          400: '#DE7F5C',
          500: '#D96A39', // Exact screenshot button orange
          600: '#C75929', // Hover state
          700: '#A2421B',
          800: '#803417',
          900: '#672A14',
        },
        terracotta: {
          50: '#FCF5F1',
          100: '#F9E7DE',
          200: '#F3CDBB',
          300: '#EAA88E',
          400: '#DE7F5C',
          500: '#D96A39', // Exact button color
          600: '#C75929',
          700: '#A2421B',
          800: '#803417',
          900: '#672A14',
        },
        cream: {
          50: '#FAF7F2',
          100: '#F4EFEA', // Primary page canvas
          200: '#EAE3D6', // Card borders / light dividers
          300: '#DFD6C5',
          400: '#CFC2AC',
          500: '#BDB09C',
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
