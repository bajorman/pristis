import type { Content } from "../content/en";
import { asset, company, paths, site } from "../site";
import Logo from "./Logo";
import SiteFooter from "./SiteFooter";

// Privacy notice (GDPR art. 13) in both languages. The legal text is kept as
// JSX per language rather than in the copy files, because it mixes links and
// the e-mail address into the paragraphs. The R&D calculator runs only in the
// browser; analytics is cookieless (Umami).
const updated = { en: "23 November 2026", pl: "23 listopada 2026" };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl font-medium">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-ink/80">{children}</div>
    </section>
  );
}

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-copper underline">
      {children}
    </a>
  );
}

const UMAMI = "https://umami.is/privacy";
const GITHUB = "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement";

function BodyEn({ email }: { email: React.ReactNode }) {
  return (
    <>
      <Section title="Who is responsible for your data">
        <p>
          The controller of your personal data is {company.legalName}, trading as {site.name}, entered in the CEIDG
          (Central Register and Information on Economic Activity). You can contact me at {email}.
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
            enquiry, to discuss and carry out cooperation with that organisation, and to keep in touch with business
            contacts — my legitimate interest, Article 6(1)(f) GDPR.
          </li>
          <li>
            If you contact me on your own behalf, for example as a sole trader or an individual client, I process your
            data to reply and to take steps at your request before entering into a contract, and then to perform it —
            Article 6(1)(b) GDPR.
          </li>
          <li>To establish, pursue or defend claims — my legitimate interest, Article 6(1)(f) GDPR.</li>
          <li>To meet tax and accounting obligations once we work together — Article 6(1)(&#8204;c) GDPR.</li>
        </ul>
        <p>
          Where processing is based on my legitimate interest, you can object to it at any time on grounds relating to
          your particular situation.
        </p>
        <p>
          Providing your data is voluntary, but without it I cannot reply to you. I do not use your data for automated
          decision-making or profiling.
        </p>
      </Section>

      <Section title="This website">
        <p>
          This website does not use cookies. The R&amp;D relief simulation runs only in your browser: the amounts you
          enter are not sent to me or stored anywhere.
        </p>
        <p>
          To understand how the website is used, I use Umami Cloud, a privacy-focused analytics service provided by
          Umami Software, Inc. It does not use cookies, does not store anything on your device and does not track you
          across other websites. It records anonymised, aggregated information: pages visited, the referring website,
          browser, operating system, device type, country, the language version viewed, and clicks on key buttons and
          links (for example &ldquo;Request a call&rdquo; or a starter package). Amounts entered in the calculator are
          never recorded. The analytics data is stored in Umami&apos;s EU data region and kept for 6 months. The legal
          basis is my legitimate interest in understanding how the website is used and improving it (Article 6(1)(f)
          GDPR). Umami acts as my processor under its <Ext href={UMAMI}>privacy policy</Ext> and data processing
          agreement; some supporting services (such as content delivery and security) may involve processing outside
          the EU, as described below.
        </p>
        <p>
          The website is hosted on GitHub Pages (GitHub, Inc.). When you visit it, GitHub records visitors&apos; IP
          addresses for security purposes, as stated in its documentation. I do not have access to these logs and do
          not use them. See the <Ext href={GITHUB}>GitHub privacy statement</Ext>.
        </p>
      </Section>

      <Section title="How long I keep your data">
        <p>
          I keep correspondence for as long as needed to handle your enquiry. If no cooperation follows, I keep it for
          no longer than 12 months after our last contact, unless it is needed longer to establish, pursue or defend
          claims. Contract and accounting documents are kept for the periods required by law.
        </p>
      </Section>

      <Section title="Who receives your data">
        <p>
          Your data may be processed by providers of e-mail, IT, hosting and website analytics (Umami) services and by
          my accounting office, acting on my behalf and under appropriate agreements. In R&amp;D tax relief projects,
          data may be shared with a licensed tax adviser involved in the engagement.
        </p>
        <p>
          Where a service provider processes data outside the European Economic Area, the transfer is based on an
          adequacy decision of the European Commission (such as the EU–US Data Privacy Framework) or on standard
          contractual clauses. You can obtain a copy of these safeguards by writing to {email}.
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          You have the right to access your data, to have it corrected or erased, to restrict its processing, to data
          portability, and to object to processing based on legitimate interest. To exercise these rights, write to{" "}
          {email}.
        </p>
        <p>
          You also have the right to lodge a complaint with the President of the Personal Data Protection Office
          (Prezes Urzędu Ochrony Danych Osobowych), ul. Stawki 2, 00-193 Warszawa, Poland.
        </p>
      </Section>
    </>
  );
}

function BodyPl({ email }: { email: React.ReactNode }) {
  return (
    <>
      <Section title="Kto odpowiada za Twoje dane">
        <p>
          Administratorem Twoich danych osobowych jest {company.legalName}, działający pod nazwą {site.name}, wpisany
          do Centralnej Ewidencji i Informacji o Działalności Gospodarczej (CEIDG). Możesz się ze mną skontaktować pod
          adresem {email}.
        </p>
      </Section>

      <Section title="Jakie dane przetwarzam i w jakim celu">
        <p>
          Gdy kontaktujesz się ze mną e-mailem lub przez LinkedIn, przetwarzam dane, które przesyłasz: zwykle imię i
          nazwisko, adres e-mail, firmę, stanowisko i treść wiadomości.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Jeśli kontaktujesz się w imieniu firmy lub innej organizacji, przetwarzam dane, aby odpowiedzieć na
            zapytanie, omówić i zrealizować współpracę z tą organizacją oraz utrzymywać kontakty biznesowe – to mój
            prawnie uzasadniony interes, art. 6 ust. 1 lit. f RODO.
          </li>
          <li>
            Jeśli kontaktujesz się we własnym imieniu, np. jako przedsiębiorca jednoosobowy lub klient indywidualny,
            przetwarzam dane, aby odpowiedzieć i podjąć na Twoje żądanie działania przed zawarciem umowy, a następnie
            ją wykonać – art. 6 ust. 1 lit. b RODO.
          </li>
          <li>W celu ustalenia, dochodzenia lub obrony roszczeń – mój prawnie uzasadniony interes, art. 6 ust. 1 lit. f RODO.</li>
          <li>W celu wypełnienia obowiązków podatkowych i rachunkowych, gdy podejmiemy współpracę – art. 6 ust. 1 lit. c RODO.</li>
        </ul>
        <p>
          Jeśli przetwarzanie opiera się na moim prawnie uzasadnionym interesie, możesz w każdej chwili wnieść
          sprzeciw z przyczyn związanych z Twoją szczególną sytuacją.
        </p>
        <p>
          Podanie danych jest dobrowolne, ale bez nich nie mogę Ci odpowiedzieć. Nie wykorzystuję Twoich danych do
          zautomatyzowanego podejmowania decyzji ani profilowania.
        </p>
      </Section>

      <Section title="Ta strona">
        <p>
          Ta strona nie używa plików cookie. Symulacja ulgi B+R działa wyłącznie w Twojej przeglądarce: wpisane kwoty
          nie są do mnie wysyłane ani nigdzie zapisywane.
        </p>
        <p>
          Aby wiedzieć, jak strona jest używana, korzystam z Umami Cloud – usługi analitycznej nastawionej na
          prywatność, świadczonej przez Umami Software, Inc. Nie używa ona plików cookie, nie zapisuje niczego na Twoim
          urządzeniu i nie śledzi Cię na innych stronach. Rejestruje zanonimizowane, zbiorcze informacje: odwiedzone
          strony, stronę, z której przyszedłeś, przeglądarkę, system operacyjny, rodzaj urządzenia, kraj, wersję
          językową oraz kliknięcia kluczowych przycisków i linków (np. „Umów rozmowę” albo wybrany pakiet). Kwoty
          wpisane w kalkulatorze nigdy nie są rejestrowane. Dane analityczne są przechowywane w regionie UE usługi
          Umami przez 6 miesięcy. Podstawą prawną jest mój prawnie uzasadniony interes w rozumieniu, jak strona jest
          używana, i w jej ulepszaniu (art. 6 ust. 1 lit. f RODO). Umami działa jako podmiot przetwarzający na
          podstawie swojej <Ext href={UMAMI}>polityki prywatności</Ext> i umowy powierzenia przetwarzania danych;
          niektóre usługi pomocnicze (np. dostarczanie treści i bezpieczeństwo) mogą wiązać się z przetwarzaniem poza
          UE, jak opisano niżej.
        </p>
        <p>
          Strona jest hostowana w GitHub Pages (GitHub, Inc.). Podczas wizyty GitHub rejestruje adresy IP
          odwiedzających w celach bezpieczeństwa, jak podaje w swojej dokumentacji. Nie mam dostępu do tych logów i z
          nich nie korzystam. Zobacz <Ext href={GITHUB}>oświadczenie GitHub o prywatności</Ext>.
        </p>
      </Section>

      <Section title="Jak długo przechowuję dane">
        <p>
          Korespondencję przechowuję tak długo, jak to potrzebne do obsługi zapytania. Jeśli nie dojdzie do
          współpracy, przechowuję ją nie dłużej niż 12 miesięcy od ostatniego kontaktu, chyba że jest potrzebna dłużej
          do ustalenia, dochodzenia lub obrony roszczeń. Umowy i dokumenty księgowe przechowuję przez okresy wymagane
          prawem.
        </p>
      </Section>

      <Section title="Kto otrzymuje Twoje dane">
        <p>
          Twoje dane mogą przetwarzać dostawcy usług poczty e-mail, IT, hostingu i analityki strony (Umami) oraz moje
          biuro rachunkowe – w moim imieniu i na podstawie odpowiednich umów. W projektach dotyczących ulgi B+R dane
          mogą zostać przekazane licencjonowanemu doradcy podatkowemu zaangażowanemu w zlecenie.
        </p>
        <p>
          Jeśli dostawca usług przetwarza dane poza Europejskim Obszarem Gospodarczym, przekazanie opiera się na
          decyzji Komisji Europejskiej stwierdzającej odpowiedni stopień ochrony (np. EU–US Data Privacy Framework) lub
          na standardowych klauzulach umownych. Kopię tych zabezpieczeń możesz otrzymać, pisząc na adres {email}.
        </p>
      </Section>

      <Section title="Twoje prawa">
        <p>
          Masz prawo dostępu do swoich danych, ich sprostowania lub usunięcia, ograniczenia przetwarzania,
          przenoszenia danych oraz sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie. Aby
          skorzystać z tych praw, napisz na adres {email}.
        </p>
        <p>
          Masz też prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
        </p>
      </Section>
    </>
  );
}

const heading = {
  en: { kicker: "Privacy", title: "How I handle your data", updated: "Last updated:" },
  pl: { kicker: "Prywatność", title: "Jak przetwarzam Twoje dane", updated: "Ostatnia aktualizacja:" },
};

export default function PrivacyPage({ t }: { t: Content }) {
  const l = t.locale;
  const other = l === "en" ? "pl" : "en";
  const email = (
    <a href={`mailto:${site.email}`} className="text-copper underline">
      {site.email}
    </a>
  );
  return (
    <>
      <header className="border-b border-line/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6">
          <a href={asset(paths[l].home)} aria-label={t.ui.home}>
            <Logo />
          </a>
          <div className="flex items-center gap-4">
            <a
              href={asset(paths[other].privacy)}
              hrefLang={other}
              lang={other}
              title={t.ui.switchTitle}
              aria-label={t.ui.switchTitle}
              className="rounded-full border border-line px-3 py-1.5 text-xs font-bold tracking-wider text-muted hover:border-ink hover:text-ink"
            >
              {t.ui.switchLabel}
            </a>
            <a href={asset(paths[l].home)} className="text-sm font-semibold text-muted hover:text-ink">
              ← {t.ui.backHome}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-copper">{heading[l].kicker}</p>
        <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight sm:text-5xl">{heading[l].title}</h1>
        <p className="mt-4 text-sm text-muted">
          {heading[l].updated} {updated[l]}
        </p>
        {l === "en" ? <BodyEn email={email} /> : <BodyPl email={email} />}
      </main>

      <SiteFooter t={t} />
    </>
  );
}
