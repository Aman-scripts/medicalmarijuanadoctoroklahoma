import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutCta() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#0E3B2E]/10 bg-[#EAF1EA] px-6 py-16 text-center sm:px-12">
        <h2 className="font-heading text-2xl font-medium text-[#0E3B2E] sm:text-3xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[#0E3B2E]/70">
          If you think you might qualify for a medical marijuana card in Oklahoma, the first step
          is a quick evaluation with one of our licensed physicians. It takes about 15-30
          minutes, start to finish.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            render={<a href="#apply" />}
            className="h-auto gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
          >
            Get Your OK MMJ Card <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
