import type { Metadata } from "next";
import RootShell from "../components/RootShell";
import { en } from "../content/en";
import { asset, preview, site } from "../site";
import "../globals.css";

// Root layout of the English pages (/ and /privacy/). The Polish pages have
// their own root layout in app/(pl), so each language gets the right `lang`.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: en.meta.title,
    template: `%s — ${site.name}`,
  },
  description: en.meta.description,
  alternates: { canonical: "/", languages: { en: "/", pl: "/pl/", "x-default": "/" } },
  icons: { icon: asset("/images/icon.svg") },
  // The test build must never be indexed (see `preview` in site.ts).
  ...(preview && { robots: { index: false, follow: false } }),
  openGraph: {
    type: "website",
    locale: en.meta.ogLocale,
    siteName: site.name,
    title: en.meta.ogTitle,
    description: en.meta.description,
    images: asset("/images/og.jpg"),
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
