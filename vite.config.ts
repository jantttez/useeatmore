import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
<<<<<<< HEAD
import path from 'node:path';
=======
>>>>>>> 0c217cc (update: package.json, etc.)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
    },
  },
=======
>>>>>>> 0c217cc (update: package.json, etc.)
});
