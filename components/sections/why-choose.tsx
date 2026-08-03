import { ArrowRight, FileCheck2, Globe2, MapPin, ShieldCheck, Sprout, Stethoscope, Wallet, ZapIcon } from "lucide-react";

export function WhyChoose() {
  const features = [
    { icon: FileCheck2, title: "Easy Application", description: "Simple online form to start your MMJ process." },
    { icon: ZapIcon, title: "Instant Approval", description: "Get recommendations within minutes." },
    { icon: Globe2, title: "Online Convenience", description: "Consult with licensed doctors from your home." },
    { icon: Sprout, title: "Same-Day Start", description: "Begin the OMMA application immediately after approval." },
    { icon: ShieldCheck, title: "Secure Platform", description: "HIPAA-compliant process keeps all records private." },
    { icon: Stethoscope, title: "Expert Doctors", description: "Connect with certified marijuana specialists." },
    { icon: Wallet, title: "Affordable Pricing", description: "Low-cost consultations with a full refund guarantee." },
    { icon: MapPin, title: "Local Focus", description: "Specialized for OK laws, patients, and dispensaries." },
  ];

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#4C9A2A]">WHY CHOOSE US</p>
          <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight text-[#0E3B2E]">
            Why Choose MMJ Doctor Oklahoma?
          </h2>
          <p className="mt-4 text-[#0E3B2E]/60">
            The fastest, most secure way to get your medical marijuana card in Oklahoma.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#0E3B2E]/5 text-[#0E3B2E]">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-[#0E3B2E]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0E3B2E]/60">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
          >
            Book Your Appointment Now <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
