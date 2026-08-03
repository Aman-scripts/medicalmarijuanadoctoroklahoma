import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AboutHero } from "@/components/sections/about/about-hero";
import { AboutValues } from "@/components/sections/about/about-values";
import { AboutAppointment } from "@/components/sections/about/about-appointment";
import { AboutInfo } from "@/components/sections/about/about-info";
import { AboutCta } from "@/components/sections/about/about-cta";

export const metadata: Metadata = {
  title: "About Us | MMJ Doctor Oklahoma",
  description:
    "Medical Marijuana Doctor Oklahoma is a reliable brand that has excelled in serving legitimate services online for years.",
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <SiteHeader />
      <main>
        <AboutHero />
        <AboutValues />
        <AboutAppointment />
        <AboutInfo />
        <AboutCta />
      </main>
      <SiteFooter />
    </div>
  );
}
