/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        'aam-blue': '#1B365D',
        'aam-blue-dark': '#0F2440',
        'aam-blue-light': '#e8eef9',
        'aam-gold': '#b8860b',
        'aam-gold-dark': '#9a6f09',
        'aam-red': '#ed1c24',
        'surface-soft': '#f1f3f8',
        'surface-mid': '#e4e8f0',
      },
    },
  },
  plugins: [],
};
