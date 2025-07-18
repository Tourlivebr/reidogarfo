// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://reidogarfo.com.br',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  integrations: [tailwind()],
  vite: {
    build: {
      cssMinify: true,
      minify: true,
    },
  },
});