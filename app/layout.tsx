import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { asset, site } from "./site";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `${site.name} - %s`,
  },
  description:
    "PristisManagement is a consulting and mentoring company for technology leaders.",
  icons: { icon: asset("/images/logo-128.png") },
  openGraph: { images: asset("/images/logo-512.png") },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
