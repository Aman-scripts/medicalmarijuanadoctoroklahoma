import { ArrowRight, BadgeCheck, Clock3, ShieldCheck, Star, Stethoscope, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DoctorsWhy() {
  const reasons = [
    {
      icon: BadgeCheck,
      title: "Licensed Professionals",
      description: "All doctors are fully licensed in Oklahoma, ensuring legal compliance and the highest medical standards all along.",
    },
    {
      icon: Stethoscope,
      title: "Specialized Expertise",
      description: "Our physicians have specialized knowledge in specific medical conditions, offering a personalized medical cannabis recommendation to each patient.",
    },
    {
      icon: ShieldCheck,
      title: "HIPAA-Compliant",
      description: "Your medical records and health information are protected under federal HIPAA regulations, ensuring complete privacy and confidentiality.",
    },
    {
      icon: Clock3,
      title: "Quick Approval",
      description: "We provide fast and efficient same-day consultations and recommendations, with priority guidance for accessing medical cannabis treatment.",
    },
    {
      icon: Star,
      title: "Trusted by Thousands",
      description: "Our doctors have served thousands of Oklahoma patients, consistently earning the highest ratings for professional, compassionate, and reliable medical cannabis care.",
    },
    {
      icon: Video,
      title: "Telehealth Access",
      description: "Consult with our doctors from the comfort of your home via secure video or audio call, ensuring a thorough evaluation of your health condition.",
    },
  ];

  return (
    <section className="bg-[#EAF1EA] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#4C9A2A]">WHY OUR DOCTORS</p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
            Why Our Doctors Are the Right Choice
          </h2>
          <p className="mt-4 text-[#0E3B2E]/60">
            Oklahoma patients deserve physicians who know the state&apos;s rules cold &mdash; and
            treat a cannabis evaluation like real medical care.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#0E3B2E]/5 text-[#0E3B2E]">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-[#0E3B2E]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0E3B2E]/60">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <div className="flex flex-col items-center gap-5 rounded-[2rem] bg-[#0E3B2E] px-10 py-10 text-center">
            <div>
              <h3 className="font-heading text-2xl font-medium text-white sm:text-3xl">
                Start Your Journey to Relief Today
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-white/65">
                Get evaluated and approved by taking an online consultation today and receive an
                MMJ recommendation from our expert medical professional.
              </p>
            </div>
            <Button
              render={<a href="#apply" />}
              className="h-auto gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0E3B2E] shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/90"
            >
              Book Your Consultation Today <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
