"use client";

import { useState } from "react";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import { GoogleIcon } from "@/components/icons/google-icon";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Sherri Cable",
    time: "1 year ago",
    rating: 5,
    text: "I like the place it was nice",
  },
  {
    name: "Seth Rucker",
    time: "1 year ago",
    rating: 3,
    text: "They overcharge for their services. $150 for them to send a signed form for the application that I had to submit myself which cost an additional $100. For the $150 most doctors will submit the forms and application for you. Going through them cost me up wards of $250 and they have old and invalid phone numbers on their customer support page. I thought it was a scam at first until I received my call from the doctor and the signed patient license. There are definitely easier means of getting a card through other doctors. Not a scam but a ripoff.",
    truncatedText:
      "They overcharge for their services. $150 for them to send a signed form for the application that I had to submit myself which cost an additional $100. For the…",
    truncated: true,
  },
  {
    name: "Prem Sheskar",
    time: "2 years ago",
    rating: 5,
    text: "Very good",
  },
];

const avatarColors = ["from-[#8B5CF6] to-[#6D28D9]", "from-[#2563EB] to-[#1D4ED8]", "from-[#4C9A2A] to-[#0E3B2E]"];

function ReviewCard({
  review,
  colorIndex,
  expanded,
  onToggle,
}: {
  review: (typeof reviews)[number];
  colorIndex: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[colorIndex]} text-base font-semibold text-white`}
          >
            {review.name[0]}
          </div>
          <div>
            <p className="flex items-center gap-1 text-sm font-semibold text-[#0E3B2E]">{review.name}</p>
            <p className="text-xs text-[#0E3B2E]/45">{review.time}</p>
          </div>
        </div>
        <GoogleIcon className="size-5 shrink-0" />
      </div>

      <div className="mt-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, starIndex) => (
          <Star
            key={starIndex}
            className={`size-4 ${
              starIndex < review.rating ? "fill-[#F2C14E] text-[#F2C14E]" : "fill-[#E5E7EB] text-[#E5E7EB]"
            }`}
          />
        ))}
        <BadgeCheck className="ml-1 size-4 text-[#4285F4]" />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[#0E3B2E]/75">
        {review.truncated && !expanded ? review.truncatedText : review.text}
      </p>
      {review.truncated && (
        <Button
          type="button"
          variant="ghost"
          onClick={onToggle}
          className="mt-1 h-auto self-start p-0 text-xs font-medium text-[#0E3B2E]/40 hover:bg-transparent hover:text-[#0E3B2E]/60"
        >
          {expanded ? "Show less" : "Read more"}
        </Button>
      )}
    </div>
  );
}

export function Testimonials() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (name: string) =>
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <section className="bg-[#EAF1EA] px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#4C9A2A]">TESTIMONIALS</p>
        <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight text-[#0E3B2E]">
          What Our Patients Say
        </h2>
        <p className="mt-4 text-[#0E3B2E]/60">
          Real testimonials from Oklahoma patients who found relief through our platform.
        </p>

        <Carousel opts={{ align: "start", loop: true }} className="mt-14 text-left sm:hidden">
          <CarouselContent>
            {reviews.map((review, i) => (
              <CarouselItem key={review.name}>
                <ReviewCard
                  review={review}
                  colorIndex={i}
                  expanded={!!expanded[review.name]}
                  onToggle={() => toggle(review.name)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-center gap-3">
            <CarouselPrevious className="static top-auto left-auto size-9 translate-x-0 translate-y-0 border-[#0E3B2E]/15 bg-white text-[#0E3B2E] hover:bg-[#0E3B2E]/5" />
            <CarouselNext className="static top-auto right-auto size-9 translate-x-0 translate-y-0 border-[#0E3B2E]/15 bg-white text-[#0E3B2E] hover:bg-[#0E3B2E]/5" />
          </div>
        </Carousel>

        <div className="mt-14 hidden gap-6 text-left sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <ReviewCard
              key={review.name}
              review={review}
              colorIndex={i}
              expanded={!!expanded[review.name]}
              onToggle={() => toggle(review.name)}
            />
          ))}
        </div>

        <Button
          render={
            <a
              href="https://maps.app.goo.gl/8HTa3Scrh8eU3Wfi7"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          className="mt-6 h-auto gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
        >
          Read More Reviews <ArrowRight className="size-4" />
        </Button>
      </div>
    </section>
  );
}
