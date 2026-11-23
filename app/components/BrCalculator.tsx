"use client";

import { useId, useRef, useState } from "react";
import type { Content } from "../content/en";

// Simulation of the tax effect of the Polish R&D tax relief (ulga B+R) for a
// single tax year. Qualifying staff costs of R&D work can be deducted at 200%,
// other qualifying costs at 100%; the effect is the extra deduction times a
// flat tax rate. Only flat-rate regimes are offered: under the progressive PIT
// scale the effect depends on income across the brackets, which this simple
// model does not capture. It assumes enough taxable income to use the whole
// deduction; the notes under the result say so.
const rates = [
  { id: "cit19", rate: 0.19 },
  { id: "cit9", rate: 0.09 },
  { id: "pit19", rate: 0.19 },
] as const;

const MAX = 1_000_000_000;

// Official information on CIT rates, including the conditions of the 9% rate.
const CIT_INFO = "https://www.podatki.gov.pl/cit/";

type Strings = Content["calc"];

// Whole PLN amounts only: digits, optionally grouped in thousands with ONE kind
// of separator used throughout the amount: a space, a comma or a dot
// ("500000", "500 000", "1,234,567"). Mixed separators ("1,234.567"),
// decimals ("12,5") and anything else are errors, never silently reinterpreted.
type Parsed = { value: number; error?: string };

// Thousands groups with the same separator throughout (backreference \1).
const GROUPED = /^\d{1,3}([  ,.])\d{3}(?:\1\d{3})*$/;
const DIGITS_AND_SEPARATORS = /^[\d  ,.]+$/;

function parseAmount(raw: string, errors: Strings["errors"]): Parsed {
  const v = raw.trim();
  if (v === "") return { value: 0, error: errors.empty };
  if (/^-/.test(v)) return { value: 0, error: errors.negative };
  if (!/^\d+$/.test(v) && !GROUPED.test(v)) {
    return { value: 0, error: DIGITS_AND_SEPARATORS.test(v) ? errors.mixed : errors.format };
  }
  const n = Number(v.replace(/\D/g, ""));
  if (n > MAX) return { value: 0, error: errors.max };
  return { value: n };
}

export default function BrCalculator({ t }: { t: Strings }) {
  const id = useId();
  const [staff, setStaff] = useState("500 000");
  const [other, setOther] = useState("100 000");
  const [rateId, setRateId] = useState<(typeof rates)[number]["id"]>("cit19");

  const pln = new Intl.NumberFormat(t.numberLocale, { style: "currency", currency: "PLN", maximumFractionDigits: 0 });

  // Count the first interaction with the calculator once per visit. Only the
  // fact of use is sent to analytics, never the amounts entered.
  const used = useRef(false);
  const markUsed = () => {
    if (used.current) return;
    used.current = true;
    window.umami?.track("Calculator used");
  };

  const staffParsed = parseAmount(staff, t.errors);
  const otherParsed = parseAmount(other, t.errors);
  const valid = !staffParsed.error && !otherParsed.error;

  const rate = rates.find((r) => r.id === rateId)!.rate;
  const deduction = 2 * staffParsed.value + otherParsed.value;
  const effect = deduction * rate;

  const field = (error?: string) =>
    `mt-2 w-full rounded-xl border bg-white/5 px-4 py-3 text-lg text-white tabular-nums outline-none transition focus:bg-white/10 ${
      error ? "border-red-300 focus:border-red-300" : "border-white/15 focus:border-copper-light"
    }`;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-copper-light">{t.title}</p>
      <p className="mt-2 text-white/70">{t.intro}</p>

      <div className="mt-6 grid gap-5">
        <div>
          <label className="block text-sm font-semibold text-white/85" htmlFor={`${id}-staff`}>
            {t.staffLabel}
          </label>
          <input
            id={`${id}-staff`}
            inputMode="numeric"
            autoComplete="off"
            aria-invalid={!!staffParsed.error}
            aria-describedby={`${id}-staff-hint`}
            className={field(staffParsed.error)}
            value={staff}
            onChange={(e) => {
              markUsed();
              setStaff(e.target.value);
            }}
          />
          <p id={`${id}-staff-hint`} className={`mt-1.5 text-xs ${staffParsed.error ? "text-red-200" : "text-white/45"}`}>
            {staffParsed.error ?? t.staffHint}
          </p>
        </div>
        <div>
          <label className="block text-sm font-semibold text-white/85" htmlFor={`${id}-other`}>
            {t.otherLabel}
          </label>
          <input
            id={`${id}-other`}
            inputMode="numeric"
            autoComplete="off"
            aria-invalid={!!otherParsed.error}
            aria-describedby={`${id}-other-hint`}
            className={field(otherParsed.error)}
            value={other}
            onChange={(e) => {
              markUsed();
              setOther(e.target.value);
            }}
          />
          <p id={`${id}-other-hint`} className={`mt-1.5 text-xs ${otherParsed.error ? "text-red-200" : "text-white/45"}`}>
            {otherParsed.error ?? t.otherHint}
          </p>
        </div>
        <fieldset>
          <legend className="text-sm font-semibold text-white/85">{t.regime}</legend>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {rates.map((r) => (
              <label
                key={r.id}
                className={`cursor-pointer rounded-xl border px-3 py-2.5 text-center text-sm transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-copper-light ${
                  rateId === r.id
                    ? "border-copper-light bg-copper-light/15 text-white"
                    : "border-white/15 text-white/70 hover:border-white/40"
                }`}
              >
                <input
                  type="radio"
                  name={`${id}-rate`}
                  value={r.id}
                  checked={rateId === r.id}
                  onChange={() => {
                    markUsed();
                    setRateId(r.id);
                  }}
                  className="sr-only"
                />
                {t.rates[r.id]}
              </label>
            ))}
          </div>
          {rateId === "cit9" && (
            <p className="mt-2 text-xs text-white/55">
              {t.cit9Note}{" "}
              <a href={CIT_INFO} target="_blank" rel="noopener noreferrer" className="text-copper-light underline">
                {t.cit9Link}
              </a>
            </p>
          )}
        </fieldset>
      </div>

      {/* Costs → extra deduction → estimated tax reduction, each on its own line. */}
      <div className="mt-8 border-t border-white/10 pt-6" aria-live="polite">
        {valid ? (
          <dl className="grid gap-1 text-sm text-white/70">
            <div className="flex justify-between gap-4">
              <dt>{t.costs}</dt>
              <dd className="tabular-nums">{pln.format(staffParsed.value + otherParsed.value)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>{t.deduction}</dt>
              <dd className="tabular-nums">{pln.format(deduction)}</dd>
            </div>
          </dl>
        ) : (
          <p className="text-sm text-red-200">{t.invalid}</p>
        )}
        <p className="mt-5 text-sm text-white/70">{t.effect}</p>
        <p className="mt-1 font-serif text-4xl font-semibold text-white tabular-nums sm:text-5xl">
          {valid ? pln.format(effect) : "—"}
        </p>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-white/45">{t.disclaimer}</p>
    </div>
  );
}
