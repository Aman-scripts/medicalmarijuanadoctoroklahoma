import Image from "next/image";
import { AtSign, Clock, Mail, MapPin, MessageCircle, Phone, Users } from "lucide-react";

export function SiteFooter() {
  const quickLinks = [
    "What is OK MMJ Card",
    "Qualifying Conditions",
    "Process for MMJ",
    "Why Choose Us",
    "Patient's Reviews",
  ];
  const resources = ["Locations", "FAQs"];

  return (
    <footer id="contact" className="border-t border-black/5 bg-white px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/logo.png" alt="Medical Marijuana Doctor Oklahoma" width={160} height={40} className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#0E3B2E]/60">
            Oklahoma&apos;s most trusted platform for medical marijuana card approvals. Licensed
            doctors, instant approval, legal protection.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[MessageCircle, AtSign, Users].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex size-9 items-center justify-center rounded-full bg-[#0E3B2E]/5 text-[#0E3B2E] transition-colors hover:bg-[#0E3B2E]/10"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#0E3B2E]">Quick Links</p>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-[#0E3B2E]/60 transition-colors hover:text-[#0E3B2E]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#0E3B2E]">Resources</p>
          <ul className="mt-4 space-y-2.5">
            {resources.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-[#0E3B2E]/60 transition-colors hover:text-[#0E3B2E]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#0E3B2E]">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-[#0E3B2E]/60">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-[#4C9A2A]" />
              +1 (405) 445 - 1637
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-[#4C9A2A]" />
              info@medicalmarijuanadoctoroklahoma.com
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#4C9A2A]" />
              1036 W I-240 Service Road, Oklahoma City, OK 73139
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-[#4C9A2A]" />
              9:00 am to 10:00 pm
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-black/5 pt-6 text-center">
        <p className="text-xs text-[#0E3B2E]/50">
          © {new Date().getFullYear()} Medical Marijuana Doctor Oklahoma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
