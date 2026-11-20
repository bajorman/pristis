import { asset, company, nav, site, ui } from "../site";
import Logo from "./Logo";

// Footer shared by the home page and the privacy page. Menu links point to the
// home page sections, so they also work from /privacy/. The business name is
// the one registered in CEIDG.
export default function SiteFooter() {
  const home = asset("/");
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <a href={home} aria-label={ui.home}>
          <Logo />
        </a>
        <nav aria-label={ui.footerMenu} className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {nav.map((n) => (
            <a key={n.href} href={`${home}${n.href}`} className="hover:text-ink">
              {n.label}
            </a>
          ))}
          <a href={asset("/privacy/")} className="hover:text-ink">
            {ui.privacy}
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
