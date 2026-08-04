const steps = [
  "Fill out a short intake form with your basic information and medical history.",
  "Book your appointment - most patients get scheduled within a day or two.",
  "Meet with an Oklahoma-licensed physician over a secure video call, usually 10-15 minutes.",
  "Receive your certification digitally if the physician approves you, so you can complete your OMMA application.",
];

export function AboutHowItWorks() {
  return (
    <section className="bg-[#EAF1EA] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#4C9A2A]">HOW IT WORKS</p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
            How the Process Works
          </h2>
        </div>

        <ol className="mt-10 flex flex-col gap-4">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0E3B2E] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-[#0E3B2E]/70 sm:text-base">{step}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-sm leading-relaxed text-[#0E3B2E]/55">
          Physicians on our platform make their own independent decisions. We don&apos;t
          guarantee approvals, and no one at Medical Marijuana Doctor Oklahoma influences that
          judgment.
        </p>
      </div>
    </section>
  );
}
