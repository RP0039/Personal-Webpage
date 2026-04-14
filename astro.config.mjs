// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@layout': path.resolve('./src/layout'),
        '@pages': path.resolve('./src/pages'),
        '@assets': path.resolve('./src/assets')
      }
    }
  }
});