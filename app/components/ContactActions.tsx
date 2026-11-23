"use client";

import { useEffect, useState } from "react";
import type { Content } from "../content/en";
import { mailto, site } from "../site";
import Icon from "./Icon";

// The contact actions. Every "Ask about this" link on the page points here
// (#contact) and carries its topic in data-topic, so the visitor lands on one
// place with the address visible, a copy button, and a mailto link that
// already has the right subject. mailto alone does nothing when the visitor
// has no default e-mail program, so it is never the only way to get in touch.
export default function ContactActions({ t }: { t: Content["contact"] }) {
  const [topic, setTopic] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[data-topic]");
      if (link) setTopic(link.getAttribute("data-topic"));
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  const subject = topic ?? t.subject;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.umami?.track("Email copied", { topic: subject });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard blocked: the address stays visible and selectable.
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {topic && (
        <p className="rounded-2xl bg-white/10 px-4 py-3 text-sm text-white" aria-live="polite">
          {t.topic} <span className="font-semibold">{topic}</span>
        </p>
      )}
      <div className="rounded-2xl border border-white/25 px-4 py-3 text-center">
        <span className="block select-all break-all font-semibold text-white">{site.email}</span>
        <button
          type="button"
          onClick={copy}
          className="mt-2 rounded-full border border-white/40 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-white hover:text-copper"
        >
          <span aria-live="polite">{copied ? t.copied : t.copy}</span>
        </button>
      </div>
      <a
        href={mailto(subject)}
        data-umami-event="Email me"
        data-umami-event-location="contact-button"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-ink"
      >
        {t.button} <Icon name="arrow" className="size-4" />
      </a>
      <p className="text-center text-xs text-white/75">{t.hint}</p>
    </div>
  );
}
