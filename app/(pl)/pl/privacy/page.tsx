import type { Metadata } from "next";
import PrivacyPage from "../../../components/PrivacyPage";
import { pl } from "../../../content/pl";

export const metadata: Metadata = {
  title: pl.meta.privacyTitle,
  description: pl.meta.privacyDescription,
  alternates: { canonical: "/pl/privacy/", languages: { en: "/privacy/", pl: "/pl/privacy/" } },
};

export default function PrivacyPl() {
  return <PrivacyPage t={pl} />;
}
