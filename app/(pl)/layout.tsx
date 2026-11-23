import type { Metadata } from "next";
import RootShell from "../components/RootShell";
import { pl } from "../content/pl";
import { asset, preview, site } from "../site";
import "../globals.css";

// Root layout of the Polish pages (/pl/ and /pl/privacy/), rendered with
// lang="pl" straight in the HTML.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: pl.meta.title,
    template: `%s — ${site.name}`,
  },
  description: pl.meta.description,
  icons: { icon: asset("/images/icon.svg") },
  ...(preview && { robots: { index: false, follow: false } }),
  openGraph: {
    type: "website",
    locale: pl.meta.ogLocale,
    siteName: site.name,
    title: pl.meta.ogTitle,
    description: pl.meta.description,
    images: asset("/images/og.jpg"),
  },
};

export default function PolishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="pl">{children}</RootShell>;
}
