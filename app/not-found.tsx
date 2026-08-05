import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col bg-[#F6F5F0]">
      <SiteHeader />
      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center"
      >
        <p className="text-xs font-semibold tracking-[0.2em] text-[#2F7A18]">404 ERROR</p>
        <h1 className="mt-4 font-heading text-4xl font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-[#0E3B2E]/85">
          The page you are looking for does not exist, may have been moved, or the URL may be
          incorrect. Use the links below to continue.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#0E3B2E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0E3B2E]/90"
          >
            <Home className="size-4" aria-hidden="true" />
            Go Home
          </Link>
          <Link
            href="/contact-us/"
            className="inline-flex items-center gap-2 rounded-full border border-[#0E3B2E]/15 bg-white px-6 py-3 text-sm font-semibold text-[#0E3B2E] transition-colors hover:bg-[#0E3B2E]/5"
          >
            Contact Us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
