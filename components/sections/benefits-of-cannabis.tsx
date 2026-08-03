import Image from "next/image";
import { ArrowRight, BriefcaseMedical, Clock, ShieldCheck, Sparkles, Star } from "lucide-react";

export function BenefitsOfCannabis() {
  const benefits = [
    {
      icon: BriefcaseMedical,
      title: "Pain Management",
      description: "Effective relief for chronic pain, arthritis, and inflammatory conditions.",
    },
    {
      icon: Sparkles,
      title: "Mental Health Support",
      description: "Natural treatment for anxiety, depression, PTSD, and stress disorders.",
    },
    {
      icon: ShieldCheck,
      title: "Cancer Support",
      description: "Helps manage chemotherapy side effects, nausea, and appetite loss.",
    },
    {
      icon: Clock,
      title: "Digestion & Sleep",
      description: "Helps with digestive disorders and improves sleep quality.",
    },
  ];

  return (
    <section className="bg-[#0E3B2E] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#8FD66B]">HEALTH &amp; WELLNESS</p>
          <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight text-white">
            Benefits of Medical Cannabis
          </h2>
          <p className="mt-4 text-white/60">
            Discover how medical marijuana can improve your quality of life with natural,
            effective treatment.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex size-11 items-center justify-center rounded-xl bg-[#8FD66B]/15 text-[#8FD66B]">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[2rem] shadow-xl shadow-black/20 lg:col-span-5">
            <Image
              src="/benefits-of-cannabies-section.webp"
              alt="Doctor consulting a patient about medical cannabis treatment"
              width={700}
              height={860}
              className="h-[320px] w-full object-cover lg:h-[480px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E3B2E]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#8FD66B]/20 text-[#0E3B2E]">
                <Sparkles className="size-4" />
              </div>
              <p className="text-sm font-medium text-[#0E3B2E]">
                Compassionate, patient-first care
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
            <Star className="size-4 text-[#F2C14E]" />
            98% Customer Satisfaction - Helping patients manage their conditions
          </div>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-[#F2C14E] px-7 py-4 text-sm font-semibold text-[#0E3B2E] transition-colors hover:bg-[#F2C14E]/90"
          >
            Get Cannabis for Your Condition <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
