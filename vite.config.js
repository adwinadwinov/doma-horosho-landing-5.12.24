import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    assetsInlineLimit: 0,
    manualChunks: undefined,
    sourcemap: false,
    minify: false,
    modulePreload: {
      polyfill: false,
    },
    outDir: "docs",
  },
  plugins: [
    {
      name: "crossorigin",
      transformIndexHtml(html) {
        return html.replace(/crossorigin/g, "");
      },
    },
  ],
});
