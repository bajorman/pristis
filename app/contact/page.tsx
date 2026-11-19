import type { Metadata } from "next";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";
import { site } from "../site";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" current="/contact/" />
      <PageBody>
        <p>
          <span aria-hidden="true">📧 </span>
          <a href={`mailto:${site.email}`} className="hover:underline">
            {site.email}
          </a>
        </p>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="mt-8 ml-24 inline-flex size-8 items-center justify-center rounded-full bg-[#5f6368] text-white hover:bg-[#3c4043]"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21h-4V9.75Z" />
          </svg>
        </a>
      </PageBody>
    </>
  );
}
