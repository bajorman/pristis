import type { Metadata } from "next";
import HomePage from "../../components/HomePage";
import { pl } from "../../content/pl";

export const metadata: Metadata = {
  alternates: { canonical: "/pl/", languages: { en: "/", pl: "/pl/", "x-default": "/" } },
};

export default function HomePl() {
  return <HomePage t={pl} />;
}
