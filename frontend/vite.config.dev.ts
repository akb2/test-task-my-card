import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: true,
    port: Number(process.env.FRONTEND_INTERNAL_PORT),
  },
});
