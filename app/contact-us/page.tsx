import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactDetails } from "@/components/sections/contact/contact-details";
import { ContactAfterReachOut } from "@/components/sections/contact/contact-after-reach-out";
import { ContactPrivacyNote } from "@/components/sections/contact/contact-privacy-note";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactFaq } from "@/components/sections/contact/contact-faq";

export const metadata: Metadata = {
  title: "Contact Us | Medical Marijuana Doctor Oklahoma",
  description:
    "Have questions about your Oklahoma MMJ card? Contact Medical Marijuana Doctor Oklahoma by phone, email, or in person. We respond fast.",
};

export default function ContactUsPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <SiteHeader />
      <PageBreadcrumb page="Contact Us" />
      <main>
        <ContactHero />
        <ContactDetails />
        <ContactAfterReachOut />
        <ContactPrivacyNote />
        <ContactForm />
        <ContactFaq />
      </main>
      <SiteFooter />
    </div>
  );
}
