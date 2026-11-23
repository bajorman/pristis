// Site-wide settings shared by both language versions. The page copy lives in
// app/content/en.ts (default, served at /) and app/content/pl.ts (served at /pl/).
export const site = {
  name: "Pristis Management",
  url: "https://www.pristismanagement.com",
  email: "pawel.bajorek@pristismanagement.com",
  linkedin: "https://www.linkedin.com/in/pbajorek/",
};

// The business as registered in CEIDG (Polish business register). "Pristis
// Management" is the trading name; the registered business name is below.
export const company = {
  legalName: "PRISTIS Paweł Bajorek",
};

// Umami Cloud (cookieless analytics, EU data region). `domains` limits tracking
// to the live site, so local previews are not counted.
export const analytics = {
  src: "https://cloud.umami.is/script.js",
  websiteId: "4c5655cf-9db0-4473-ab29-a28b917cbe90",
  domains: "www.pristismanagement.com",
};

export type Locale = "en" | "pl";

// Path to a file in public/, prefixed with the base path when the site is
// served from a sub-path (next/image and CSS do not add it on their own).
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

// Home and privacy paths per language; English is the default at the root.
export const paths = {
  en: { home: "/", privacy: "/privacy/" },
  pl: { home: "/pl/", privacy: "/pl/privacy/" },
} as const;

// Anchor of an entry-point card. Entry ids are shared by both languages, so
// the hero links, the cards and the analytics events stay the same.
export const entryAnchor = (id: string) => `start-${id}`;

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

// Test build (repository variable SITE_PREVIEW=1 in the test repository,
// served at testingpristis.pristismanagement.com): search engines are told
// not to index it, so it never competes with the live site.
export const preview = process.env.SITE_PREVIEW === "1";
