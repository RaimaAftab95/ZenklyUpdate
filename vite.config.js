import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'zenkly-n9',
      project: 'frontend-staging'
    })
  ],

  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@context': '/src/context',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils'
    }
  },

  build: {
    sourcemap: true
  }
});
