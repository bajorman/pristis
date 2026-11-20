// Site-wide settings and all page copy, kept in one place so the text can be
// edited without touching the layout. Copy is in English.
export const site = {
  name: "Pristis Management",
  url: "https://www.pristismanagement.com",
  email: "pawel.bajorek@pristismanagement.com",
  linkedin: "https://www.linkedin.com/in/pbajorek/",
  description:
    "Project management and Scaled Agile (SAFe) implementation, with the methodology tailored to your organisation. Also AI adoption, R&D tax relief in Poland, interim CTO and technical due diligence.",
};

// Path to a file in public/, prefixed with the base path when the site is
// served from a sub-path (next/image and CSS do not add it on their own).
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

// One-page layout: each menu entry jumps to a section on the home page.
export const nav = [
  { href: "#services", label: "Services" },
  { href: "#ai-rd", label: "AI - R&D" },
  { href: "#results", label: "Results" },
  { href: "#how-i-work", label: "How I work" },
  { href: "#about", label: "About" },
];

export const hero = {
  eyebrow: "Project management · Scaled Agile · AI",
  // The words in `accent` are set in italic accent colour after `title`.
  title: "Projects and teams that deliver",
  accent: "results.",
  lead: "I set up project management that fits your organisation — PRINCE2, PMI, agile or a mix of them — and roll out Scaled Agile that actually works. I also help put AI into production. 20+ years of experience at HSBC, UBS, Sabre and Hitachi Energy.",
  primary: "Book a 30-minute call",
  secondary: "See services",
};

export const facts = [
  { value: "20+", label: "years in IT and technology leadership" },
  { value: "300+", label: "engineers in the teams I have led" },
  { value: "$100M+", label: "IT budgets managed" },
  { value: "10", label: "cloud transformations (GCP, AWS)" },
];

export const companies = ["HSBC", "UBS", "Sabre", "Hitachi Energy", "Comarch", "InPost"];

export const problems = {
  kicker: "Why clients get in touch",
  title: "Questions I hear most often",
  items: [
    {
      q: "“Every project is run differently. Which methodology should we choose?”",
      a: "The one that fits your company, not the one that is fashionable. Often it is a tailored mix of PRINCE2, PMI and agile practices.",
    },
    {
      q: "“Our teams are agile, but large initiatives still slip. What's missing?”",
      a: "Agile works within a team, but nobody coordinates across teams. Scaled Agile closes that gap — if it is rolled out with care.",
    },
    {
      q: "“We ran an AI pilot. Why has nothing come of it?”",
      a: "The demo works, production doesn't. There is no data, no process owner, or no metric that shows the board the result.",
    },
    {
      q: "“We build our own software. Are we eligible for R&D relief?”",
      a: "Often yes — but the company doesn't claim it, because nobody has described the work as R&D. In Poland, it can be recovered for up to 5 years back.",
    },
  ],
};

export type Flagship = {
  title: string;
  tagline: string;
  text: string;
  points: string[];
  format: string;
  icon: string;
};

// The two main services, shown first and largest in the services section.
export const flagship = {
  kicker: "Flagship services",
  title: "Proven methods,",
  accent: "pragmatically applied",
  items: [
    {
      title: "Project management and methodology implementation",
      tagline: "The method fits your organisation — not the other way round.",
      text: "I set up project management that matches how your company really works: PRINCE2, PMI or agile, or a tailored combination of them. I hold certifications in all three and I am not a zealot of any — I choose what works for you, then make it stick.",
      points: [
        "Assessment of how projects are delivered today",
        "Choosing and tailoring the methodology (PRINCE2, PMI, Scrum, Kanban, hybrid)",
        "PMO set-up, portfolio governance and reporting",
        "Training and coaching for project managers and sponsors",
        "Interim leadership of key programmes and projects",
      ],
      format: "diagnosis 2–3 weeks · roll-out in stages",
      icon: "layers",
    },
    {
      title: "Scaled Agile (SAFe®) implementation",
      tagline: "Agile beyond a single team — already done in several organisations.",
      text: "When many teams work on one product, team-level agile is no longer enough. I lead Scaled Agile transformations end to end and adapt the framework to your organisation instead of copying it from the manual.",
      points: [
        "Readiness assessment and implementation roadmap",
        "Value streams and Agile Release Train design",
        "Preparing and facilitating the first PI Planning events",
        "Coaching for leaders, Release Train Engineers, Product Managers and Scrum Masters",
        "Metrics that show whether delivery really improved",
      ],
      format: "first Agile Release Train in 8–12 weeks",
      icon: "train",
    },
  ] as Flagship[],
  cta: "Discuss your situation",
  moreTitle: "More ways I can help",
};

export type Service = { title: string; text: string; format: string };
export type Pillar = {
  id: string;
  number: string;
  title: string;
  lead: string;
  icon: string;
  services: Service[];
};

