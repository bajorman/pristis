import Icon from "./components/Icon";
import SiteHeader from "./components/SiteHeader";
import { about, audiences, hero, services, site, steps } from "./site";

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-widest text-accent">{kicker}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="bg-navy text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">{hero.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{hero.lead}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-accent px-6 py-3 font-bold text-white hover:brightness-110">
                Book an intro call
              </a>
              <a href="#services" className="rounded-full border border-white/30 px-6 py-3 font-bold hover:bg-white/10">
                See services
              </a>
            </div>
          </div>
        </section>

        {/* Who we help */}
        <section id="for-whom" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle kicker="Who we help" title="Technology leadership where it matters most" />
          <div className="grid gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <div key={a.title} className="rounded-2xl border border-black/10 p-6">
                <h3 className="text-lg font-bold text-navy">{a.title}</h3>
                <p className="mt-3 text-muted">{a.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <SectionTitle kicker="Services" title="How we can help" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                    <Icon name={s.icon} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section id="how" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle kicker="How we work" title="Three simple steps" />
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="relative rounded-2xl border border-black/10 p-6">
                <span className="text-4xl font-bold text-accent/40">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* About */}
        <section id="about" className="bg-surface">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-[280px_1fr]">
            {/* Monogram until there is a photo. */}
            <div
              aria-hidden="true"
              className="flex aspect-square items-center justify-center rounded-2xl bg-navy text-7xl font-light tracking-wider text-white"
            >
              {about.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">About</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy">{about.name}</h2>
              <p className="text-muted">{about.role}</p>
              {about.text.map((p) => (
                <p key={p} className="mt-4 text-lg">{p}</p>
              ))}
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-bold text-accent hover:underline">
                LinkedIn profile →
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-navy text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&apos;s talk about your challenges</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/75">
              Write a few words about your situation and we will set up an intro call.
            </p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Intro call")}`}
              className="mt-8 inline-block max-w-full break-all rounded-full bg-accent px-8 py-3 font-bold hover:brightness-110"
            >
              {site.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-4 py-8 text-sm text-muted sm:px-6">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-navy">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}
