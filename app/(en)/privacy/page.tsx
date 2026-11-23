import type { Metadata } from "next";
import PrivacyPage from "../../components/PrivacyPage";
import { en } from "../../content/en";

export const metadata: Metadata = {
  title: en.meta.privacyTitle,
  description: en.meta.privacyDescription,
  alternates: { canonical: "/privacy/", languages: { en: "/privacy/", pl: "/pl/privacy/" } },
};

export default function Privacy() {
  return <PrivacyPage t={en} />;
}