export const pillars: Pillar[] = [
  {
    id: "ai",
    number: "01",
    title: "AI in practice",
    lead: "From strategy to a system that runs on your data and in your processes.",
    icon: "spark",
    services: [
      {
        title: "AI diagnostic and roadmap",
        text: "A review of your processes, data and team. A list of AI initiatives ranked by return and risk, with decision points for the board.",
        format: "3–4 weeks · fixed price",
      },
      {
        title: "AI pilot and implementation",
        text: "Assistants that work on company documents, process automation, AI agents integrated with your systems — with impact metrics from day one.",
        format: "6–12 weeks · project",
      },
      {
        title: "AI for engineering teams",
        text: "Rolling out AI coding assistants and agents, setting security rules, and measuring the real gain in team productivity.",
        format: "4–8 weeks",
      },
      {
        title: "AI governance and the EU AI Act",
        text: "An AI use policy, a register of AI systems, risk assessment, and preparing the organisation for its obligations under the EU AI Act.",
        format: "3–6 weeks",
      },
      {
        title: "AI workshops for boards and teams",
        text: "Hands-on workshops on your own processes and data, not generic slides. Every participant leaves with a use case ready to apply.",
        format: "1–3 days",
      },
    ],
  },
  {
    id: "rd",
    number: "02",
    title: "R&D tax relief in Poland",
    lead: "For companies operating in Poland, including foreign-owned subsidiaries: the development work you already do can lower your tax bill. I help you prove it and document it.",
    icon: "coins",
    services: [
      {
        title: "R&D potential audit",
        text: "I check which of your team's work — software development, prototypes, AI implementations — qualifies for the Polish R&D tax relief (ulga B+R), including past years.",
        format: "1–2 weeks · fixed price",
      },
      {
        title: "R&D relief documentation and claim",
        text: "Descriptions of R&D projects, time and cost records, and the deduction calculation. The tax filing is done together with a licensed tax adviser.",
        format: "success fee or fixed price",
      },
    ],
  },
  {
    id: "lead",
    number: "03",
    title: "Technology leadership",
    lead: "An experienced technology leader when you need one — without a permanent hire.",
    icon: "compass",
    services: [
      {
        title: "Interim and fractional CTO",
        text: "Technology leadership for a defined period or a few days a month: strategy, architecture, team and delivery.",
        format: "from 2 days a month",
      },
      {
        title: "Technical due diligence",
        text: "An independent assessment of a company's technology, architecture, team and risks before an investment — for VC and PE funds and investors.",
        format: "2–4 weeks",
      },
      {
        title: "Technology and architecture audit",
        text: "A clear picture of your systems: what works, what blocks growth, what the cloud really costs, and what to fix first.",
        format: "3–5 weeks",
      },
      {
        title: "Mentoring for technology leaders",
        text: "One-on-one work with CTOs, VPs of Engineering and engineering managers on the decisions that can't be delegated.",
        format: "1:1 sessions · monthly",
      },
      {
        title: "Scaling engineering teams",
        text: "Team structure, engineering processes and DevOps matched to the size of the company and the pace it needs.",
        format: "workshops · project",
      },
    ],
  },
];

export const aiRd = {
  kicker: "What sets me apart",
  title: "AI implementation,",
  accent: "partly funded by tax relief.",
  text: [
    "For companies operating in Poland, building a new AI-based solution often meets the legal definition of development work. I plan these projects so that from day one they have the documentation the Polish R&D tax relief (ulga B+R) requires.",
    "The result: you get a working system, and part of its cost comes back as lower tax. I bring both areas together in one project, so you don't have to coordinate a technology vendor and a tax relief adviser.",
  ],
  points: [
    "200% of R&D staff costs deductible from the tax base",
    "Tax returns can be corrected for up to 5 years back",
    "Documentation kept as the work happens, not after the fact",
  ],
  cta: "Request an R&D eligibility check",
  ctaSubject: "R&D potential audit",
};

export const packages = {
  kicker: "Starter packages",
  title: "A concrete result in a short time",
  cta: "Ask about dates",
  items: [
    {
      title: "AI Sprint",
      time: "5 days",
      text: "A workshop with the board, one process selected, and a working AI prototype on your data — in a week. With a recommendation: build it or not.",
      icon: "bolt",
    },
    {
      title: "IT project rescue",
      time: "2 weeks",
      text: "The project is late, over budget and the team is exhausted? An independent diagnosis and a recovery plan you can defend in front of the board.",
      icon: "lifebuoy",
    },
    {
      title: "AI due diligence",
      time: "2 weeks",
      text: "For investors: is the company's AI a real advantage, or a wrapper around someone else's model? An assessment of technology, data, costs and regulatory risk.",
      icon: "search",
    },
    {
      title: "Cloud and AI cost optimisation",
      time: "3–6 weeks",
      text: "A review of your cloud and AI model bills. The fee can be a percentage of the savings actually achieved.",
      icon: "chart",
    },
  ],
};

