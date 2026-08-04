import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { Button } from "@/components/ui/button";
import { doctors, getDoctorBySlug } from "@/lib/doctors";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    return { title: "Doctor Not Found | MMJ Doctor Oklahoma" };
  }

  return {
    title: `Dr. ${doctor.name}, ${doctor.credentials} | MMJ Doctor Oklahoma`,
    description: doctor.bio,
  };
}

export default async function DoctorProfilePage({ params }: Props) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <SiteHeader />
      <PageBreadcrumb page={doctor.name} />
      <main>
        <section className="px-6 pt-14 pb-16 sm:pt-20">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/doctors"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0E3B2E]/60 hover:text-[#0E3B2E]"
            >
              <ArrowLeft className="size-4" /> Back to all doctors
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div className="relative h-80 overflow-hidden rounded-[2rem] shadow-xl shadow-black/10 sm:h-96">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name}, ${doctor.credentials}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#4C9A2A]">
                  {doctor.category.toUpperCase()}
                </p>
                <h1 className="mt-3 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                  Dr. {doctor.name}, {doctor.credentials}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[#0E3B2E]/60">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0E3B2E]/10 bg-white px-3 py-1.5">
                    <BadgeCheck className="size-4 text-[#4C9A2A]" /> Licensed in Oklahoma
                  </span>
                  <span>Experience: {doctor.experience}</span>
                </div>

                <p className="mt-6 leading-relaxed text-[#0E3B2E]/70">{doctor.about}</p>

                <div className="mt-8">
                  <h2 className="text-sm font-semibold tracking-wide text-[#0E3B2E]">
                    Conditions Commonly Evaluated
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {doctor.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full bg-[#EAF1EA] px-3.5 py-1.5 text-xs font-medium text-[#0E3B2E]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  render={<a href="#apply" />}
                  className="mt-9 h-auto gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
                >
                  Book a Consultation with Dr. {doctor.name.split(" ").slice(-1)[0]}{" "}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
