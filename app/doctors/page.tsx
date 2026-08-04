import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { DoctorsHero } from "@/components/sections/doctors/doctors-hero";
import { DoctorsTeam } from "@/components/sections/doctors/doctors-team";
import { DoctorsWhy } from "@/components/sections/doctors/doctors-why";
import { DoctorsProcess } from "@/components/sections/doctors/doctors-process";
import { DoctorsFaq } from "@/components/sections/doctors/doctors-faq";
import { DoctorsSchedule } from "@/components/sections/doctors/doctors-schedule";

export const metadata: Metadata = {
  title: "Our Doctors | MMJ Doctor Oklahoma",
  description:
    "Meet the OMMA-licensed Oklahoma physicians who evaluate and certify patients for a medical marijuana card.",
};

export default function DoctorsPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <SiteHeader />
      <PageBreadcrumb page="Our Doctors" />
      <main>
        <DoctorsHero />
        <DoctorsTeam />
        <DoctorsWhy />
        <DoctorsProcess />
        <DoctorsFaq />
        <DoctorsSchedule />
      </main>
      <SiteFooter />
    </div>
  );
}
