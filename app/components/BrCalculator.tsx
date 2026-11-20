"use client";

import { useId, useState } from "react";

// Rough estimate of the tax saved through the Polish R&D tax relief (ulga B+R).
// Staff costs of R&D work can be deducted at 200%, other qualifying costs
// (materials, equipment, expert opinions, depreciation...) at 100%. The saving
// is the extra deduction times the tax rate. It ignores the income limit and
// the carry-forward, which the note under the result mentions.
const rates = [
  { id: "cit19", label: "CIT 19%", rate: 0.19 },
  { id: "cit9", label: "CIT 9% (small taxpayer)", rate: 0.09 },
  { id: "pit19", label: "PIT flat 19%", rate: 0.19 },
  { id: "pit32", label: "PIT scale, 32%", rate: 0.32 },
];

const pln = new Intl.NumberFormat("en-GB", { style: "currency", currency: "PLN", maximumFractionDigits: 0 });

function parse(value: string) {
  const n = Number(value.replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export default function BrCalculator() {
  const id = useId();
  const [staff, setStaff] = useState("500000");
  const [other, setOther] = useState("100000");
  const [rateId, setRateId] = useState("cit19");

  const rate = rates.find((r) => r.id === rateId)!.rate;
  const deduction = 2 * parse(staff) + parse(other);
  const saving = deduction * rate;
  const fiveYears = saving * 5;

  const field =
    "mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-lg text-white tabular-nums outline-none transition focus:border-copper-light focus:bg-white/10";

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-copper-light">R&amp;D relief calculator</p>
      <p className="mt-2 text-white/70">Estimated tax saving for one year under the Polish R&amp;D tax relief.</p>

      <div className="mt-6 grid gap-5">
        <label className="block text-sm font-semibold text-white/85" htmlFor={`${id}-staff`}>
          Staff costs of R&amp;D work (per year, PLN)
          <input
            id={`${id}-staff`}
            inputMode="numeric"
            className={field}
            value={staff}
            onChange={(e) => setStaff(e.target.value)}
          />
        </label>
        <label className="block text-sm font-semibold text-white/85" htmlFor={`${id}-other`}>
          Other qualifying costs (equipment, materials, expert opinions, PLN)
          <input
            id={`${id}-other`}
            inputMode="numeric"
            className={field}
            value={other}
            onChange={(e) => setOther(e.target.value)}
          />
        </label>
        <fieldset>
          <legend className="text-sm font-semibold text-white/85">Tax regime</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {rates.map((r) => (
              <label
                key={r.id}
                className={`cursor-pointer rounded-xl border px-3 py-2.5 text-sm transition ${
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
                  onChange={() => setRateId(r.id)}
                  className="sr-only"
                />
                {r.label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6" aria-live="polite">
        <p className="text-sm text-white/70">Estimated tax saving per year</p>
        <p className="mt-1 font-serif text-4xl font-semibold text-white tabular-nums sm:text-5xl">{pln.format(saving)}</p>
        <p className="mt-3 text-sm text-white/70">
          Additional deduction: {pln.format(deduction)}. With corrections for 5 years back — up to{" "}
          <span className="font-semibold text-copper-light">{pln.format(fiveYears)}</span>.
        </p>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-white/45">
        An indicative estimate, not tax advice. The deduction cannot exceed taxable income; any unused part can be
        carried forward for the next 6 years. Which costs qualify is confirmed by an audit.
      </p>
    </div>
  );
}
