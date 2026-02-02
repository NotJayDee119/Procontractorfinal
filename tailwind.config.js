/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333333',
        secondary: '#f6f1ef',
        accent: '#5b5b5b',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        'wix-madefor': ['Wix Madefor Display', 'serif'],
        'times': ['Times New Roman', 'serif'],
        'fraunces': ['Fraunces'],
        'custom': ['CustomFont', 'sans-serif'],
      },
      // WordPress-style container widths
      maxWidth: {
        'wp-sm': '640px',   // Small devices
        'wp-md': '768px',   // Medium devices (tablets)
        'wp-lg': '1024px',  // Large devices (small laptops)
        'wp-xl': '1200px',  // Extra large devices (desktops) - WordPress default
        'wp-2xl': '1440px', // Ultra wide (modern WordPress themes)
        'wp-content': '680px', // WordPress content width (for text-heavy sections)
        'wp-wide': '1200px',   // WordPress wide alignment
      },
      // WordPress-style breakpoints (already default in Tailwind, but documented here)
      screens: {
        'sm': '640px',   // Mobile landscape
        'md': '768px',   // Tablet
        'lg': '1024px',  // Desktop
        'xl': '1280px',  // Large desktop
        '2xl': '1536px', // Extra large
      },
      spacing: {
        'wp-gutter': '1.5rem', // WordPress default gutter
      },
      // Smooth transition timing functions
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'smooth-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'smooth-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'lenis': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      // Extended transition durations
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      // Animation keyframes for smoother effects
      keyframes: {
        'fade-in-smooth': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up-smooth': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-smooth': 'fade-in-smooth 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
        'slide-up-smooth': 'slide-up-smooth 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
};
