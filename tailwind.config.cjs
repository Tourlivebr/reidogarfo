/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'oil-gold': '#B7935F',  // Cor dourada (óleo)
      },
    },
  },
  plugins: [],
}