// Site-wide settings and all page copy, kept in one place so the text can be
// edited without touching the layout. Copy is in English.
export const site = {
  name: "Pristis Management",
  url: "https://www.pristismanagement.com",
  email: "pawel.bajorek@pristismanagement.com",
  linkedin: "https://www.linkedin.com/in/pbajorek/",
  description:
    "Consulting and mentoring for technology leaders: project management and Scaled Agile, AI strategy and AI engineering (RAG, AI agents, AI evaluation), interim CTO, technical due diligence and R&D tax relief in Poland.",
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
  { href: "#ai", label: "AI" },
  { href: "#results", label: "Results" },
  { href: "#how-i-work", label: "How I work" },
  { href: "#about", label: "About" },
];

export const hero = {
  eyebrow: "Consulting & mentoring for technology leaders",
  // The words in `accent` are set in italic accent colour after `title`.
  title: "Build engineering organizations",
  accent: "that scale.",
  lead: "A hands-on partner for technology leaders: from organizing teams and projects to scaling agile and building AI systems that work in production – 20+ years of building organizations that deliver.",
  primary: "Book an intro call",
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
      a: "The one that fits your company, not the one that is fashionable. Often it is a tailored mix of waterfall and agile practices.",
    },
    {
      q: "“Our teams are agile, but large initiatives still slip. What's missing?”",
      a: "Agile works within a team, but nobody coordinates across teams. Scaled Agile closes that gap — if it is rolled out with care.",
    },
    {
      q: "“Every change needs five teams and a meeting. Why are we so slow?”",
      a: "Usually it is the structure and the dependencies between teams, not the people. It can be diagnosed and fixed step by step.",
    },
    {
      q: "“We ran an AI pilot. How do we know if its answers are good enough?”",
      a: "Without a test set and quality metrics, nobody knows. That is why AI work starts with evaluation — then the board decides on facts, not on a demo.",
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
  kicker: "Services",
  title: "From strategy to delivery,",
  accent: "end to end",
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
      tagline: "Agile beyond a single team.",
      text: "When many teams work on one product, team-level agile is no longer enough. I lead Scaled Agile transformations end to end and adapt the framework to your organisation instead of copying it from the manual.",
      points: [
        "Readiness assessment and implementation roadmap",
        "Value streams and Agile Release Train design",
        "Preparing and facilitating the first PI Planning events",
        "Coaching for leaders, Release Train Engineers, Product Managers and Scrum Masters",
        "Team structure designed for fast flow — product-aligned and platform teams",
        "Metrics that show whether delivery really improved",
      ],
      format: "first Agile Release Train in 8–12 weeks",
      icon: "train",
    },
    {
      title: "Organisation design for fast flow",
      tagline: "Team structure that speeds delivery up instead of slowing it down.",
      text: "When every change needs five teams and a meeting, the problem is the structure, not the people. I redesign how teams are organised and how they work together, so that work flows quickly from idea to customer — and the architecture follows.",
      points: [
        "Mapping today's teams, dependencies and bottlenecks",
        "Team types matched to the work: product-aligned, platform and enabling teams",
        "Clear ways of working between teams, without constant hand-offs",
        "Managing team cognitive load so people can focus",
        "Aligning team structure with system architecture",
        "Step-by-step change, without a disruptive “big bang” reorganisation",
      ],
      format: "diagnosis 3–4 weeks · change in stages",
      icon: "flow",
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
    lead: "From board-level understanding to systems that work in production — on your data, in your processes, at a cost you control.",
    icon: "spark",
    services: [
      {
        title: "AI strategy and executive briefings",
        text: "What AI can and cannot do: how models learn, where they fail, and what the risks are. Board decisions based on understanding, not hype.",
        format: "workshop · 1–2 days",
      },
      {
        title: "Use-case selection: build, buy or skip",
        text: "Choosing the use cases with a real return. An off-the-shelf tool, your own application on a model API, or no AI at all — including an honest “don't do it” when AI doesn't pay off.",
        format: "3–4 weeks · fixed price",
      },
      {
        title: "AI application engineering",
        text: "Architecture and technical leadership of the build: assistants on company knowledge (RAG), agents that use your tools and systems, model selection, and the choice between prompting, retrieval and fine-tuning.",
        format: "6–12 weeks · project",
      },
      {
        title: "AI evaluation and quality",
        text: "Test sets, quality criteria, automated and human review of answers, and metrics tied to business outcomes — so the decision to scale rests on evidence, not on a good demo.",
        format: "2–4 weeks",
      },
      {
        title: "Production readiness (LLMOps)",
        text: "Guardrails, protection against prompt injection, monitoring, user feedback loops, and optimising the cost and latency of every answer.",
        format: "3–6 weeks",
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
        text: "One-on-one work with CTOs, VPs of Engineering and engineering managers on the decisions that can't be delegated — and on delegating the rest well, giving candid feedback and leading change.",
        format: "1:1 sessions · monthly",
      },
      {
        title: "Leadership programme for engineering managers",
        text: "A group or one-on-one programme: delegation with clear decision levels, motivation, building self-organising teams, candid feedback and performance conversations.",
        format: "cohort · 3–6 months",
      },
      {
        title: "Talent and leadership bench",
        text: "Hiring processes for leaders and engineers, regular talent reviews and succession plans for key roles — the right people in the right roles.",
        format: "project · ongoing support",
      },
      {
        title: "Scaling engineering teams",
        text: "Team structure, engineering processes and DevOps matched to the size of the company and the pace it needs.",
        format: "workshops · project",
      },
    ],
  },
];

