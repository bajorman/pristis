// Site-wide settings and navigation, in the order the Google Sites menu used.
export const site = {
  name: "PristisManagement",
  url: "https://www.pristismanagement.com",
  email: "pawel.bajorek@gmail.com",
  linkedin: "https://www.linkedin.com/in/pbajorek/",
};

// Path to a file in public/, prefixed with the base path when the site is
// served from a sub-path (next/image and CSS do not add it on their own).
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const nav = [
  { href: "/", label: "Strona główna" },
  { href: "/contact/", label: "Contact" },
  { href: "/for-startups/", label: "For Startups" },
  { href: "/mentoring/", label: "Mentoring" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
];
