import { ReviewsMarqueeSection } from "@/components/sections/reviews/reviews-marquee-section";

export function Testimonials() {
  return (
    <div className="bg-[#F6F5F0] pt-10">
      <ReviewsMarqueeSection ctaHref="/reviews/" ctaExternal={false} />
    </div>
  );
}
