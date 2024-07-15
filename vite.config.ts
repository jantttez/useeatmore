import { defineConfig } from 'vite';
//import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: 'useeatmore',
      fileName: () => 'index.js',
    },
    outDir: 'dist',
  },
});
