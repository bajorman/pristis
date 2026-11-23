import Image from "next/image";
import type { Content } from "../content/en";
import { asset, entryAnchor, mailto, paths, site } from "../site";
import BrCalculator from "./BrCalculator";
import Icon from "./Icon";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.22em] ${light ? "text-copper-light" : "text-copper"}`}>
      {children}
    </p>
  );
}

function SectionTitle({ kicker, title, light = false }: { kicker: string; title: React.ReactNode; light?: boolean }) {
  return (
    <div className="mb-12 max-w-3xl">
      <Kicker light={light}>{kicker}</Kicker>
      <h2
        className={`mt-3 font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function Check() {
  return (
    <span className="mt-0.5 shrink-0 text-copper-light">
      <Icon name="check" className="size-5" />
    </span>
  );
}

// The home page, rendered once per language from that language's copy.
export default function HomePage({ t }: { t: Content }) {
  const { hero, facts, industries, problems, pillars, entries, aiExpertise, aiPrinciples, aiRd } = t;
  const { results, steps, models, orgPrinciples, about, bookshelf, faq, contact, ui } = t;
  const other = t.locale === "en" ? "pl" : "en";

  return (
    <>
      <SiteHeader
        nav={t.nav}
        ui={ui}
        primary={hero.primary}
        switchHref={asset(paths[other].home)}
        switchLang={other}
      />
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
            <div>
              <Kicker>{hero.eyebrow}</Kicker>
              <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {`${hero.title} `}
                <em className="font-normal text-copper">{hero.accent}</em>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{hero.lead}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  data-umami-event="Request call"
                  data-umami-event-location="hero"
                  className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3.5 font-semibold text-white transition hover:bg-ink"
                >
                  {hero.primary}
                  <Icon name="arrow" className="size-4" />
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-ink/20 px-6 py-3.5 font-semibold transition hover:border-ink"
                >
                  {hero.secondary}
                </a>
              </div>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.22em] text-muted">{hero.entriesTitle}</p>
              <div className="mt-3 grid max-w-xl gap-3 sm:grid-cols-2">
                {hero.entries.map((e) => (
                  <a
                    key={e.id}
                    href={`#${entryAnchor(e.id)}`}
                    data-umami-event="Hero entry"
                    data-umami-event-offer={e.id}
                    className="group flex items-start gap-3 rounded-2xl border border-line bg-white/50 p-4 transition hover:border-copper/60 hover:bg-white"
                  >
                    <span className="mt-0.5 shrink-0 text-copper">
                      <Icon name={e.icon} className="size-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-muted">{e.note}</span>
                      <span className="mt-0.5 block font-semibold text-ink group-hover:text-copper">{e.offer}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              {/* Copper block behind the portrait. */}
              <div aria-hidden="true" className="absolute -bottom-4 -right-4 left-10 top-16 rounded-[2rem] bg-copper" />
              <Image
                src={asset("/images/pawel-hero.jpg")}
                alt={ui.heroAlt}
                width={900}
                height={1214}
                preload
                sizes="(min-width: 1024px) 420px, 90vw"
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-2xl shadow-ink/20"
              />
              <div className="absolute -left-3 bottom-8 rounded-2xl bg-paper px-5 py-4 shadow-xl shadow-ink/10 sm:-left-8">
                <p className="font-serif text-lg font-semibold leading-tight">{about.name}</p>
                <p className="text-sm text-muted">{ui.heroCaption}</p>
              </div>
            </div>
          </div>

          {/* Facts strip */}
          <div className="border-y border-line">
            <dl className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`py-7 pr-4 ${i % 2 === 1 ? "pl-4 sm:pl-6" : ""} ${
                    i > 0 ? "lg:border-l lg:border-line lg:pl-6" : ""
                  } ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}
                >
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="block font-serif text-3xl font-semibold text-ink sm:text-4xl">{f.value}</span>
                    <span className="mt-1 block text-sm text-muted">{f.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Where the experience comes from */}
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-3 px-4 py-8 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">{ui.workedWith}</p>
            {industries.map((c) => (
              <span key={c} className="font-serif text-xl font-medium text-ink/55">
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Problems */}
        <section className="bg-stone/60">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionTitle kicker={problems.kicker} title={problems.title} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {problems.items.map((p) => (
                <figure key={p.q} className="flex flex-col rounded-3xl bg-paper p-7">
                  <blockquote className="font-serif text-xl leading-snug text-ink">{p.q}</blockquote>
                  <figcaption className="mt-4 text-muted">{p.a}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* The two pillars */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionTitle
            kicker={pillars.kicker}
            title={
              <>
                {`${pillars.title} `}
                <em className="text-copper">{pillars.accent}</em>
              </>
            }
          />
          <p className="-mt-6 mb-12 max-w-3xl text-lg leading-relaxed text-muted">{pillars.lead}</p>
          <div className="grid gap-6 lg:grid-cols-2">
            {pillars.items.map((p) => (
              <article key={p.id} id={p.id} className="grain flex flex-col rounded-[2rem] bg-navy p-7 text-white sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-2xl bg-copper-light p-3 text-ink">
                    <Icon name={p.icon} />
                  </span>
                  <span className="font-serif text-lg text-white/50">{p.number}</span>
                </div>
                <h3 className="mt-6 font-serif text-3xl font-medium leading-tight sm:text-4xl">{p.title}</h3>
                <p className="mt-3 font-serif text-lg italic text-copper-light">{p.tagline}</p>
                <p className="mt-5 leading-relaxed text-white/75">{p.lead}</p>
                <ul className="mt-8 flex-1 divide-y divide-white/10 border-y border-white/10">
                  {p.services.map((s) => (
                    <li key={s.title} className="py-4">
                      <div className="flex gap-3">
                        <Check />
                        <div>
                          <h4 className="font-semibold text-white">{s.title}</h4>
                          <p className="mt-1 text-[0.95rem] leading-relaxed text-white/70">{s.text}</p>
                          <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-copper-light">
                            {s.format}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm italic leading-relaxed text-white/60">{p.note}</p>
                <div className="mt-6 border-t border-white/10 pt-6">
                  <a
                    href={mailto(p.title)}
                    data-umami-event="Service enquiry"
                    data-umami-event-service={p.id}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-copper-light"
                  >
                    {pillars.cta} <Icon name="arrow" className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Ways in: entry points grouped by the pillar they lead into */}
        <section id="start" className="bg-stone/60">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <SectionTitle
              kicker={entries.kicker}
              title={
                <>
                  {`${entries.title} `}
                  <em className="text-copper">{entries.accent}</em>
                </>
              }
            />
            <p className="-mt-6 mb-12 max-w-3xl text-lg leading-relaxed text-muted">{entries.lead}</p>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
              {entries.groups.map((g) => (
                <div key={g.pillar}>
                  <div className="mb-5 flex items-center gap-3 border-b-2 border-ink pb-4">
                    <span className="inline-flex rounded-xl bg-ink p-2 text-copper-light">
                      <Icon name={g.icon} className="size-5" />
                    </span>
                    <p className="text-sm text-muted">
                      {entries.leadsTo}{" "}
                      <span className="font-serif text-xl font-medium text-ink">{g.pillar}</span>
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {g.items.map((e) => (
                      <div
                        key={e.id}
                        id={entryAnchor(e.id)}
                        className="flex gap-4 rounded-3xl bg-paper p-5 ring-copper ring-offset-4 ring-offset-stone target:ring-2 sm:p-6"
                      >
                        <span className="mt-0.5 shrink-0 text-copper">
                          <Icon name={e.icon} className="size-6" />
                        </span>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <h3 className="font-serif text-xl font-medium">{e.title}</h3>
                            <span className="text-xs font-bold uppercase tracking-[0.14em] text-copper">{e.time}</span>
                          </div>
                          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{e.text}</p>
                          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                            <a
                              href={mailto(e.title)}
                              data-umami-event="Package enquiry"
                              data-umami-event-package={e.id}
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-copper"
                            >
                              {entries.cta} <Icon name="arrow" className="size-4" />
                            </a>
                            {e.link && (
                              <a href={e.link.href} className="text-sm font-semibold text-copper hover:text-ink">
                                {e.link.label}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">{ui.timeNote}</p>
          </div>
        </section>

        {/* AI expertise and how I approach AI */}
        <section id="ai" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <SectionTitle
            kicker={aiExpertise.kicker}
            title={
              <>
                {`${aiExpertise.title} `}
                <em className="text-copper">{aiExpertise.accent}</em>
              </>
            }
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {aiExpertise.items.map((e) => (
              <article key={e.title} className="grain flex flex-col rounded-[2rem] bg-navy p-7 text-white sm:p-9">
                <span className="inline-flex self-start rounded-2xl bg-copper-light p-3 text-ink">
                  <Icon name={e.icon} />
                </span>
                <h3 className="mt-6 font-serif text-3xl font-medium leading-tight">{e.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-white/80">{e.text}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[0.95rem] text-white/90">
                      <Check />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mb-8 mt-20">
            <Kicker>{aiPrinciples.kicker}</Kicker>
            <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              {`${aiPrinciples.title} `}
              <em className="text-copper">{aiPrinciples.accent}</em>
            </h3>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aiPrinciples.items.map((p, i) => (
              <li key={p.title} className="flex flex-col rounded-3xl border border-line bg-white/50 p-6">
                <span className="font-serif text-lg text-copper">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-xl font-medium leading-snug">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* AI + R&D relief */}
        <section id="ai-rd" className="grain bg-navy text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <Kicker light>{aiRd.kicker}</Kicker>
              <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
                {`${aiRd.title} `}
                <em className="text-copper-light">{aiRd.accent}</em>
              </h2>
              {aiRd.text.map((p) => (
                <p key={p} className="mt-6 text-lg leading-relaxed text-white/75">
                  {p}
                </p>
              ))}
              <ul className="mt-8 space-y-3">
                {aiRd.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <Check />
                    <span className="text-white/90">{pt}</span>
                  </li>
                ))}
              </ul>
              <a
                href={mailto(aiRd.ctaSubject)}
                data-umami-event="R&D review request"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-copper-light px-6 py-3.5 font-semibold text-ink transition hover:bg-white"
              >
                {aiRd.cta}
                <Icon name="arrow" className="size-4" />
              </a>
            </div>
            <BrCalculator t={t.calc} />
          </div>
        </section>

        {/* Results */}
        <section id="results" className="bg-stone/60">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <SectionTitle kicker={results.kicker} title={results.title} />
            <p className="-mt-6 mb-10 max-w-3xl text-muted">{results.note}</p>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {results.items.map((r) => (
                <div key={r.title} className="bg-paper p-7">
                  <p className="font-serif text-4xl font-semibold text-copper">{r.value}</p>
                  <h3 className="mt-3 font-bold">{r.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How I work */}
        <section id="how-i-work" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionTitle kicker={steps.kicker} title={steps.title} />
          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.items.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-lg text-copper">0{i + 1}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{s.when}</span>
                </div>
                <h3 className="mt-3 font-serif text-2xl font-medium">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 rounded-3xl border border-line p-6 sm:p-8">
            <Kicker>{models.kicker}</Kicker>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {models.items.map((m) => (
                <div key={m.title}>
                  <h3 className="font-bold">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted">{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 mt-20">
            <Kicker>{orgPrinciples.kicker}</Kicker>
            <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">{orgPrinciples.title}</h3>
          </div>
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {orgPrinciples.items.map((p, i) => (
              <li key={p.title} className="flex flex-col rounded-3xl border border-line bg-white/50 p-6">
                <span className="font-serif text-lg text-copper">0{i + 1}</span>
                <h4 className="mt-3 font-serif text-xl font-medium leading-snug">{p.title}</h4>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* About */}
        <section id="about" className="grain bg-ink text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="mx-auto w-full max-w-sm">
              <Image
                src={asset("/images/pawel-portret.jpg")}
                alt={about.name}
                width={800}
                height={800}
                sizes="(min-width: 1024px) 380px, 90vw"
                className="aspect-square w-full rounded-[2rem] object-cover"
              />
              <p className="mt-6 border-l-2 border-copper-light pl-4 text-sm italic leading-relaxed text-white/65">
                {about.nameNote}
              </p>
            </div>
            <div>
              <Kicker light>{about.kicker}</Kicker>
              <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">{about.name}</h2>
              <p className="mt-2 text-white/60">{about.role}</p>
              {about.text.map((p) => (
                <p key={p} className="mt-6 text-lg leading-relaxed text-white/80">
                  {p}
                </p>
              ))}
              <h3 className="mt-10 text-xs font-bold uppercase tracking-[0.22em] text-copper-light">
                {about.credentialsTitle}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.credentials.map((c) => (
                  <li key={c} className="rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-white/85">
                    {c}
                  </li>
                ))}
              </ul>
              <a
                href={site.linkedin}
                data-umami-event="LinkedIn"
                data-umami-event-location="about"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 font-semibold text-copper-light hover:text-white"
              >
                {about.linkedin} <Icon name="arrow" className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Bookshelf */}
        <section className="bg-stone/60">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionTitle kicker={bookshelf.kicker} title={bookshelf.title} />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {bookshelf.items.map((b) => (
                <li key={b.title} className="flex flex-col rounded-3xl bg-paper p-6">
                  <span aria-hidden="true" className="h-1.5 w-10 rounded-full bg-copper" />
                  <h3 className="mt-5 font-serif text-xl font-medium italic leading-snug">{b.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-ink/70">{b.author}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{b.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionTitle kicker={faq.kicker} title={faq.title} />
          <div className="divide-y divide-line border-y border-line">
            {faq.items.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-2xl leading-none text-copper transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-4 pb-20 sm:px-6">
          <div className="grain mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-copper px-6 py-16 text-white sm:px-14 sm:py-20">
            <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
                  {contact.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg text-white/85">{contact.text}</p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={mailto(contact.subject)}
                  data-umami-event="Email me"
                  data-umami-event-location="contact-button"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold transition hover:bg-white hover:text-ink"
                >
                  {contact.button} <Icon name="arrow" className="size-4" />
                </a>
                <a
                  href={mailto(contact.subject)}
                  data-umami-event="Email me"
                  data-umami-event-location="contact-address"
                  className="break-all text-center text-sm text-white/85 hover:text-white"
                >
                  {site.email}
                </a>
                <a
                  href={site.linkedin}
                  data-umami-event="LinkedIn"
                  data-umami-event-location="contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 px-6 py-3.5 text-center font-semibold transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a
                  href={asset(paths[t.locale].privacy)}
                  className="text-center text-xs text-white/75 underline hover:text-white"
                >
                  {contact.privacy}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter t={t} />
    </>
  );
}
