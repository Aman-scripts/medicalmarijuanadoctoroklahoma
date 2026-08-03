import { Mail, MapPin, Phone } from "lucide-react";

export function ContactDetails() {
  const details = [
    {
      icon: MapPin,
      label: "Find Us",
      value: "1036 W I-240 Service Road, Oklahoma City, OK 73139, United States",
      href: "https://maps.google.com/?q=1036+W+I-240+Service+Road,+Oklahoma+City,+OK+73139",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (405) 445-1637",
      href: "tel:+14054451637",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@medicalmarijuanadoctoroklahoma.com",
      href: "mailto:contact@medicalmarijuanadoctoroklahoma.com",
    },
  ];

  return (
    <section className="bg-[#EAF1EA] px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#4C9A2A]">GET IN TOUCH</p>
        <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
          Reach Us
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#0E3B2E]/60 sm:text-base">
          We would love to serve you with an excellent and worthy experience online that you will
          never regret. Reach us through any of the feasible modes of communication!
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
          {details.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-md lg:items-center"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0E3B2E]/5 text-[#4C9A2A]">
                <Icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0E3B2E]">{label}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#0E3B2E]/60">{value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="overflow-hidden rounded-3xl border border-black/5 shadow-sm">
          <iframe
            title="Medical Marijuana Doctor Oklahoma location"
            src="https://www.google.com/maps?q=1036+W+I-240+Service+Road,+Oklahoma+City,+OK+73139&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[320px] w-full lg:h-full lg:min-h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
