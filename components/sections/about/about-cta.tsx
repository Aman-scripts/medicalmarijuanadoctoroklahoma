import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutCta() {
  return (
    <section className="bg-[#0E3B2E] px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-medium text-white sm:text-3xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/65">
          If you think you might qualify for a medical marijuana card in Oklahoma, the first step
          is a quick evaluation with one of our licensed physicians. It takes about 15-30
          minutes, start to finish.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            render={<a href="#apply" />}
            className="h-auto gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0E3B2E] shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/90"
          >
            Get Your OK MMJ Card <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
