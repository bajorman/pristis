import type { Metadata } from "next";
import Logo from "../components/Logo";
import SiteFooter from "../components/SiteFooter";
import { asset, company, site, ui } from "../site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${company.legalName} (${site.name}) handles personal data.`,
  alternates: { canonical: "/privacy/" },
};

// Privacy notice (GDPR art. 13) and the business details required by the
// Polish Act on providing services by electronic means (art. 5). The site uses
// no cookies or analytics; the R&D calculator runs only in the browser.
const updated = "20 November 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl font-medium">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink/80">{children}</div>
    </section>
  );
}

export default function Privacy() {
  const email = (
    <a href={`mailto:${site.email}`} className="text-copper underline">
      {site.email}
    </a>
  );
  return (
    <>
      <header className="border-b border-line/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6">
          <a href={asset("/")} aria-label={ui.home}>
            <Logo />
          </a>
          <a href={asset("/")} className="text-sm font-semibold text-muted hover:text-ink">
            ← {ui.backHome}
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-copper">Privacy</p>
        <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">How I handle your data</h1>
        <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>

        <Section title="Who is responsible for your data">
          <p>
            The controller of your personal data is {company.legalName}, trading as {site.name}, NIP {company.nip}, REGON {company.regon}, entered in the {company.register}. You can
            contact me at {email}.
          </p>
        </Section>

        <Section title="What data I process and why">
          <p>
            When you contact me by e-mail or through LinkedIn, I process the data you send: usually your name, e-mail
            address, company, role and the content of your message.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              If you contact me on behalf of a company or another organisation, I process your data to reply to the
              enquiry, to discuss and carry out cooperation with that organisation, and to keep in touch with
              business contacts — my legitimate interest, Article 6(1)(f) GDPR.
            </li>
            <li>
              If you contact me on your own behalf, for example as a sole trader or an individual client, I process
              your data to reply and to take steps at your request before entering into a contract, and then to
              perform it — Article 6(1)(b) GDPR.
            </li>
            <li>
              To establish, pursue or defend claims — my legitimate interest, Article 6(1)(f) GDPR.
            </li>
            <li>
              To meet tax and accounting obligations once we work together — Article 6(1)(&#8204;c) GDPR.
            </li>
          </ul>
          <p>
            Where processing is based on my legitimate interest, you can object to it at any time on grounds
            relating to your particular situation.
          </p>
          <p>
            Providing your data is voluntary, but without it I cannot reply to you. I do not use your data for
            automated decision-making or profiling.
          </p>
        </Section>

        <Section title="This website">
          <p>
            This website does not use cookies. The R&amp;D relief simulation runs only in your browser: the amounts you
            enter are not sent to me or stored anywhere.
          </p>
          <p>
            To understand how the website is used, I use Umami Cloud, a privacy-focused analytics service provided by
            Umami Software, Inc. It does not use cookies, does not store anything on your device and does not track
            you across other websites. It records anonymised, aggregated information: pages visited, the referring
            website, browser, operating system, device type, country, and clicks on key buttons and links (for
            example &ldquo;Request a call&rdquo; or a starter package). Amounts entered in the calculator are never
            recorded. The analytics data is stored in Umami&apos;s EU data region and kept for 6 months. The legal
            basis is my legitimate interest in understanding how the website is used and improving it (Article
            6(1)(f) GDPR). Umami acts as my processor under its{" "}
            <a
              href="https://umami.is/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper underline"
            >
              privacy policy
            </a>{" "}
            and data processing agreement; some supporting services (such as content delivery and security) may
            involve processing outside the EU, as described below.
          </p>
          <p>
            The website is hosted on GitHub Pages (GitHub, Inc.). When you visit it, GitHub records visitors&apos; IP
            addresses for security purposes, as stated in its documentation. I do not have access to these logs and
            do not use them. See the{" "}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper underline"
            >
              GitHub privacy statement
            </a>
            .
          </p>
        </Section>

        <Section title="How long I keep your data">
          <p>
            I keep correspondence for as long as needed to handle your enquiry. If no cooperation follows, I keep it
            for no longer than 12 months after our last contact, unless it is needed longer to establish, pursue or
            defend claims. Contract and accounting documents are kept for the periods required by law.
          </p>
        </Section>

        <Section title="Who receives your data">
          <p>
            Your data may be processed by providers of e-mail, IT, hosting and website analytics (Umami) services and by my accounting office,
            acting on my behalf and under appropriate agreements. In R&amp;D tax relief projects, data may be shared
            with a licensed tax adviser involved in the engagement.
          </p>
          <p>
            Where a service provider processes data outside the European Economic Area, the transfer is based on an
            adequacy decision of the European Commission (such as the EU–US Data Privacy Framework) or on standard
            contractual clauses. You can obtain a copy of these safeguards by writing to {email}.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            You have the right to access your data, to have it corrected or erased, to restrict its processing, to
            data portability, and to object to processing based on legitimate interest. To exercise these rights,
            write to {email}.
          </p>
          <p>
            You also have the right to lodge a complaint with the President of the Personal Data Protection Office
            (Prezes Urzędu Ochrony Danych Osobowych), ul. Stawki 2, 00-193 Warszawa, Poland.
          </p>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}
