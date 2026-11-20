"use client";

import { useEffect, useState } from "react";
import { hero, nav, ui } from "../site";
import Logo from "./Logo";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6">
        <a href="#top" aria-label={ui.home} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label={ui.mainMenu} className="hidden items-center gap-6 text-sm font-semibold lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-muted transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            data-umami-event="Request call"
            data-umami-event-location="header"
            className="rounded-full bg-ink px-5 py-2.5 text-white transition-colors hover:bg-copper"
          >
            {ui.bookCall}
          </a>
        </nav>

        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? ui.close : ui.menu}
          <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="m4 4 8 8M12 4l-8 8" /> : <path d="M2.5 5h11M2.5 11h11" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label={ui.mainMenu} className="absolute inset-x-0 top-full border-y border-line bg-paper px-4 pb-6 pt-2 shadow-xl shadow-ink/10 lg:hidden">
          {[...nav, { href: "#contact", label: ui.contact }].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line/70 py-3.5 font-serif text-xl"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              setOpen(false);
              // Tracked in code rather than with data-umami-event, which can
              // interfere with this element's own click handler.
              window.umami?.track("Request call", { location: "mobile-menu" });
            }}
            className="mt-5 block rounded-full bg-copper py-3 text-center font-semibold text-white"
          >
            {hero.primary}
          </a>
        </nav>
      )}
    </header>
  );
}
