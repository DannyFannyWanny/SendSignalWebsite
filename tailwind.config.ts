import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Extend with our custom spacing scale
      spacing: {
        'xs': '0.5rem',      // 8px
        'sm': '0.75rem',     // 12px
        'md': '1rem',        // 16px
        'lg': '1.5rem',      // 24px
        'xl': '2rem',        // 32px
        '2xl': '3rem',       // 48px
        '3xl': '4rem',       // 64px
        '4xl': '5rem',       // 80px
        '5xl': '6rem',       // 96px
        '6xl': '8rem',       // 128px
        '7xl': '10rem',      // 160px
        '8xl': '12rem',      // 192px
        '9xl': '16rem',      // 256px
        'section': '5rem',   // 80px
        'section-sm': '3rem', // 48px
        'section-lg': '7rem', // 112px
        'container': '1.5rem', // 24px
        'container-lg': '2.5rem', // 40px
        'card': '1.5rem',    // 24px
        'button': '0.75rem 1.5rem', // Button padding
        'input': '0.75rem 1rem',    // Input padding
      },
      
      // Extend with our custom border radius scale
      borderRadius: {
        'sm': '0.25rem',     // 4px
        'md': '0.375rem',    // 6px
        'lg': '0.5rem',      // 8px
        'xl': '0.75rem',     // 12px
        '2xl': '1rem',       // 16px - Cards
        '3xl': '1.5rem',     // 24px - Large cards
      },
      
      // Extend with our custom shadow system
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05), 0 1px 3px 1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.03), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.04), 0 2px 4px -2px rgb(0 0 0 / 0.08)',
        'button': '0 1px 2px 0 rgb(0 0 0 / 0.04), 0 1px 3px 1px rgb(0 0 0 / 0.08)',
        'button-hover': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'glow': '0 0 20px rgb(14 165 233 / 0.15)',
        'glow-gold': '0 0 20px rgb(203 163 92 / 0.15)',
      },
      
      // Extend with our custom typography scale
      fontSize: {
        'display-3xl': ['3.5rem', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.02em' }],
        'display-2xl': ['2.75rem', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.02em' }],
        'display-xl': ['2.25rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        'heading-2xl': ['1.75rem', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.01em' }],
        'heading-xl': ['1.5rem', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.01em' }],
        'subhead': ['1.25rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400', letterSpacing: '0' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400', letterSpacing: '0' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '0.01em' }],
      },
      
      // Extend with our custom transition durations
      transitionDuration: {
        'micro': '150ms',
        'fast': '200ms',
        'medium': '300ms',
        'slow': '400ms',
        'reveal': '500ms',
        'page': '600ms',
      },
      
      // Extend with our custom transition timing functions
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring-fast': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring-slow': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-fast': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-slow': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-fast': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-slow': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      // Container configuration
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2.5rem',
        },
        screens: {
          '2xl': '80rem', // max-w-7xl
        },
      },
    },
  },
  plugins: [],
};

export default config;
