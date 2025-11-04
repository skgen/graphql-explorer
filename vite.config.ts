import process from 'node:process';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [
      react(),
    ],
    server: {
      port: 3000,
    },
    preview: {
      allowedHosts: process.env.VITE_HOST ? [process.env.VITE_HOST] : undefined,
    },
  };
});
