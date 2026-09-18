import { SCREEN_SIZES } from "@settings/screen-sizes";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const scssBreakpoints = Object.entries(SCREEN_SIZES)
  .map(([name, value]) => `"${name}": ${value}`)
  .join(", ");

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: true,
    port: Number(process.env.FRONTEND_INTERNAL_PORT),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@styles/screens" with ( $breakpoints: (${scssBreakpoints}));
        `,
      },
    },
  },
});
