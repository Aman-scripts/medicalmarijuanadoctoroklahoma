import { Check, X } from "lucide-react";

const included = [
  "A telehealth evaluation with an Oklahoma-licensed physician",
  "Guidance on what OMMA requires",
  "A digital certification if approved",
];

const excluded = [
  "We don't sell or distribute cannabis",
  "We don't process your OMMA state license (that's a separate application and fee submitted directly to OMMA)",
  "We don't guarantee approval - that decision belongs to the evaluating physician",
];

export function AboutInfo() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2F7A18]">WHAT WE DO (AND DON&apos;T)</p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
            What We Do - and What We Don&apos;t
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h3 className="text-base font-semibold text-[#0E3B2E]">Included</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#2F7A18]" />
                  <span className="text-sm leading-relaxed text-[#0E3B2E]/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h3 className="text-base font-semibold text-[#0E3B2E]">Not Included</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {excluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 size-4 shrink-0 text-[#0E3B2E]/75" />
                  <span className="text-sm leading-relaxed text-[#0E3B2E]/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
