/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#53B880',
        surface: '#F7F6F3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '65ch',
        content: '1000px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
