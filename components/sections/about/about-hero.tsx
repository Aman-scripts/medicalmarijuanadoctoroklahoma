import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-16 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#BFE7B0] opacity-40 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <h1 className="font-heading text-4xl leading-[1.1] font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
            About Medical Marijuana Doctor Oklahoma
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#0E3B2E]/70">
            Medical Marijuana Doctor Oklahoma is a reliable brand that has excelled in serving
            legitimate services online for years. Being an unswerving source for obtaining a
            valid Medical Marijuana Card at your doorstep, MMJ Doctor Oklahoma has tried making
            the whole process even easier for you so that you can get the very best from the
            comfort of your home.
          </p>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#0E3B2E]/60">
            We have a powerful team of professionals that are proficient in delivering legitimate
            services online.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
            >
              Apply Now <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#0E3B2E]/15">
          <Image
            src="/about-hero-section.jpg"
            alt="Oklahoma male and female medical professionals"
            width={800}
            height={640}
            priority
            className="h-[420px] w-full object-cover sm:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
