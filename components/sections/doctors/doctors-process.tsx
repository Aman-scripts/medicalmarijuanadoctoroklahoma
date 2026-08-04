import { ClipboardList, FileCheck2, Stethoscope, Video } from "lucide-react";

export function DoctorsProcess() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Medical History Review",
      description:
        "The physician reviews your submitted medical history, current medications, and documented qualifying conditions prior to the consultation.",
    },
    {
      icon: Video,
      title: "Virtual Consultation",
      description:
        "A secure video consultation allows the physician to discuss your medical condition, treatment goals, and assess whether medical marijuana may be appropriate.",
    },
    {
      icon: Stethoscope,
      title: "Clinical Assessment",
      description:
        "The physician evaluates your condition against Oklahoma's qualifying criteria and determines medical appropriateness based on clinical judgment.",
    },
    {
      icon: FileCheck2,
      title: "Certification Decision",
      description:
        "If approved, the physician provides a medical marijuana certification in compliance with OMMA regulations. If not approved, alternative treatment options may be discussed.",
    },
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#4C9A2A]">THE PROCESS</p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
            How Our Doctors Evaluate Patients
          </h2>
          <p className="mt-4 text-[#0E3B2E]/60">
            Four steps, one appointment. Here&apos;s exactly what happens between booking and
            your OMMA submission.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="flex gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#0E3B2E]/5 font-heading text-base font-medium text-[#0E3B2E]">
                {index + 1}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-[#4C9A2A]" />
                  <h3 className="text-base font-semibold text-[#0E3B2E]">{title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#0E3B2E]/60">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
