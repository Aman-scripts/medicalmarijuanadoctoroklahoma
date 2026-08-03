import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F6F5F0]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Medical Marijuana Doctor Oklahoma" width={160} height={40} className="h-8 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#0E3B2E]/70 md:flex">
          <a href="#about" className="transition-colors hover:text-[#0E3B2E]">About Us</a>
          <a href="#contact" className="transition-colors hover:text-[#0E3B2E]">Contact Us</a>
          <a href="#faq" className="transition-colors hover:text-[#0E3B2E]">FAQ</a>
        </nav>
        <a
          href="#apply"
          className="hidden items-center gap-1.5 rounded-full bg-[#0E3B2E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E3B2E]/90 md:inline-flex"
        >
          Get Your OK MMJ Card <ArrowRight className="size-4" />
        </a>
      </div>
    </header>
  );
}
