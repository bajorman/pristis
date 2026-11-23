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
    title: "Pristis Management — AI system reviews, IT project rescue, fractional CTO",
    description:
      "Independent help for CEOs and technology leaders: assessing the quality and cost of AI systems before they scale, recovering troubled IT projects, and fractional or interim CTO leadership. B2B, in English and Polish.",
    ogTitle: "Pristis Management — get AI ready for production, get projects back on track",
    ogLocale: "en_GB",
    privacyTitle: "Privacy",
    privacyDescription: "How PRISTIS Paweł Bajorek (Pristis Management) handles personal data.",
  },

  nav: [
    { href: "#services", label: "Services" },
    { href: "#start", label: "Engagements" },
    { href: "#results", label: "Results" },
    { href: "#ai", label: "AI" },
    { href: "#leadership", label: "Leadership" },
    { href: "#about", label: "About" },
  ],

  hero: {
    eyebrow: "Consulting for CEOs and technology leaders",
    // The words in `accent` are set in italic accent colour after `title`.
    title: "Get AI ready for production.",
    accent: "Get technology projects back on track.",
    lead: "I help CEOs and technology leaders assess the quality and cost of AI systems, recover troubled IT projects and lead engineering teams as a fractional CTO. 20+ years of building engineering organisations — and you work directly with me.",
    primary: "Discuss your project (30 min)",
    secondary: "See all services",
    // The three main offers; `id` is the engagement card it scrolls to.
    entriesTitle: "Most clients start with",
    entries: [
      {
        id: "ai-health-check",
        offer: "AI system review",
        note: "After an AI pilot",
        result: "Quality, cost and a list of fixes in 2 weeks",
        icon: "pulse",
      },
      {
        id: "project-rescue",
        offer: "IT project rescue",
        note: "Late or over budget",
        result: "Diagnosis and a 30/60/90-day plan in 2 weeks",
        icon: "lifebuoy",
      },
      {
        id: "fractional-cto",
        offer: "Fractional CTO",
        note: "A gap in technology leadership",
        result: "Senior leadership a few days a month",
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

  // The two pillars of the offer: the full scope of services.
  pillars: {
    kicker: "Services",
    title: "Two pillars,",
    accent: "one partner.",
    lead: "Everything I do comes down to two things: making AI work in practice, and leading technology organisations that deliver. Each service below has a clear place: what it decides, and what comes after it.",
    cta: "Discuss your situation",
    items: [
      {
        id: "pillar-ai",
        number: "01",
        title: "AI in practice",
        tagline: "Evidence before scale.",
        lead: "AI that works on your data and in your processes, with quality and cost measured before anyone decides to scale it.",
        icon: "spark",
        services: [
          {
            title: "AI strategy and use-case selection",
            text: "A decision workshop for the board: priorities, risks and the next decisions. If needed, a strategy with a plan, owners and funding — and for each use case a build, buy or defer option with a baseline and its risks.",
            format: "workshop · 1–2 days · strategy 3–4 weeks",
          },
          {
            title: "AI application engineering",
            text: "I design the architecture and lead the build: assistants on company knowledge (RAG), agents that use your tools, model selection. Who implements, who maintains the system and how the code is handed over are agreed up front.",
            format: "6–12 weeks · project",
          },
          {
            title: "Production readiness (LLMOps)",
            text: "The next step after an AI system review: acceptance criteria, guardrails and protection against prompt injection, monitoring, runbooks and a named owner of the system.",
            format: "3–6 weeks",
          },
          {
            title: "AI for engineering teams",
            text: "Rules for using AI coding assistants and agents safely, and a measured rollout: lead time for changes, rework after review and regressions, against a baseline.",
            format: "4–8 weeks",
          },
        ],
        note: "AI governance is scoped to each use case: an AI use policy, a register of AI systems and an initial AI Act risk classification. The legal assessment stays with your lawyers.",
      },
      {
        id: "pillar-leadership",
        number: "02",
        title: "Technology leadership",
        tagline: "Experienced leadership where it is missing.",
        lead: "A technology organisation that delivers predictably: clear direction, sound architecture, strong leaders and projects that land — as a fractional CTO a few days a month, or as an interim CTO for a transition.",
        icon: "compass",
        services: [
          {
            title: "Interim CTO",
            text: "For a vacancy or a period of transition: the mandate, availability, working rhythm and the handover to a permanent leader are agreed before we start.",
            format: "defined period",
          },
          {
            title: "Technology and architecture audit",
            text: "For companies without an acute crisis: what works, what blocks growth, where the technical debt is. You get a risk register and a plan of changes. A security penetration test is a separate service.",
            format: "3–5 weeks",
          },
          {
            title: "Delivery and project management",
            text: "Predictable delivery across projects: a short diagnosis with a written result, then changes rolled out over 2–4 months — priorities, portfolio governance, a working PMO and a method that fits (PRINCE2, PMI practices, agile or a mix).",
            format: "diagnosis 2–3 weeks · changes 2–4 months",
          },
          {
            title: "Engineering processes and organisation design",
            text: "Usually after an audit or as part of a CTO role: team structure for fast flow, fewer dependencies, CI/CD and release management. Measured by flow, the number of hand-offs and lead time to production.",
            format: "2–4 months",
          },
          {
            title: "Leadership development and hiring",
            text: "One-on-one mentoring for CTOs and VPs of Engineering, a programme for engineering managers, and help with hiring for key roles: the process, taking part in assessment, and a succession plan.",
            format: "1:1 monthly · cohort 3–6 months",
          },
        ],
        note: "IT project rescue, fractional CTO and Scaled Agile are run as engagements with a defined start — see below.",
      },
    ] as Pillar[],
  },

  // Engagements: concrete ways to start, grouped by the pillar they lead into.
  entries: {
    kicker: "Engagements",
    title: "Start with one concrete step,",
    accent: "grow into a partnership.",
    lead: "Each engagement has a defined result, the data it needs and a clear handover. Timeframes are typical and run from the moment we have access to the people and the data.",
    leadsTo: "Leads into",
    cta: "Ask about this",
    groups: [
      {
        id: "ai",
        pillar: "AI in practice",
        icon: "spark",
        items: [
          {
            id: "ai-health-check",
            title: "AI system review",
            time: "2 weeks",
            text: "For CTOs and product owners after a pilot. One system or process, a test sample of real cases: answer quality, cost per request, latency, security and monitoring. You get a list of fixes ranked by impact and a recommendation for the next step.",
            icon: "pulse",
          },
          {
            id: "ai-sprint",
            title: "AI Sprint",
            time: "5 days",
            text: "One process, an agreed data sample and a limited prototype with a test result, so the build-or-not decision rests on evidence. It needs a sponsor, access to data, an approved environment and no complex integration; without data, we start with a diagnosis.",
            icon: "bolt",
          },
          {
            id: "ai-coding-pilot",
            title: "AI coding assistants pilot",
            time: "4–6 weeks",
            text: "Security and code-quality rules, then a pilot on comparable work: lead time for changes, rework after review and regressions, measured against a baseline. You see whether the gain is real.",
            icon: "chart",
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
            text: "For the CEO, CIO or sponsor of a late or over-budget project. An independent diagnosis and a 30/60/90-day recovery plan you can defend in front of the board. Leading the recovery is a separate next stage.",
            icon: "lifebuoy",
          },
          {
            id: "fractional-cto",
            title: "Fractional CTO",
            time: "from 2 days a month",
            text: "Senior technology leadership without a full-time hire: architecture, priorities, the team and delivery, decided together with you in a fixed rhythm. A broader mandate needs more time each month, agreed up front.",
            icon: "compass",
          },
          {
            id: "scaled-agile",
            title: "Scaled Agile (SAFe®)",
            time: "first ART in 8–12 weeks",
            text: "For several teams working on one product. After assessing readiness, the mandate and team availability: value streams and the launch of the first Agile Release Train (ART) with its first PI Planning.",
            icon: "train",
          },
        ] as Entry[],
      },
    ],
    // Engagements that serve both pillars.
    shared: {
      title: "For both pillars",
      items: [
        {
          id: "due-diligence",
          title: "Technical due diligence, including AI",
          time: "2–4 weeks",
          text: "For VC and PE funds: technology, architecture, team, vendor dependence and costs — and whether the company's AI is a real advantage or a wrapper around someone else's model. A risk register and a summary for the investment committee; the scope depends on access to data.",
          icon: "search",
        },
        {
          id: "cost-optimisation",
          title: "Cloud and AI cost optimisation",
          time: "3–6 weeks",
          text: "A review of your cloud and AI model bills, with savings you can implement and measure. If the fee is linked to savings, we first agree the baseline, volumes, discounts, cost of change, measurement period and quality.",
          icon: "chart",
        },
        {
          id: "rd-review",
          title: "Technical R&D review (Poland)",
          time: "1–2 weeks",
          text: "For companies taxed in Poland: I help IT and R&D teams reconstruct and document how the work on software was done — project cards, a list of evidence sources and the gaps to fill. The material goes to you and your tax adviser for a separate assessment.",
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
          "An AI use policy and an initial AI Act risk classification",
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
      "For companies taxed in Poland, creative and systematic development work on software and AI may meet the definition of development work under Polish tax law. Each project is assessed individually; routine changes and maintenance do not qualify. I plan such projects so that, from day one, the technical work is documented in the way an R&D tax relief (ulga B+R) claim requires.",
      "The split of roles is clear. I describe the technical problem, the uncertainty and how the work progressed, and identify the documents and the gaps. A licensed Polish tax adviser assesses the tax effects, the qualifying costs and how to claim the relief.",
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
      { title: "Linked to results", text: "For cost optimisation: a fee linked to savings measured against an agreed baseline." },
      { title: "Interim", text: "A leadership role for a defined period, with the mandate and availability agreed up front." },
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
        q: "When does it make sense to get in touch?",
        a: "When you already have a technical team and face a concrete decision: whether to scale an AI pilot, how to regain control of a project, or how to fill a gap in technology leadership. I work with companies only (B2B), from startups to large organisations.",
      },
      {
        q: "How do we agree on the cost of working together?",
        a: "After the first call I propose a scope and a quote in writing, matched to your situation. Engagements have a defined scope and result, so you know up front what you get.",
      },
      {
        q: "Do you only advise, or do you help build AI systems?",
        a: "Both. I design the architecture, set the quality criteria and lead the build with your team. Who writes the code, who maintains the system and how it is handed over are agreed before we start.",
      },
      {
        q: "Which AI model should we use?",
        a: "It depends on the task and on your requirements for quality, cost, latency and data. I choose based on tests on your own cases, not on public rankings — and often different tasks get different models.",
      },
      {
        q: "What about data security in AI projects?",
        a: "It is the first topic in every project: choosing models and where data is processed, access rules, confidentiality and how the model provider may use the data. I help put in place the technical measures for GDPR and the EU AI Act and document the roles; the legal assessment is agreed with your lawyers.",
      },
      {
        q: "Do you work with clients outside Poland?",
        a: "Yes. I have spent most of my career in international, distributed teams. I work remotely and on site.",
      },
    ],
  },

  contact: {
    title: "Let's talk about your project.",
    text: "Write a few sentences about your situation: what you need to decide and by when. I will reply and suggest a time for a 30-minute call.",
    subject: "30-minute call",
    button: "Email me about a call",
    copy: "Copy address",
    copied: "Copied",
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
    effect: "Estimated tax reduction, with the full deduction and enough income",
    costs: "Qualifying costs entered:",
    deduction: "Additional deduction from the tax base:",
    invalid: "Correct the highlighted amount to see the result.",
    cit9Link: "CIT information on podatki.gov.pl",
    disclaimer:
      "A simulation for one tax year for a standard taxpayer without research and development centre (CBR) status, not tax advice. It assumes the costs qualify and that there is enough income to absorb the whole deduction — for CIT, income from sources other than capital gains; for PIT, income from business activity. An unused part can be carried forward to the next six tax years. Whether the work and costs qualify depends on the nature of the work, its documentation and the taxpayer's situation, and is assessed by a licensed tax adviser. Progressive PIT is not modelled.",
    errors: {
      empty: "Enter an amount (0 if none).",
      negative: "The amount cannot be negative.",
      mixed: "Use one thousands separator throughout, e.g. 1 234 567 or 1,234,567 (whole PLN, no decimals).",
      format: "Enter the amount in whole PLN, e.g. 500 000.",
      max: "Amounts above PLN 1 billion are not supported.",
    },
  },

  ui: {
    bookCall: "Discuss a project",
    skip: "Skip to content",
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
      "Timeframes are typical project durations, counted from access to the people and data; they depend on scope, team readiness and the availability of a sponsor on your side.",
    heroAlt: "Paweł Bajorek, founder of Pristis Management",
    // Language switch: shown in the header, leads to the other language.
    switchLabel: "PL",
    switchTitle: "Wersja polska",
  },
};

export type Content = typeof en;
