import { nav, site } from "../site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <a href="#top" className="text-lg font-bold tracking-tight text-navy">
          {site.name}
        </a>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-muted hover:text-navy">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-navy px-4 py-2 font-bold text-white hover:bg-navy/90"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu without JavaScript. */}
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md px-2 py-1 text-sm font-bold text-navy">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-48 rounded-lg border border-black/10 bg-white p-2 shadow-lg">
            {[...nav, { href: "#contact", label: "Contact" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded px-3 py-2 text-sm hover:bg-surface"
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
