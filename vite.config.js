import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    assetsInlineLimit: 0,
    sourcemap: false,
    minify: false,
    modulePreload: {
      polyfill: false,
    },
  },
});
