// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    // Optimisations de build
    inlineStylesheets: 'auto',
    assets: '_assets',
    format: 'directory'
  },
  vite: {
    build: {
      // Optimisations Vite
      cssMinify: true,
      minify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
            'styles': ['/styles/global.css']
          }
        }
      }
    }
  },
  compressHTML: true,
  image: {
    // Configuration des images
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
});
