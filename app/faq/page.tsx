import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { FaqHero } from "@/components/sections/faq/faq-hero";
import { FaqList, faqs } from "@/components/sections/faq/faq-list";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, buildMetadata, pages, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.faq);

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
    url: absoluteUrl(pages.faq.path),
  };

  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={[webPageSchema(pages.faq), faqSchema]} />
      <SiteHeader />
      <PageBreadcrumb page="FAQ" currentPath={pages.faq.path} />
      <main id="main-content">
        <FaqHero />
        <FaqList />
      </main>
      <SiteFooter />
    </div>
  );
}
