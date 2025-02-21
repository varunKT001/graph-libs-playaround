import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // Import aliases
  resolve: {
    alias: [{ find: '@app', replacement: '/src' }],
  },
  plugins: [react()],
});
