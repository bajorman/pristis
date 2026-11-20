import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
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
    default: `${site.name} — consulting & mentoring for technology leaders`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  icons: { icon: asset("/images/icon.svg") },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: `${site.name} — build engineering organisations that scale`,
    description: site.description,
    images: asset("/images/og.jpg"),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}>
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
