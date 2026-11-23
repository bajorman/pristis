"use client";

import { useState } from "react";
import { site } from "../site";

// The contact address shown as text, with a button that copies it. Works even
// when the visitor has no default e-mail program for mailto links.
export default function CopyEmail({ copy, copied }: { copy: string; copied: string }) {
  const [done, setDone] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setDone(true);
      window.umami?.track("Email copied");
      setTimeout(() => setDone(false), 2500);
    } catch {
      // Clipboard blocked: the address stays visible and selectable.
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="select-all font-semibold text-white">{site.email}</span>
      <button
        type="button"
        onClick={onCopy}
        className="rounded-full border border-white/25 px-4 py-1.5 text-sm font-semibold text-white/85 transition hover:border-white hover:text-white"
      >
        <span aria-live="polite">{done ? copied : copy}</span>
      </button>
    </div>
  );
}
