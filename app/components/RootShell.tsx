import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import { analytics, preview, type Locale } from "../site";

// Fonts are declared once here and shared by both root layouts.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

// The italic serif is only used for accent words, so it is not preloaded;
// it swaps in once loaded.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  preload: false,
});

// The <html> and <body> shared by the English and the Polish root layouts.
// Each language has its own root layout, so `lang` is right in the HTML
// itself, before any script runs.
export default function RootShell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        {children}
        {/* Cookieless analytics (Umami Cloud); counts only on the live domain.
            Left out of the test build entirely. */}
        {!preview && (
          <Script
            src={analytics.src}
            data-website-id={analytics.websiteId}
            data-domains={analytics.domains}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
