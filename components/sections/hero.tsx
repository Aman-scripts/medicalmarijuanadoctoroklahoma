import Image from "next/image";
import { ArrowRight, BadgeCheck, Lock, ShieldCheck, Sparkles, Star, ZapIcon } from "lucide-react";

export function Hero() {
  const badges = [
    { icon: ShieldCheck, label: "HIPAA Compliant" },
    { icon: Lock, label: "100% Secure" },
    { icon: ZapIcon, label: "Instant Approval" },
    { icon: Star, label: "99% Approval Rate - Licensed OK Doctors" },
  ];

  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#BFE7B0] opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-32 h-96 w-96 rounded-full bg-[#0E3B2E]/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0E3B2E]/15 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0E3B2E] shadow-sm">
            <Sparkles className="size-3.5 text-[#4C9A2A]" />
            OKLAHOMA&apos;S TRUSTED MMJ PLATFORM
          </div>

          <h1 className="mt-6 font-heading text-4xl leading-[1.1] font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
            Get Approved by an Oklahoma Medical Marijuana Doctor and Receive Your{" "}
            <span className="italic text-[#4C9A2A]">Digital Card in Minutes!</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#0E3B2E]/70">
            Easy online application, instant approval, and same-day access to legal cannabis in
            Oklahoma.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
            >
              Get Started <ArrowRight className="size-4" />
            </a>
            <a
              href="#conditions"
              className="inline-flex items-center gap-2 rounded-full border border-[#0E3B2E]/15 bg-white px-7 py-4 text-sm font-semibold text-[#0E3B2E] transition-colors hover:bg-[#0E3B2E]/5"
            >
              Check Eligibility
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 rounded-full border border-[#0E3B2E]/10 bg-white px-3.5 py-2 text-xs font-medium text-[#0E3B2E]/70"
              >
                <Icon className="size-3.5 text-[#4C9A2A]" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#0E3B2E]/15">
            <Image
              src="/hero-section.jpg"
              alt="Patient meeting with a physician over telemedicine video call"
              width={800}
              height={560}
              priority
              className="h-[420px] w-full object-cover sm:h-[480px]"
            />
          </div>

          <div className="absolute -bottom-8 -left-6 w-64 rounded-2xl border border-black/5 bg-white p-5 shadow-xl sm:-left-10">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-[#4C9A2A]">
              <BadgeCheck className="size-4" />
              INSTANT APPROVAL
            </div>
            <p className="mt-2 font-heading text-lg font-medium text-[#0E3B2E]">
              Digital card in minutes
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-[#0E3B2E]/60">
              Licensed Oklahoma doctors review and approve your application same-day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
