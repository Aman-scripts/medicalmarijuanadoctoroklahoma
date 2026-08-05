import { ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";

export function DontSeeCondition() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 text-center shadow-sm ring-1 ring-black/5 sm:p-14">
        <h2 className="font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
          Don&apos;t See Your Condition Listed?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[#0E3B2E]/80">
        Oklahoma law allows doctors to recommend medical marijuana for any condition they believe could benefit from treatment. Our licensed physicians will evaluate your specific case during consultation.
        </p>
        <BookingButton
          className="mt-8 h-auto max-w-full gap-2 rounded-full bg-[#0E3B2E] px-5 py-3.5 text-sm font-semibold whitespace-normal text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90 sm:px-7 sm:py-4 sm:whitespace-nowrap"
        >
          Free consultation if not approved <ArrowRight className="size-4 shrink-0" />
        </BookingButton>
      </div>
    </section>
  );
}
