import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DoctorsSchedule() {
  const options = [
    {
      icon: Phone,
      title: "Call Now",
      description: "Talk to our friendly team instantly.",
      href: "tel:+14054451637",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Get answers to your medical cannabis questions.",
      href: "mailto:contact@medicalmarijuanadoctoroklahoma.com",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Connect with our support anytime.",
      href: "/contact-us",
    },
  ];

  return (
    <section className="bg-[#0E3B2E] px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Schedule Your Appointment with Licensed Doctors Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Receive expert evaluations and OMMA-compliant MMJ recommendations from experienced
          professionals, all online and hassle-free.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            render={<a href="#apply" />}
            className="h-auto gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0E3B2E] shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/90"
          >
            Get Your MMJ Card Today <ArrowRight className="size-4" />
          </Button>
        </div>

        <p className="mt-5 text-xs tracking-wide text-white/85">
          Complete the process in 15-30 minutes &middot; 100% online &middot; No office visits
          required
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {options.map(({ icon: Icon, title, description, href }) => (
            <a
              key={title}
              href={href}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:bg-white/10"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-[#8FD66B]/15 text-[#B8E89A]">
                <Icon className="size-5" />
              </div>
              <p className="mt-2 text-sm font-semibold text-white">{title}</p>
              <p className="text-xs leading-relaxed text-white/80">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
