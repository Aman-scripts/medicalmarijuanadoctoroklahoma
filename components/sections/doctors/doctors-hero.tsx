import { BadgeCheck, Lock, Star, ZapIcon } from "lucide-react";

export function DoctorsHero() {
  const badges = [
    { icon: BadgeCheck, label: "OMMA Compliant" },
    { icon: Lock, label: "HIPAA Secure" },
    { icon: ZapIcon, label: "15-Minute Visits" },
    { icon: Star, label: "99% Approval Rate" },
  ];

  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-16 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#BFE7B0] opacity-40 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <h1 className="font-heading text-3xl leading-[1.1] font-medium tracking-tight text-[#0E3B2E] sm:text-4xl lg:text-5xl lg:whitespace-nowrap">
          Meet Our Licensed{" "}
          <span className="italic text-[#4C9A2A]">Medical Marijuana Doctors</span> Team
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#0E3B2E]/70">
          At MMJ Doctor Oklahoma, our team of healthcare professionals is dedicated to helping
          patients safely and legally access medical marijuana recommendations. With years of
          experience and a deep understanding of Oklahoma&apos;s OMMA program, our providers
          guide you through a quick and hassle-free evaluation to certification.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-[#0E3B2E]/10 bg-white px-5 py-2.5 text-sm font-medium text-[#0E3B2E]/70"
            >
              <Icon className="size-4 text-[#4C9A2A]" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