export const results = {
  kicker: "Selected results",
  title: "Numbers from past work",
  items: [
    {
      value: "−80%",
      title: "resources needed for aircraft weight and balance",
      text: "An AI-based solution for airlines, conceived and delivered from scratch.",
    },
    {
      value: "20 → 150+",
      title: "engineers in 3 years",
      text: "Built the engineering organisation behind a parcel locker platform rolled out in 8 countries.",
    },
    {
      value: "−50%",
      title: "software delivery cycle time",
      text: "A new portfolio governance framework and an automated change approval process.",
    },
    {
      value: "−30%",
      title: "production issues",
      text: "Restructured teams and involved engineers directly in customers' problems.",
    },
    {
      value: "ML × Google",
      title: "a new product for aviation",
      text: "Intelligent retailing of airline ancillaries, built together with a Google team.",
    },
    {
      value: "10",
      title: "cloud migrations",
      text: "Moved services to GCP and AWS in banking and enterprise environments (HSBC, UBS, Sabre).",
    },
  ],
};

export const steps = {
  kicker: "How I work",
  title: "Short phases, clear commitments",
  items: [
    {
      when: "Week 0",
      title: "Intro call",
      text: "30 minutes, free of charge. We look at where you are, what you need, and whether I'm the right person to help.",
    },
    {
      when: "Weeks 1–3",
      title: "Diagnosis",
      text: "A review of technology, team, processes and R&D potential. In writing: what we will do, the expected result, and how we will measure it.",
    },
    {
      when: "Weeks 4–12",
      title: "Delivery",
      text: "I work with your team, not next to it. Short cycles and regular reviews of the results with the board.",
    },
    {
      when: "At the end",
      title: "Handover",
      text: "Your team takes over: documentation, metrics and runbooks. I stay reachable whenever you need me.",
    },
  ],
};

export const models = {
  kicker: "Ways to work together",
  items: [
    { title: "Fixed-price project", text: "Scope and outcome agreed up front." },
    { title: "Ongoing support", text: "A few days a month, e.g. as a fractional CTO." },
    { title: "Success fee", text: "Fee linked to the relief recovered or the savings achieved." },
    { title: "Interim", text: "Full-time involvement for a defined period." },
  ],
};

export const about = {
  kicker: "About",
  name: "Paweł Bajorek",
  role: "Founder, Pristis Management",
  text: [
    "For more than 20 years I have been building software and the teams that create it. I started as a software engineer and architect at Comarch, then led programmes at HSBC, UBS and Sabre, where we worked with a Google team on machine-learning solutions for aviation. As Software Engineering Director at Hitachi Energy, I led a global organisation of more than 300 engineers.",
    "Project management is at the core of what I do. I am certified in PRINCE2, PMI and Scrum, and I have rolled out Scaled Agile in several organisations. I don't defend any single method — I pick and tailor the one that fits the company.",
    "I am a mathematician (AGH University) and hold an MBA. I work personally with every client — no handing the project over to juniors, and no slide decks that change nothing.",
  ],
  credentialsTitle: "Education and certifications",
  credentials: [
    "MBA — WSB University",
    "MSc Applied Mathematics — AGH University",
    "PMP® — Project Management Institute (2011)",
    "PRINCE2® Practitioner",
    "Professional Scrum Master I",
    "ITIL® Foundation",
    "ESG: double materiality assessment (ESRS)",
  ],
  nameNote:
    "Why the name? Pristis is the sawfish — it cuts precisely through whatever is unnecessary. That is how I approach projects.",
  linkedin: "LinkedIn profile",
};

export const faq = {
  kicker: "FAQ",
  title: "Frequently asked questions",
  items: [
    {
      q: "Can a company that “only” builds software claim R&D relief?",
      a: "Very often, yes. Building new software or significantly improving existing software can count as development work under Polish law. An audit of the specific projects settles it — I give an initial view during the first call.",
    },
    {
      q: "Which methodology do you recommend: PRINCE2, PMI or agile?",
      a: "None by default. I look at the type of projects, the culture, the regulations and the people, and then choose — often a combination. A method should serve the work, not the other way round.",
    },
    {
      q: "How much does it cost to work together?",
      a: "Diagnostics and packages have a fixed price, which I quote after the first call. For R&D relief and cost optimisation, a fee linked to the result is possible.",
    },
    {
      q: "Do you work with small companies?",
      a: "Yes. I work with startups, small and mid-sized companies, and large organisations, and match the scope to the size and budget.",
    },
    {
      q: "What about data security in AI projects?",
      a: "It is the first topic in every project: choosing models and where data is processed, access rules, an AI use policy, and compliance with GDPR and the EU AI Act.",
    },
    {
      q: "Do you work with clients outside Poland?",
      a: "Yes. I have spent most of my career in international, distributed teams. I work remotely and on site.",
    },
  ],
};

export const contact = {
  title: "Let's talk about your challenge.",
  text: "Write a few sentences about your situation. I will reply and suggest a time for a 30-minute call.",
  subject: "Intro call",
  button: "Email me",
};

export const ui = {
  bookCall: "Book a call",
  menu: "Menu",
  close: "Close",
  contact: "Contact",
  mainMenu: "Main menu",
  footerMenu: "Footer",
  home: "Pristis Management — back to top",
  workedWith: "Experience from",
  heroCaption: "20+ years in technology",
  heroAlt: "Paweł Bajorek, founder of Pristis Management",
};
