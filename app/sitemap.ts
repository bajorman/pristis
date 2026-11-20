import type { MetadataRoute } from "next";
import { site } from "./site";

// Generated as out/sitemap.xml by the static export. One page for now; add
// service subpages here when they exist.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/privacy/`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
