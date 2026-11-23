import type { MetadataRoute } from "next";
import { site } from "./site";

// Generated as out/sitemap.xml by the static export. Each page is listed in
// both languages, with hreflang alternates (English is the default).
export const dynamic = "force-static";

const page = (en: string, pl: string, priority: number, changeFrequency: "monthly" | "yearly") =>
  [en, pl].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency,
    priority,
    alternates: { languages: { en: `${site.url}${en}`, pl: `${site.url}${pl}` } },
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...page("/", "/pl/", 1, "monthly"), ...page("/privacy/", "/pl/privacy/", 0.2, "yearly")];
}