// Two sides of AI expertise, shown as two large cards at the top of the AI
// section, above the principles.
export const aiExpertise = {
  kicker: "AI expertise",
  title: "Both sides of AI:",
  accent: "the boardroom and the build.",
  items: [
    {
      title: "Strategic and conceptual",
      text: "I understand how models learn, what they can really do, where their limits are, and what that means for the business and its people — and I can explain it clearly to a board.",
      points: [
        "How models learn — and why they fail",
        "Realistic capabilities and hard limits",
        "Impact on the business, on roles and on people",
        "Clear explanations for boards and leadership teams",
      ],
      icon: "compass",
    },
    {
      title: "Engineering",
      text: "I know how to build production applications on foundation models — and what it takes to keep them reliable, safe and affordable.",
      points: [
        "Retrieval over company documents (RAG)",
        "AI agents that use your tools and systems",
        "Evaluation and quality metrics",
        "Fine-tuning and data preparation",
        "Cost and latency optimisation",
        "Monitoring, guardrails and security",
      ],
      icon: "spark",
    },
  ],
};

export const aiPrinciples = {
  kicker: "How I approach AI",
  title: "Less hype,",
  accent: "more evidence.",
  items: [
    {
      title: "Start with the problem, not the model",
      text: "First the process and the metric that matters, then the technology. Sometimes the best answer is a simpler tool — or no AI at all.",
    },
    {
      title: "Evaluate before you scale",
      text: "No test set and quality criteria, no decision to roll out. Evaluation is built in from the first prototype, not added at the end.",
    },
    {
      title: "Know the cost of every answer",
      text: "Cost and latency are part of the architecture, not a surprise on the invoice: the right model for each task, caching, and monitoring of usage.",
    },
    {
      title: "Keep people in the loop",
      text: "AI should support the judgement of experienced people, not quietly replace it. Clear ownership, feedback and the ability to correct the system.",
    },
  ],
};

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
      text: "A workshop with the board, one process selected, and a working AI prototype on your data — in a week. It comes with a quality test set, so the recommendation to build it or not rests on evidence.",
      icon: "bolt",
    },
    {
      title: "AI system health check",
      time: "2 weeks",
      text: "A review of an AI application you already run: answer quality and how it is measured, cost per request, latency, security and monitoring. You get a list of fixes ranked by impact.",
      icon: "pulse",
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

export const orgPrinciples = {
  kicker: "How I build organisations",
  title: "Four principles",
  items: [
    {
      title: "Design teams for flow",
      text: "Team structure sets the pace of delivery more than any methodology does.",
    },
    {
      title: "Manage the system, not the people",
      text: "A leader creates the conditions for good work instead of controlling every step.",
    },
    {
      title: "Candor builds trust",
      text: "Clear, honest feedback is a form of respect — for people and for results.",
    },
    {
      title: "Strategy is simple, execution is everything",
      text: "The direction fits on one page. What makes the difference is following through.",
    },
  ],
};

export const bookshelf = {
  kicker: "Bookshelf",
  title: "Books that shaped how I work",
  items: [
    {
      title: "Winning",
      author: "Jack Welch, Suzy Welch",
      text: "Candor, the right people in the right roles, and relentless execution.",
    },
    {
      title: "Management 3.0",
      author: "Jurgen Appelo",
      text: "Managing the system, not the people — and giving teams real ownership.",
    },
    {
      title: "Team Topologies",
      author: "Matthew Skelton, Manuel Pais",
      text: "Designing teams for fast flow, with structure and architecture shaped together.",
    },
    {
      title: "Quo vAIdis",
      author: "Andrzej Dragan",
      text: "How machines learn, what they can really do, and what it means for people.",
    },
    {
      title: "AI Engineering",
      author: "Chip Huyen",
      text: "Building production applications on foundation models — with evaluation first.",
    },
  ],
};

export const about = {
  kicker: "About",
  name: "Paweł Bajorek",
  role: "Founder, Pristis Management",
  text: [
    "For more than 20 years I have been building software and the teams that create it. I started as a software engineer and architect at Comarch, then led programmes at HSBC, UBS and Sabre, where we worked with a Google team on machine-learning solutions for aviation. As Software Engineering Director at Hitachi Energy, I led a global organisation of more than 300 engineers.",
    "My background in applied mathematics lets me understand AI from the inside — how neural networks learn, why they fail, and where their limits are. I combine that with hands-on knowledge of building production systems on foundation models: retrieval over company knowledge, agents, evaluation, fine-tuning, and keeping cost and latency under control. At Sabre, I worked with Google on machine-learning products for airlines, and I led the creation of an AI-based solution for aircraft weight and balance.",
    "My approach to leadership is simple. Get the right people in the right roles, be candid with them, and keep strategy clear enough that everyone can act on it. Then manage the system, not the people: give teams real ownership with clear limits on decisions, and design the organisation so that work flows fast — with team structure and architecture shaped together, and no team carrying more than it can handle.",
    "Project management is one of my core strengths: I am certified in PRINCE2, PMI and Scrum, and I have rolled out Scaled Agile in several organisations. I don't defend any single method — I pick and tailor the one that fits the company.",
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
    "Why the name? In Latin, pristis was the name for a fast-sailing warship. It was also the name of one of Aeneas's ships in Virgil's Aeneid. That is how I see my role: helping you set the course and steer the change swiftly to its destination.",
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
      q: "Will reorganising teams disrupt our delivery?",
      a: "Not if the change is made in stages: start with the biggest bottleneck, measure the effect after each step, and only then move on.",
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
      q: "Do you only advise, or do you help build AI systems?",
      a: "Both. I design the architecture, lead the team and oversee the build and the testing — from the first prototype to a system running in production, with evaluation and monitoring in place.",
    },
    {
      q: "Which AI model should we use?",
      a: "It depends on the task and on your requirements for quality, cost, latency and data. I choose based on tests on your own cases, not on public rankings — and often different tasks get different models.",
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
