import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to `out/`,
  // which can be hosted anywhere (GitHub Pages, Firebase Hosting, ...).
  output: "export",
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
