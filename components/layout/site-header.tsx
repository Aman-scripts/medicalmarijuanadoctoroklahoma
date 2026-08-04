import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/doctors", label: "Our Doctors" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F6F5F0]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Medical Marijuana Doctor Oklahoma" width={220} height={56} className="h-14 w-auto" style={{ width: "auto" }} priority />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#0E3B2E]/85 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[#0E3B2E]">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button
          render={<a href="#apply" />}
          className="hidden h-auto gap-1.5 rounded-full bg-[#0E3B2E] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0E3B2E]/90 md:inline-flex"
        >
          Get Your OK MMJ Card <ArrowRight className="size-4" />
        </Button>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="border-transparent text-[#0E3B2E] hover:bg-transparent md:hidden"
              />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#F6F5F0]">
            <SheetHeader>
              <SheetTitle className="font-heading text-lg text-[#0E3B2E]">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-6">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<Link href={link.href} />}
                  className="rounded-lg px-3 py-3 text-base font-medium text-[#0E3B2E]/80 transition-colors hover:bg-[#0E3B2E]/5 hover:text-[#0E3B2E]"
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto p-6">
              <Button
                render={<a href="#apply" />}
                className="h-auto w-full gap-1.5 rounded-full bg-[#0E3B2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0E3B2E]/90"
              >
                Get Your OK MMJ Card <ArrowRight className="size-4" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
