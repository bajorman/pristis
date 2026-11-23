import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import { en } from "./content/en";
import { analytics, asset, site } from "./site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: en.meta.title,
    template: `%s — ${site.name}`,
  },
  description: en.meta.description,
  alternates: { canonical: "/", languages: { en: "/", pl: "/pl/", "x-default": "/" } },
  icons: { icon: asset("/images/icon.svg") },
  openGraph: {
    type: "website",
    locale: en.meta.ogLocale,
    siteName: site.name,
    title: en.meta.ogTitle,
    description: en.meta.description,
    images: asset("/images/og.jpg"),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: app/pl/layout.tsx switches `lang` to "pl"
    // before hydration; React would otherwise report the attribute mismatch.
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        {children}
        {/* Cookieless analytics (Umami Cloud); counts only on the live domain. */}
        <Script
          src={analytics.src}
          data-website-id={analytics.websiteId}
          data-domains={analytics.domains}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
