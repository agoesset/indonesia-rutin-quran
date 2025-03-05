/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFCC00',
        dark: '#000000',
        light: '#FDFDFD'
      },
      container: {
        center: true,
        padding: '1rem'
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif']
      }
    }
  },
  plugins: []
}
