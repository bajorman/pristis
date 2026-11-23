import type { MetadataRoute } from "next";
import { preview, site } from "./site";

// Generated as out/robots.txt by the static export. The test build lets
// crawlers in (so they can read the noindex tag on every page) but
// advertises no sitemap.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (preview) return { rules: { userAgent: "*", allow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
