import type { MetadataRoute } from "next";
import { site } from "./site";

// Generated as out/robots.txt by the static export.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
