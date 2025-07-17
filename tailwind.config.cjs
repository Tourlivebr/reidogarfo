/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta de cores que desperta apetite
        'warm-orange': '#FF6B35',     // Laranja quente - estimula apetite
        'golden-yellow': '#F7931E',   // Amarelo dourado - alegria e energia
        'deep-red': '#C1272D',        // Vermelho profundo - paixão pela comida
        'rich-brown': '#8B4513',      // Marrom rico - terra, natural
        'cream': '#FFF8DC',           // Creme - suavidade
        'dark-chocolate': '#3C1810',  // Chocolate escuro - sofisticação
        'fresh-green': '#228B22',     // Verde fresco - ingredientes frescos
        'wine-red': '#722F37',        // Vinho tinto - elegância
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}