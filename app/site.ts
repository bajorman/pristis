// Site-wide settings and all page copy, kept in one place so the text can be
// edited without touching the layout.
export const site = {
  name: "Pristis Management",
  url: "https://www.pristismanagement.com",
  email: "pawel.bajorek@pristismanagement.com",
  linkedin: "https://www.linkedin.com/in/pbajorek/",
};

// Path to a file in public/, prefixed with the base path when the site is
// served from a sub-path (next/image and CSS do not add it on their own).
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

// One-page layout: each menu entry jumps to a section on the home page.
export const nav = [
  { href: "#for-whom", label: "Who we help" },
  { href: "#services", label: "Services" },
  { href: "#how", label: "How we work" },
  { href: "#about", label: "About" },
];

export const hero = {
  eyebrow: "Consulting & mentoring for technology leaders",
  title: "Build engineering organizations that scale.",
  lead: "We help CTOs, VPs of Engineering, startups and investors make better technical decisions – from the first MVP to a mature, cloud-native organization.",
};

export const audiences = [
  {
    title: "CTOs & VPs of Engineering",
    text: "A sparring partner for the decisions you can't delegate: team structure, architecture, delivery and growing your leaders.",
  },
  {
    title: "Startups",
    text: "Technical leadership from idea to MVP to scale-up, without hiring a full-time CTO before you need one.",
  },
  {
    title: "Investors & VC funds",
    text: "An independent view of a company's technology, team and risks before you invest.",
  },
];

export const services = [
  {
    icon: "search",
    title: "Technical due diligence",
    text: "Independent assessment of technology, architecture and team for VC funds and investors.",
  },
  {
    icon: "compass",
    title: "Mentoring for technology leaders",
    text: "One-on-one mentoring for CTOs and VPs of Engineering – practical guidance on daily challenges.",
  },
  {
    icon: "users",
    title: "Engineering team workshops",
    text: "Hands-on workshops that improve how your teams plan, build and deliver.",
  },
  {
    icon: "layers",
    title: "Technical & architectural audits",
    text: "A clear picture of your systems: what works, what blocks growth and what to fix first.",
  },
  {
    icon: "briefcase",
    title: "Interim / fractional CTO",
    text: "Experienced technical leadership for a defined period or a few days a month.",
  },
  {
    icon: "rocket",
    title: "Startup scale-up support",
    text: "From MVP to production: architecture, processes and the team you need to grow.",
  },
] as const;

export const steps = [
  {
    title: "Intro call",
    text: "A short conversation about where you are and what you need.",
  },
  {
    title: "Diagnosis",
    text: "We look at your technology, team and processes and agree on priorities.",
  },
  {
    title: "Working together",
    text: "Mentoring, an audit, workshops or interim leadership – in the format that fits.",
  },
];

export const about = {
  name: "Paweł Bajorek",
  role: "Founder",
  text: [
    "PristisManagement was founded by Paweł Bajorek, a seasoned technology leader with over 20 years of experience.",
    "He has led agile transformation initiatives, forged cloud strategies for different types of organizations and helped companies through their digital and cloud transformation.",
  ],
};
