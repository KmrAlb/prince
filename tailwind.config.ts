/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'slide-up': 'slideUp 1s ease-out forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: {
          500: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
};

export default config;
