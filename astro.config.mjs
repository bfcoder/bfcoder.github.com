// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bfcoder.com',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
  },
});
