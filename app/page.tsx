import Image from "next/image";
import BrCalculator from "./components/BrCalculator";
import Icon from "./components/Icon";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import {
  about,
  aiExpertise,
  aiPrinciples,
  aiRd,
  asset,
  bookshelf,
  industries,
  contact,
  facts,
  faq,
  flagship,
  hero,
  mailto,
  models,
  packages,
  pillars,
  problems,
  results,
  orgPrinciples,
  site,
  steps,
  ui,
} from "./site";

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

export default function Home() {
  return (
    <>
      <SiteHeader />
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
                    key={e.offer}
                    href="#packages"
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

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionTitle
            kicker={flagship.kicker}
            title={
              <>
                {`${flagship.title} `}<em className="text-copper">{flagship.accent}</em>
              </>
            }
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {flagship.items.map((f, i) => (
              <article
                key={f.title}
                className="grain flex flex-col rounded-[2rem] bg-navy p-7 text-white sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-2xl bg-copper-light p-3 text-ink">
                    <Icon name={f.icon} />
                  </span>
                  <span className="font-serif text-lg text-white/50">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl font-medium leading-tight sm:text-3xl lg:text-2xl">{f.title}</h3>
                <p className="mt-3 font-serif text-lg italic text-copper-light">{f.tagline}</p>
                <p className="mt-5 leading-relaxed text-white/75">{f.text}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {f.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[0.95rem] text-white/90">
                      <span className="mt-0.5 shrink-0 text-copper-light">
                        <Icon name="check" className="size-5" />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-copper-light">{f.format}</p>
                  <a
                    href={mailto(f.title)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-copper-light"
                  >
                    {flagship.cta} <Icon name="arrow" className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Starter packages: the entry offers, right after the main services */}
          <div id="packages" className="mb-8 mt-24">
            <Kicker>{packages.kicker}</Kicker>
            <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">{packages.title}</h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {packages.items.map((p) => (
              <div key={p.title} className="flex flex-col rounded-3xl bg-ink p-6 text-white">
                <div className="flex items-start justify-between">
                  <span className="text-copper-light">
                    <Icon name={p.icon} className="size-7" />
                  </span>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/80">
                    {p.time}
                  </span>
                </div>
                <h4 className="mt-6 font-serif text-2xl font-medium">{p.title}</h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">{p.text}</p>
                <a
                  href={mailto(p.title)}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-copper-light hover:text-white"
                >
                  {packages.cta} <Icon name="arrow" className="size-4" />
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">{ui.timeNote}</p>

          <h3 className="mb-10 mt-24 font-serif text-3xl font-medium tracking-tight sm:text-4xl">{flagship.moreTitle}</h3>
          <div className="space-y-16">
            {pillars.map((p) => (
              <div key={p.id} className="grid gap-8 border-t border-ink/15 pt-10 lg:grid-cols-[0.8fr_1.6fr]">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex rounded-2xl bg-ink p-3 text-copper-light">
                      <Icon name={p.icon} />
                    </span>
                    <span className="font-serif text-lg text-muted">{p.number}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-3xl font-medium leading-tight">{p.title}</h3>
                  <p className="mt-3 text-muted">{p.lead}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {p.services.map((s) => (
                    <div
                      key={s.title}
                      className="flex flex-col rounded-3xl border border-line bg-white/50 p-6 transition hover:border-copper/50 hover:bg-white"
                    >
                      <h4 className="text-lg font-bold leading-snug">{s.title}</h4>
                      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-muted">{s.text}</p>
                      <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-copper">{s.format}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI expertise and how I approach AI */}
        <section id="ai" className="bg-stone/60">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <SectionTitle
              kicker={aiExpertise.kicker}
              title={
                <>
                  {`${aiExpertise.title} `}<em className="text-copper">{aiExpertise.accent}</em>
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
                        <span className="mt-0.5 shrink-0 text-copper-light">
                          <Icon name="check" className="size-5" />
                        </span>
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
                {`${aiPrinciples.title} `}<em className="text-copper">{aiPrinciples.accent}</em>
              </h3>
            </div>
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {aiPrinciples.items.map((p, i) => (
                <li key={p.title} className="flex flex-col rounded-3xl bg-paper p-6">
                  <span className="font-serif text-lg text-copper">0{i + 1}</span>
                  <h3 className="mt-3 font-serif text-xl font-medium leading-snug">{p.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* AI + R&D relief */}
        <section id="ai-rd" className="grain bg-navy text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <Kicker light>{aiRd.kicker}</Kicker>
              <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
                {`${aiRd.title} `}<em className="text-copper-light">{aiRd.accent}</em>
              </h2>
              {aiRd.text.map((t) => (
                <p key={t} className="mt-6 text-lg leading-relaxed text-white/75">
                  {t}
                </p>
              ))}
              <ul className="mt-8 space-y-3">
                {aiRd.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="mt-0.5 shrink-0 text-copper-light">
                      <Icon name="check" className="size-5" />
                    </span>
                    <span className="text-white/90">{pt}</span>
                  </li>
                ))}
              </ul>
              <a
                href={mailto(aiRd.ctaSubject)}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-copper-light px-6 py-3.5 font-semibold text-ink transition hover:bg-white"
              >
                {aiRd.cta}
                <Icon name="arrow" className="size-4" />
              </a>
            </div>
            <BrCalculator />
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
              {about.text.map((t) => (
                <p key={t} className="mt-6 text-lg leading-relaxed text-white/80">
                  {t}
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold transition hover:bg-white hover:text-ink"
                >
                  {contact.button} <Icon name="arrow" className="size-4" />
                </a>
                <a href={mailto(contact.subject)} className="break-all text-center text-sm text-white/85 hover:text-white">
                  {site.email}
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 px-6 py-3.5 text-center font-semibold transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a href={asset("/privacy/")} className="text-center text-xs text-white/75 underline hover:text-white">
                  {contact.privacy}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
