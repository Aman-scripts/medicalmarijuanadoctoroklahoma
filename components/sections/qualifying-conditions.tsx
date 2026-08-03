export function QualifyingConditions() {
  const conditions = [
    "Anorexia", "Anxiety", "Arthritis", "Cancer", "Chronic Pain", "Crohn's Disease",
    "Depression", "Epilepsy", "Fibromyalgia", "Glaucoma", "Insomnia", "Migraines",
    "Multiple Sclerosis", "Muscle Spasms", "Nausea", "PTSD",
  ];

  return (
    <section id="conditions" className="bg-[#C9E9BE] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#0E3B2E]/60">ELIGIBILITY</p>
          <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight text-[#0E3B2E]">
            What Are The Qualifying Medical Conditions?
          </h2>
          <p className="mt-4 text-[#0E3B2E]/70">
            Oklahoma has some of the most inclusive medical marijuana laws, covering a wide range
            of qualifying conditions.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="rounded-full border border-[#0E3B2E]/10 bg-white px-5 py-2.5 text-sm font-medium text-[#0E3B2E]"
            >
              {condition}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
