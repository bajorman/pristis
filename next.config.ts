import type { NextConfig } from "next";

// Set only when the site is served from a sub-path, e.g. "/pristis" on
// https://bajorman.github.io/pristis/ before the custom domain points there.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to `out/`,
  // which can be hosted anywhere (GitHub Pages, Firebase Hosting, ...).
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    // This project sits inside C:\HAI, which has its own package-lock.json;
    // pin the root so Turbopack does not pick up the parent project.
    root: import.meta.dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
