import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FaqHero } from "@/components/sections/faq/faq-hero";
import { FaqList } from "@/components/sections/faq/faq-list";

export const metadata: Metadata = {
  title: "FAQ | MMJ Doctor Oklahoma",
  description:
    "Answers to common questions about getting, renewing, and using a Medical Marijuana Card in Oklahoma.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <SiteHeader />
      <main>
        <FaqHero />
        <FaqList />
      </main>
      <SiteFooter />
    </div>
  );
}
