import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { GoogleIcon } from "@/components/icons/google-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

export function SiteFooter() {
  const quickLinks = [
    "What is OK MMJ Card",
    "Qualifying Conditions",
    "Process for MMJ",
    "Why Choose Us",
    "Patient's Reviews",
  ];
  const resources = [
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "FAQs", href: "/faq" },
  ];
  const trustBadges = [
    "HIPAA Compliant Practice",
    "Board Certified Physicians",
    "State Authorized Evaluators",
  ];

  return (
    <footer id="contact" className="bg-[#0E3B2E] px-6 pt-20 pb-10">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
        <div>
          <Image
            src="/logo.png"
            alt="Medical Marijuana Doctor Oklahoma"
            width={200}
            height={50}
            className="h-11 w-auto brightness-0 invert"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Oklahoma&apos;s most trusted platform for medical marijuana card approvals. Licensed
            doctors, instant approval, legal protection.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href="https://maps.app.goo.gl/8HTa3Scrh8eU3Wfi7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <GoogleIcon className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.15em] text-[#8FD66B]">QUICK LINKS</p>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/65 transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.15em] text-[#8FD66B]">RESOURCES</p>
          <ul className="mt-5 space-y-3">
            {resources.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.15em] text-[#8FD66B]">CONTACT</p>
          <ul className="mt-5 space-y-4 text-sm text-white/65">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-[#8FD66B]" />
              <a href="tel:+14054451637" className="transition-colors hover:text-white">
                +1 (405) 445 - 1637
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-[#8FD66B]" />
              <a
                href="mailto:info@medicalmarijuanadoctoroklahoma.com"
                className="transition-colors hover:text-white"
              >
                info@medicalmarijuanadoctoroklahoma.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#8FD66B]" />
              1036 W I-240 Service Road, Oklahoma City, OK 73139
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-[#8FD66B]" />
              9:00 am to 10:00 pm
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-white/10 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} Medical Marijuana Doctor Oklahoma. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustBadges.map((badge) => (
              <span key={badge} className="text-[11px] font-medium tracking-wide text-white/35">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
