/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0A0A',
          card: '#141414',
          border: '#262626',
          gold: '#E5A93C',
          goldLight: '#F3C35C',
          goldDark: '#B87E1F'
        }
      }
    },
  },
  plugins: [],
}