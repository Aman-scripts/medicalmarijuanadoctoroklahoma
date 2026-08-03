import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactDetails } from "@/components/sections/contact/contact-details";
import { ContactForm } from "@/components/sections/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | MMJ Doctor Oklahoma",
  description:
    "Get in touch with Medical Marijuana Doctor Oklahoma. Reach us by phone, email, or visit our Oklahoma City office.",
};

export default function ContactUsPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <SiteHeader />
      <main>
        <ContactHero />
        <ContactDetails />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
