import type { Metadata } from "next";
import Logo from "./components/Logo";
import RootShell from "./components/RootShell";
import { asset, paths, site } from "./site";
import "./globals.css";

// The 404 page for any unknown address (exported as 404.html, which GitHub
// Pages serves). It sits outside both language layouts, so it speaks both.
export const metadata: Metadata = {
  title: `Page not found — ${site.name}`,
  icons: { icon: asset("/images/icon.svg") },
};

export default function GlobalNotFound() {
  return (
    <RootShell lang="en">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-20 sm:px-6">
        <a href={asset(paths.en.home)} aria-label={site.name}>
          <Logo />
        </a>
        <p className="mt-12 font-serif text-7xl font-medium text-copper">404</p>
        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          <div>
            <h1 className="font-serif text-3xl font-medium">Page not found</h1>
            <p className="mt-3 text-muted">This address does not exist, or the page has moved.</p>
            <a href={asset(paths.en.home)} className="mt-5 inline-block font-semibold text-copper hover:text-ink">
              Go to the home page →
            </a>
          </div>
          <div lang="pl">
            <p className="font-serif text-3xl font-medium">Nie znaleziono strony</p>
            <p className="mt-3 text-muted">Ten adres nie istnieje albo strona została przeniesiona.</p>
            <a
              href={asset(paths.pl.home)}
              hrefLang="pl"
              className="mt-5 inline-block font-semibold text-copper hover:text-ink"
            >
              Przejdź do strony głównej →
            </a>
          </div>
        </div>
      </main>
    </RootShell>
  );
}
