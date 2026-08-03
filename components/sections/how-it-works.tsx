import { ArrowRight, BadgeCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Schedule an Appointment",
      description: "Book a consultation with a licensed Oklahoma MMJ doctor online.",
    },
    {
      number: "02",
      title: "Connect with Licensed Oklahoma Doctors",
      description: "Meet with our certified physicians via secure video call.",
    },
    {
      number: "03",
      title: "Registration with OMMA",
      description: "Use the recommendation letter for OMMA registration.",
    },
    {
      number: "04",
      title: "Receive Your Medical Marijuana Card",
      description: "Get your digital card instantly and physical card by mail.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#0E3B2E] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#8FD66B]">THE PROCESS</p>
          <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight text-white">
            How It Works?
          </h2>
          <p className="mt-4 text-white/60">
            Get your Oklahoma Medical Marijuana Card in 4 simple steps:
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#8FD66B]/15 font-heading text-base font-medium text-[#8FD66B]">
                {step.number}
              </div>
              <h3 className="mt-6 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
            <BadgeCheck className="size-4 text-[#8FD66B]" />
            High Quality MMJ - State Dispensary Access
          </div>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-[#F2C14E] px-7 py-4 text-sm font-semibold text-[#0E3B2E] transition-colors hover:bg-[#F2C14E]/90"
          >
            Click to Start <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
