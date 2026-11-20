"use client";

import { useId, useRef, useState } from "react";

// Simulation of the tax effect of the Polish R&D tax relief (ulga B+R) for a
// single tax year. Qualifying staff costs of R&D work can be deducted at 200%,
// other qualifying costs at 100%; the effect is the extra deduction times a
// flat tax rate. Only flat-rate regimes are offered: under the progressive PIT
// scale the effect depends on income across the brackets, which this simple
// model does not capture. It assumes enough taxable income to use the whole
// deduction; the notes under the result say so.
const rates = [
  { id: "cit19", label: "CIT 19%", rate: 0.19 },
  { id: "cit9", label: "CIT 9%", rate: 0.09 },
  { id: "pit19", label: "PIT flat 19%", rate: 0.19 },
];

const MAX = 1_000_000_000;

const pln = new Intl.NumberFormat("en-GB", { style: "currency", currency: "PLN", maximumFractionDigits: 0 });

// Whole PLN amounts only: digits, optionally grouped in thousands with ONE kind
// of separator used throughout the amount: a space, a comma or a dot
// ("500000", "500 000", "1,234,567"). Mixed separators ("1,234.567"),
// decimals ("12,5") and anything else are errors, never silently reinterpreted.
type Parsed = { value: number; error?: string };

// Thousands groups with the same separator throughout (backreference \1).
const GROUPED = /^\d{1,3}([ \u00a0,.])\d{3}(?:\1\d{3})*$/;
const DIGITS_AND_SEPARATORS = /^[\d \u00a0,.]+$/;

function parseAmount(raw: string): Parsed {
  const v = raw.trim();
  if (v === "") return { value: 0, error: "Enter an amount (0 if none)." };
  if (/^-/.test(v)) return { value: 0, error: "The amount cannot be negative." };
  if (!/^\d+$/.test(v) && !GROUPED.test(v)) {
    return {
      value: 0,
      error: DIGITS_AND_SEPARATORS.test(v)
        ? "Use one thousands separator throughout, e.g. 1 234 567 or 1,234,567 (whole PLN, no decimals)."
        : "Use whole PLN, e.g. 500000, 500 000 or 500,000.",
    };
  }
  const n = Number(v.replace(/\D/g, ""));
  if (n > MAX) return { value: 0, error: "Amounts above PLN 1 billion are not supported." };
  return { value: n };
}

export default function BrCalculator() {
  const id = useId();
  const [staff, setStaff] = useState("500 000");
  const [other, setOther] = useState("100 000");
  const [rateId, setRateId] = useState("cit19");

  // Count the first interaction with the calculator once per visit. Only the
  // fact of use is sent to analytics, never the amounts entered.
  const used = useRef(false);
  const markUsed = () => {
    if (used.current) return;
    used.current = true;
    window.umami?.track("Calculator used");
  };

  const staffParsed = parseAmount(staff);
  const otherParsed = parseAmount(other);
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
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-copper-light">R&amp;D relief simulation</p>
      <p className="mt-2 text-white/70">
        An illustration of the possible tax effect for one tax year under the Polish R&amp;D tax relief.
      </p>

      <div className="mt-6 grid gap-5">
        <div>
          <label className="block text-sm font-semibold text-white/85" htmlFor={`${id}-staff`}>
            Qualifying staff costs of R&amp;D work (one year, whole PLN, e.g. 500 000)
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
            {staffParsed.error ??
              "Employees' salaries and pay under contracts of mandate or for specific work (umowa zlecenie, umowa o dzieło), with the social contributions paid by the payer — in proportion to time spent on R&D. Deducted at 200%."}
          </p>
        </div>
        <div>
          <label className="block text-sm font-semibold text-white/85" htmlFor={`${id}-other`}>
            Other qualifying costs (one year, whole PLN, e.g. 100 000)
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
            {otherParsed.error ??
              "E.g. materials, specialist equipment, depreciation, patents, and expert opinions or services bought from scientific institutions such as universities or research institutes. Deducted at 100%."}
          </p>
        </div>
        <fieldset>
          <legend className="text-sm font-semibold text-white/85">Tax regime</legend>
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
                {r.label}
              </label>
            ))}
          </div>
          {rateId === "cit9" && (
            <p className="mt-2 text-xs text-white/55">
              CIT 9% applies to small taxpayers (sales revenue up to EUR 2 million in the previous year) and to
              companies in their first tax year, and only while revenue in the current tax year does not exceed the
              PLN equivalent of EUR 2 million. It covers income other than capital gains, subject to further
              statutory conditions.
            </p>
          )}
        </fieldset>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6" aria-live="polite">
        <p className="text-sm text-white/70">Possible tax effect for this tax year</p>
        <p className="mt-1 font-serif text-4xl font-semibold text-white tabular-nums sm:text-5xl">
          {valid ? pln.format(effect) : "—"}
        </p>
        {valid && (
          <p className="mt-3 text-sm text-white/70">Additional deduction from the tax base: {pln.format(deduction)}.</p>
        )}
      </div>
      <p className="mt-5 text-xs leading-relaxed text-white/45">
        A simulation for one tax year for a standard taxpayer without research and development centre (CBR) status,
        not tax advice. It assumes the costs qualify and that there is enough income to absorb
        the whole deduction — for CIT, income from sources other than capital gains; for PIT, income from business
        activity. An unused part can be carried forward to the next six tax years. Whether
        the work and costs qualify depends on the nature of the work, its documentation and the taxpayer&apos;s
        situation, and is assessed by a licensed tax adviser. Progressive PIT is not modelled.
      </p>
    </div>
  );
}
