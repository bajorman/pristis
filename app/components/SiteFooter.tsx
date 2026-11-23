import type { Content } from "../content/en";
import { asset, company, paths, site } from "../site";
import Logo from "./Logo";

// Footer shared by the home and privacy pages of both languages. Menu links
// point to the home page sections, so they also work from the privacy page.
// The business name is the one registered in CEIDG.
export default function SiteFooter({ t }: { t: Content }) {
  const home = asset(paths[t.locale].home);
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <a href={home} aria-label={t.ui.home}>
          <Logo />
        </a>
        <nav aria-label={t.ui.footerMenu} className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {t.nav.map((n) => (
            <a key={n.href} href={`${home}${n.href}`} className="hover:text-ink">
              {n.label}
            </a>
          ))}
          <a href={asset(paths[t.locale].privacy)} className="hover:text-ink">
            {t.ui.privacy}
          </a>
        </nav>
        <div className="text-sm leading-relaxed text-muted md:text-right">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>{company.legalName}</p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-ink">
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
