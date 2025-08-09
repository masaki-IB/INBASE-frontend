/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  corePlugins: {
    // Enable the new CSS nesting feature
    // This replaces the need for separate nesting plugins
    // and is built into Tailwind CSS v3.3.0+
    // https://tailwindcss.com/blog/tailwindcss-v3-3#nesting
    // If you're using an older version, you'll need to use the separate plugin
    // and add it to your PostCSS config
    //
    // If you still see nesting issues, try uncommenting the following:
    // preflight: false,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#333333',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#FF0066',
          light: '#FF4D94',
          dark: '#CC0052',
        },
        text: {
          DEFAULT: '#222222',
          light: '#444444',
          dark: '#111111',
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
