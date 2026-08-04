import { Mail, MapPin, Phone } from "lucide-react";

export function ContactDetails() {
  const details = [
    {
      icon: MapPin,
      label: "Find Us",
      value: "1036 W I-240 Service Road, Oklahoma City, OK 73139, United States",
      note: "Good for anyone who wants to ask questions in person or drop off paperwork before their telehealth visit.",
      href: "https://maps.google.com/?q=1036+W+I-240+Service+Road,+Oklahoma+City,+OK+73139",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (405) 445-1637",
      note: "Best if you need something answered fast - rescheduling, a question about your upcoming visit, or trouble with your telehealth link.",
      href: "tel:+14054451637",
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@medicalmarijuanadoctoroklahoma.com",
      note: "Good for anything that isn't urgent. We usually get back to you within a business day.",
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
          Reaching out about anything medical can feel a little awkward, so we try to keep this
          part easy. Call us, email us, or come by our Oklahoma City office - whatever works for
          you. A real staff member responds, not an automated system. Here&apos;s a quick rundown
          of each option and when it makes sense to use it.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid min-w-0 gap-6 sm:grid-cols-3 lg:grid-cols-1">
          {details.map(({ icon: Icon, label, value, note, href }) => (
            <a
              key={label}
              href={href}
              className="flex min-w-0 items-start gap-4 rounded-2xl border border-black/5 bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0E3B2E]/5 text-[#4C9A2A]">
                <Icon className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#0E3B2E]">{label}</p>
                <p className="mt-1 text-sm leading-relaxed break-words text-[#0E3B2E]/60">{value}</p>
                <p className="mt-2 text-xs leading-relaxed text-[#0E3B2E]/50">{note}</p>
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
