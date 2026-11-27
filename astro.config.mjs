// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bfcoder.com',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
