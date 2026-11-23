import type { Metadata } from "next";
import HomePage from "../components/HomePage";
import { pl } from "../content/pl";
import { asset } from "../site";

export const metadata: Metadata = {
  title: { absolute: pl.meta.title },
  description: pl.meta.description,
  alternates: { canonical: "/pl/", languages: { en: "/", pl: "/pl/", "x-default": "/" } },
  openGraph: {
    type: "website",
    locale: pl.meta.ogLocale,
    siteName: "Pristis Management",
    title: pl.meta.ogTitle,
    description: pl.meta.description,
    images: asset("/images/og.jpg"),
  },
};

export default function HomePl() {
  return <HomePage t={pl} />;
}
