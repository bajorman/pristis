// English copy (default language, served at /). The Polish version in pl.ts
// has the same shape, enforced by the Content type. No prices on the site:
// formats give typical durations only.
import type { Locale } from "../site";

export type Service = { title: string; text: string; format: string };

export type Pillar = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  lead: string;
  icon: string;
  services: Service[];
  note: string;
};

// An entry point into one of the two pillars: a short package or a focused
// engagement. `id` is shared by both languages (anchors, analytics).
export type Entry = {
  id: string;
  title: string;
  time: string;
  text: string;
  icon: string;
  link?: { href: string; label: string };
};

export const en = {
  locale: "en" as Locale,
  meta: {
    title: "Pristis Management — AI in practice and technology leadership",
    description:
      "Consulting and mentoring for technology leaders in two areas: AI in practice (strategy, RAG, AI agents, evaluation, production) and technology leadership (interim and fractional CTO, audits, project rescue, Scaled Agile, organisation design). Technical support for R&D tax relief in Poland.",
    ogTitle: "Pristis Management — build engineering organisations that scale",
    ogLocale: "en_GB",
    privacyTitle: "Privacy",
    privacyDescription: "How PRISTIS Paweł Bajorek (Pristis Management) handles personal data.",
  },

  nav: [
    { href: "#services", label: "Services" },
    { href: "#start", label: "Ways in" },
    { href: "#ai", label: "AI" },
    { href: "#leadership", label: "Leadership" },
    { href: "#results", label: "Results" },
    { href: "#about", label: "About" },
  ],

  hero: {
    eyebrow: "Consulting & mentoring for technology leaders",
    // The words in `accent` are set in italic accent colour after `title`.
    title: "Build engineering organisations",
    accent: "that scale.",
    lead: "A hands-on partner for technology leaders in two areas: AI in practice – from board-level strategy to systems that work in production – and technology leadership – from interim CTO to teams and projects that deliver. 20+ years of building engineering organisations.",
    primary: "Request a 30-minute intro call",
    secondary: "See the two pillars",
    // One tile per pillar; `id` is the entry group it scrolls to (#start-<id>).
    entriesTitle: "Where are you starting?",
    entries: [
      { id: "ai", offer: "AI in practice", note: "You want AI that works beyond the demo", icon: "spark" },
      {
        id: "leadership",
        offer: "Technology leadership",
        note: "You need a technology leader, or a project back on track",
        icon: "compass",
      },
    ],
  },

  facts: [
    { value: "20+", label: "years in IT and technology leadership" },
    { value: "300+", label: "engineers in the teams I have led" },
    { value: "$100M+", label: "IT budgets managed" },
    { value: "10", label: "cloud transformation initiatives (GCP, AWS)" },
  ],

  // Industries rather than company names: naming former employers and clients
  // needs their confirmation, which is not in place.
  industries: ["Banking", "Airline technology", "Energy", "Logistics", "Healthcare", "Public sector"],

  problems: {
    kicker: "Why clients get in touch",
    title: "Questions I hear most often",
    items: [
      {
        q: "“We ran an AI pilot. How do we know if its answers are good enough?”",
        a: "Without a test set and quality metrics, nobody knows. That is why AI work starts with evaluation — then the board decides on facts, not on a demo.",
      },
      {
        q: "“Our developers use AI coding assistants. Is it actually paying off?”",
        a: "Often nobody measures it. Clear rules for security and code quality, plus a few honest metrics, show where the gain is real — and where it is only a feeling.",
      },
      {
        q: "“We need a CTO, but not full-time. Is that possible?”",
        a: "Yes. A fractional CTO works a few days a month on strategy, architecture, the team and delivery — and an interim CTO bridges the gap until you hire.",
      },
      {
        q: "“Our teams are agile, yet every larger change needs five teams and still slips. Why?”",
        a: "Usually it is the structure and the dependencies between teams, not the people — and nobody coordinates across them. It can be diagnosed and fixed step by step.",
      },
    ],
  },

  // The two pillars of the offer, shown first and largest.
  pillars: {
    kicker: "Services",
    title: "Two pillars,",
    accent: "one partner.",
    lead: "Everything I do comes down to two things: making AI work in practice, and leading technology organisations that deliver. The more focused services further down are ways into these two.",
    cta: "Discuss your situation",
    items: [
      {
        id: "pillar-ai",
        number: "01",
        title: "AI in practice",
        tagline: "From the boardroom to production.",
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
            text: "Choosing the use cases with a real return — including an honest “don't do it” when AI doesn't pay off.",
            format: "3–4 weeks",
          },
          {
            title: "AI application engineering",
            text: "Architecture and technical leadership of the build: assistants on company knowledge (RAG), agents that use your tools, model selection, prompting, retrieval or fine-tuning.",
            format: "6–12 weeks · project",
          },
          {
            title: "AI evaluation and quality",
            text: "Test sets, quality criteria and metrics tied to business outcomes — so the decision to scale rests on evidence, not on a good demo.",
            format: "2–4 weeks",
          },
          {
            title: "Production readiness (LLMOps)",
            text: "Guardrails, protection against prompt injection, monitoring, feedback loops, and the cost and latency of every answer.",
            format: "3–6 weeks",
          },
          {
            title: "AI for engineering teams",
            text: "Rolling out AI coding assistants and agents, setting security rules, and measuring the real gain in productivity.",
            format: "4–8 weeks",
          },
        ],
        note: "AI governance — an AI use policy, a register of AI systems and readiness for the EU AI Act — is built into every AI project.",
      },
      {
        id: "pillar-leadership",
        number: "02",
        title: "Technology leadership",
        tagline: "An experienced technology leader when you need one.",
        lead: "A technology organisation that delivers predictably: clear direction, sound architecture, strong leaders and projects that land — with experienced leadership exactly where it is missing.",
        icon: "compass",
        services: [
          {
            title: "Interim and fractional CTO",
            text: "Technology leadership for a defined period or a few days a month: strategy, architecture, team and delivery.",
            format: "from 2 days a month",
          },
          {
            title: "Technology and architecture audit",
            text: "A clear picture of your systems: what works, what blocks growth, where the technical debt and security risks are, and what to fix first.",
            format: "3–5 weeks",
          },
          {
            title: "Delivery and project portfolio",
            text: "Predictable delivery across the portfolio: priorities, governance, a working PMO and reporting the board can rely on.",
            format: "diagnosis · 2–4 months",
          },
          {
            title: "Engineering processes and DevOps",
            text: "How code gets from idea to production: CI/CD, quality, release management and developer productivity, matched to the pace the company needs.",
            format: "2–4 months",
          },
          {
            title: "Mentoring and leadership development",
            text: "One-on-one mentoring for CTOs and VPs of Engineering, and a programme for engineering managers: delegation with clear decision levels, candid feedback and self-organising teams.",
            format: "1:1 monthly · cohort 3–6 months",
          },
          {
            title: "Hiring and succession for key roles",
            text: "Hiring processes for leaders and engineers, talent reviews and succession plans, so the organisation does not depend on a few people.",
            format: "project · ongoing support",
          },
        ],
        note: "Project rescue, project management, Scaled Agile and organisation design are run as focused engagements — see the ways in below.",
      },
    ] as Pillar[],
  },

  // Entry points: short packages and focused services, grouped by the pillar
  // they lead into.
  entries: {
    kicker: "Ways in",
    title: "Start with one concrete step,",
    accent: "grow into a partnership.",
    lead: "Each pillar has clear entry points: a short package with a defined result, or a focused engagement. Many clients start with one of them and continue with ongoing support.",
    leadsTo: "Leads into",
    cta: "Ask about this",
    groups: [
      {
        id: "ai",
        pillar: "AI in practice",
        icon: "spark",
        items: [
          {
            id: "ai-sprint",
            title: "AI Sprint",
            time: "5 days",
            text: "A workshop with the board, one process selected, and a working AI prototype on your data — with a quality test set, so the build-or-not decision rests on evidence.",
            icon: "bolt",
          },
          {
            id: "ai-health-check",
            title: "AI system health check",
            time: "2 weeks",
            text: "A review of an AI application you already run: answer quality, cost per request, latency, security and monitoring. A list of fixes ranked by impact.",
            icon: "pulse",
          },
          {
            id: "ai-due-diligence",
            title: "AI due diligence",
            time: "2 weeks",
            text: "For investors: is the company's AI a real advantage, or a wrapper around someone else's model? Technology, data, costs and regulatory risk.",
            icon: "search",
          },
        ] as Entry[],
      },
      {
        id: "leadership",
        pillar: "Technology leadership",
        icon: "compass",
        items: [
          {
            id: "project-rescue",
            title: "IT project rescue",
            time: "2 weeks",
            text: "Late, over budget, team exhausted? An independent diagnosis and a recovery plan you can defend in front of the board.",
            icon: "lifebuoy",
          },
          {
            id: "tech-due-diligence",
            title: "Technical due diligence",
            time: "2–4 weeks",
            text: "An independent assessment of a company's technology, architecture, team and risks before an investment — for VC and PE funds.",
            icon: "search",
          },
          {
            id: "project-management",
            title: "Project management and methodology",
            time: "diagnosis 2–3 weeks",
            text: "PRINCE2, PMI practices, agile or a tailored mix — chosen to fit your company. PMO, portfolio governance and coaching for project managers.",
            icon: "layers",
          },
          {
            id: "scaled-agile",
            title: "Scaled Agile (SAFe®)",
            time: "first train in 8–12 weeks",
            text: "Agile beyond a single team: readiness assessment, value streams, Agile Release Trains and the first PI Planning events.",
            icon: "train",
          },
          {
            id: "org-design",
            title: "Organisation design for fast flow",
            time: "diagnosis 3–4 weeks",
            text: "Team structure that speeds delivery up: product-aligned and platform teams, fewer hand-offs, change in stages without a “big bang”.",
            icon: "flow",
          },
        ] as Entry[],
      },
    ],
    // Entry points that serve both pillars.
    shared: {
      title: "For both pillars",
      items: [
        {
          id: "cost-optimisation",
          title: "Cloud and AI cost optimisation",
          time: "3–6 weeks",
          text: "A review of your cloud and AI model bills, with savings you can implement and measure.",
          icon: "chart",
        },
        {
          id: "rd-review",
          title: "Technical R&D review (Poland)",
          time: "1–2 weeks",
          text: "Software and AI work that may qualify for R&D tax relief, identified and documented. A licensed tax adviser assesses eligibility.",
          icon: "coins",
          link: { href: "#ai-rd", label: "How it works" },
        },
      ] as Entry[],
    },
  },

  // What stands behind each pillar: the experience (two cards) and the
  // principles. Rendered by the same component for #ai and #leadership.
  aiExpertise: {
    kicker: "Behind pillar 01",
    title: "Both sides of AI:",
    accent: "the boardroom and the build.",
    lead: "AI projects fail in two places: in the boardroom, when expectations are built on a demo, and in the build, when nobody measures quality and cost. I work on both sides.",
    items: [
      {
        title: "In the boardroom",
        text: "A background in applied mathematics: I understand how models learn, why they fail and where their limits are — and I explain it to boards in plain language.",
        points: [
          "Board and leadership briefings without the hype",
          "Business cases with an honest “don't do it” option",
          "Impact on roles and people, not only on processes",
          "AI policy and EU AI Act readiness from the start",
        ],
        icon: "compass",
      },
      {
        title: "In the build",
        text: "Hands-on experience of delivering AI and machine-learning systems — from the first prototype to production.",
        points: [
          "An AI-based solution for aircraft weight and balance, from concept to delivery",
          "Machine-learning products for airline retailing, with a global technology partner",
          "Hands-on with RAG, agents and evaluation on today's foundation models",
          "Cost, latency and security built in from the first prototype",
        ],
        icon: "spark",
      },
    ],
  },

  aiPrinciples: {
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
  },

  aiRd: {
    kicker: "AI and R&D tax relief in Poland",
    title: "AI development that may qualify",
    accent: "for R&D tax relief.",
    text: [
      "For companies operating in Poland, developing a genuinely new AI-based solution may meet the definition of development work under Polish tax law. A routine implementation or a standard software change does not. I plan such projects so that, from day one, the technical work is documented in the way an R&D tax relief (ulga B+R) claim requires.",
      "Whether the relief applies depends on the nature of the work, its documentation and your tax situation. A licensed Polish tax adviser assesses eligibility and advises on the claim; I provide the technical analysis and the evidence.",
    ],
    points: [
      "Qualifying R&D staff costs may be deducted at 200%, other qualifying costs at 100% (standard rates)",
      "Past tax years that are not yet time-barred can be reviewed, each assessed separately",
      "Documentation kept as the work happens, not after the fact",
    ],
    cta: "Request a technical R&D review",
    ctaSubject: "Technical R&D review",
  },

  results: {
    kicker: "Selected results",
    title: "Numbers from past work",
    note: "Results from my previous roles in software, banking, airline technology and logistics — achieved by the teams and programmes I led or was part of.",
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
        value: "ML",
        title: "a new product for aviation",
        text: "Intelligent retailing of airline ancillaries, built together with a global technology partner.",
      },
      {
        value: "10",
        title: "cloud transformation initiatives",
        text: "Moved services to GCP and AWS in global banks and in airline technology.",
      },
    ],
  },

  steps: {
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
        text: "A review of technology, team and processes. In writing: what we will do, the expected result, and how we will measure it.",
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
  },

  models: {
    kicker: "Ways to work together",
    items: [
      { title: "Defined project", text: "Scope and outcome agreed up front." },
      { title: "Ongoing support", text: "A few days a month, e.g. as a fractional CTO." },
      { title: "Linked to results", text: "For cost optimisation: a fee linked to the savings achieved." },
      { title: "Interim", text: "Full-time involvement for a defined period." },
    ],
  },

  leadership: {
    kicker: "Behind pillar 02",
    title: "Leadership in practice:",
    accent: "people, structure, delivery.",
    lead: "Technology organisations slow down for two reasons: the structure stops fitting the size of the company, and delivery loses its rhythm. I have fixed both, from the inside.",
    items: [
      {
        title: "Organisation and people",
        text: "Building and leading engineering organisations — from a few teams to more than 300 engineers in several countries.",
        points: [
          "An engineering organisation grown from 20 to 150+ engineers in 3 years",
          "Team structure and architecture shaped together",
          "Leaders developed from within, with clear decision levels",
          "Candid feedback as everyday practice, not an annual event",
        ],
        icon: "compass",
      },
      {
        title: "Delivery",
        text: "Large programmes in banking, airline technology and energy — delivered with the method that fits, not the one in fashion.",
        points: [
          "Software delivery cycle time cut by half",
          "Scaled Agile rolled out in several organisations",
          "PMP®, PRINCE2® and Scrum, tailored to the company",
          "Portfolio governance the board can rely on",
        ],
        icon: "layers",
      },
    ],
  },

  orgPrinciples: {
    kicker: "How I build organisations",
    title: "Four principles,",
    accent: "one system.",
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
        title: "Candour builds trust",
        text: "Clear, honest feedback is a form of respect — for people and for results.",
      },
      {
        title: "Strategy is simple, execution is everything",
        text: "The direction fits on one page. What makes the difference is following through.",
      },
    ],
  },

  bookshelf: {
    kicker: "Bookshelf",
    title: "Books that shaped how I work",
    items: [
      {
        title: "Winning",
        author: "Jack Welch, Suzy Welch",
        text: "Candour, the right people in the right roles, and relentless execution.",
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
  },

  about: {
    kicker: "About",
    name: "Paweł Bajorek",
    role: "Founder, Pristis Management",
    text: [
      "For more than 20 years I have been building software and the teams that create it. I started as a software engineer and architect at a large software house, then led programmes at two global banks and at a global airline technology company. As Software Engineering Director at a global energy technology company, I led an organisation of more than 300 engineers.",
      "My background in applied mathematics lets me understand AI from the inside — how neural networks learn, why they fail, and where their limits are. I combine that with hands-on knowledge of building production systems on foundation models: retrieval over company knowledge, agents, evaluation, fine-tuning, and keeping cost and latency under control. In airline technology, I worked with a global technology partner on machine-learning products, and I led the creation of an AI-based solution for aircraft weight and balance.",
      "My approach to leadership is simple. Get the right people in the right roles, be candid with them, and keep strategy clear enough that everyone can act on it. Then manage the system, not the people: give teams real ownership with clear limits on decisions, and design the organisation so that work flows fast — with team structure and architecture shaped together, and no team carrying more than it can handle.",
      "Project management is one of my core strengths: I am certified in PRINCE2 and Scrum, earned the PMP® in 2011, and I have rolled out Scaled Agile in several organisations. I don't defend any single method — I pick and tailor the one that fits the company.",
      "I am a mathematician (AGH University) and hold an MBA. I work personally with every client — no handing the project over to juniors, and no slide decks that change nothing.",
    ],
    credentialsTitle: "Education and certifications",
    credentials: [
      "MBA — WSB University",
      "MSc Applied Mathematics — AGH University",
      "PMP® — Project Management Institute (earned 2011)",
      "PRINCE2® Practitioner",
      "Professional Scrum Master I",
      "ITIL® Foundation",
      "ESG: double materiality assessment (ESRS)",
    ],
    nameNote:
      "Why the name? In Latin, pristis was the name for a fast-sailing warship. It was also the name of one of Aeneas's ships in Virgil's Aeneid. That is how I see my role: helping you set the course and steer the change swiftly to its destination.",
    linkedin: "LinkedIn profile",
  },

  faq: {
    kicker: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "How do we agree on the cost of working together?",
        a: "After the first call I propose a scope and a quote in writing, matched to your situation. Packages have a defined scope, so you know up front what you get.",
      },
      {
        q: "Do you work with small companies?",
        a: "Yes. I work with startups, small and mid-sized companies, and large organisations, and match the scope to the size of the company.",
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
  },

  contact: {
    title: "Let's talk about your challenge.",
    text: "Write a few sentences about your situation. I will reply and suggest a time for a 30-minute call.",
    subject: "Intro call",
    button: "Email me",
    privacy: "How I handle your data",
  },

  // Strings of the R&D relief simulation (BrCalculator).
  calc: {
    numberLocale: "en-GB",
    title: "R&D relief simulation",
    intro: "An illustration of the possible tax effect for one tax year under the Polish R&D tax relief.",
    staffLabel: "Qualifying staff costs of R&D work (one year, whole PLN, e.g. 500 000)",
    staffHint:
      "Employees' salaries and pay under contracts of mandate or for specific work (umowa zlecenie, umowa o dzieło), with the social contributions paid by the payer — in proportion to time spent on R&D. Deducted at 200%.",
    otherLabel: "Other qualifying costs (one year, whole PLN, e.g. 100 000)",
    otherHint:
      "E.g. materials, specialist equipment, depreciation, patents, and expert opinions or services bought from scientific institutions such as universities or research institutes. Deducted at 100%.",
    regime: "Tax regime",
    rates: { cit19: "CIT 19%", cit9: "CIT 9%", pit19: "PIT flat 19%" },
    cit9Note:
      "CIT 9% applies to small taxpayers (sales revenue up to EUR 2 million in the previous year) and to companies in their first tax year, and only while revenue in the current tax year does not exceed the PLN equivalent of EUR 2 million. It covers income other than capital gains, subject to further statutory conditions.",
    effect: "Possible tax effect for this tax year",
    deduction: "Additional deduction from the tax base:",
    disclaimer:
      "A simulation for one tax year for a standard taxpayer without research and development centre (CBR) status, not tax advice. It assumes the costs qualify and that there is enough income to absorb the whole deduction — for CIT, income from sources other than capital gains; for PIT, income from business activity. An unused part can be carried forward to the next six tax years. Whether the work and costs qualify depends on the nature of the work, its documentation and the taxpayer's situation, and is assessed by a licensed tax adviser. Progressive PIT is not modelled.",
    errors: {
      empty: "Enter an amount (0 if none).",
      negative: "The amount cannot be negative.",
      mixed: "Use one thousands separator throughout, e.g. 1 234 567 or 1,234,567 (whole PLN, no decimals).",
      format: "Use whole PLN, e.g. 500000, 500 000 or 500,000.",
      max: "Amounts above PLN 1 billion are not supported.",
    },
  },

  ui: {
    bookCall: "Request a call",
    menu: "Menu",
    close: "Close",
    contact: "Contact",
    mainMenu: "Main menu",
    footerMenu: "Footer",
    privacy: "Privacy",
    backHome: "Back to the home page",
    home: "Pristis Management — back to top",
    workedWith: "Experience in",
    heroCaption: "20+ years in technology",
    timeNote:
      "Timeframes are typical and depend on scope, team readiness and the availability of a sponsor on your side.",
    heroAlt: "Paweł Bajorek, founder of Pristis Management",
    // Language switch: shown in the header, leads to the other language.
    switchLabel: "PL",
    switchTitle: "Wersja polska",
  },
};

export type Content = typeof en;
