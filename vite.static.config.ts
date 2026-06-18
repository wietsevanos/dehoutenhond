import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Absolute prefix for Lovable CDN-hosted assets so they keep working when
// the static build is hosted on DirectAdmin (or anywhere not on Lovable).
const ASSET_ORIGIN = "https://houten-hond-reimagined.lovable.app";

// Vite plugin: rewrite the `url` field of every *.asset.json import so it
// becomes an absolute URL pointing at the Lovable CDN.
function assetJsonAbsolute() {
  return {
    name: "asset-json-absolute",
    enforce: "pre" as const,
    load(id: string) {
      const clean = id.split("?")[0];
      if (!clean.endsWith(".asset.json")) return null;
      const raw = fs.readFileSync(clean, "utf-8");
      const json = JSON.parse(raw) as { url?: string };
      if (typeof json.url === "string" && json.url.startsWith("/")) {
        json.url = ASSET_ORIGIN + json.url;
      }
      return `export default ${JSON.stringify(json)};`;
    },
  };
}

// Vite plugin: after build, copy .htaccess into dist/.
function copyHtaccess() {
  return {
    name: "copy-htaccess",
    closeBundle() {
      const src = path.resolve(__dirname, "public/.htaccess");
      const dest = path.resolve(__dirname, "dist/.htaccess");
      if (fs.existsSync(src)) fs.copyFileSync(src, dest);
    },
  };
}

export default defineConfig({
  root: path.resolve(__dirname, "spa"),
  publicDir: path.resolve(__dirname, "public"),
  plugins: [assetJsonAbsolute(), tsconfigPaths({ root: __dirname }), react(), tailwindcss(), copyHtaccess()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@tanstack/react-router": path.resolve(__dirname, "src/spa/tanstack-shim.tsx"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: path.resolve(__dirname, "spa/index.html"),
    },
  },
});
