import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { ReviewsHero } from "@/components/sections/reviews/reviews-hero";
import { ReviewsMarqueeSection } from "@/components/sections/reviews/reviews-marquee-section";
import { ReviewsCta } from "@/components/sections/reviews/reviews-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { REVIEWS_SUMMARY, reviews } from "@/lib/reviews";
import { SITE_URL, buildMetadata, pages, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.reviews);

function reviewsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Medical Marijuana Doctor Oklahoma",
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEWS_SUMMARY.average,
      reviewCount: REVIEWS_SUMMARY.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews
      .filter((review) => review.text)
      .slice(0, 10)
      .map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.name,
        },
        reviewBody: review.text,
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: 5,
          worstRating: 1,
        },
      })),
  };
}

export default function ReviewsPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={webPageSchema(pages.reviews)} />
      <JsonLd data={reviewsSchema()} />
      <SiteHeader />
      <PageBreadcrumb page="Reviews" currentPath={pages.reviews.path} />
      <main id="main-content">
        <ReviewsHero />
        <ReviewsMarqueeSection showHeading={false} />
        <ReviewsCta />
      </main>
      <SiteFooter />
    </div>
  );
}
