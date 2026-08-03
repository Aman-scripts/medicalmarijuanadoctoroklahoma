import Image from "next/image";
import { ArrowRight, Compass, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutValues() {
  return (
    <section className="bg-[#0E3B2E] px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] shadow-xl shadow-black/20 lg:min-h-[380px]">
          <Image
            src="/about-section-one.png"
            alt="Doctor reviewing a patient's medical marijuana recommendation"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Medical Marijuana Doctor Oklahoma
          </h2>
          <p className="mt-4 text-white/70">
            We have a strong belief that the inclusion of telehealth services can help you live a
            better life by getting access to legal services online from the comfort of your
            couch. We understand the crucial role of Medical Marijuana in treating debilitating
            health conditions and the need to have legal access to it. That is why we have
            offered legitimate services online with the responsibility of delighting you always
            with an excellent service experience.
          </p>
          <Button
            render={<a href="#contact" />}
            className="mt-8 h-auto gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0E3B2E] shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/90"
          >
            Get Recommendations <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-[#8FD66B]">
            <Compass className="size-5" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-white">Our Mission</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            We always focus on providing legitimate services online that guarantees to deliver
            the very best at your doorstep. We intend to provide the services online. We believe
            in the healing power of Medical Marijuana and strive to offer legal rights by
            connecting licensed doctors and patients online to live a better life. Our priority
            is to give you the utmost comfort.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-[#8FD66B]">
            <Eye className="size-5" />
          </div>
          <h3 className="mt-6 text-xl font-semibold text-white">Our Vision</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            We endeavor to help people receive the full continuum of health benefits of medical
            cannabis! With this intent, we work closely with people to get them legal access to
            consume and possess Medical Cannabis at their doorstep by connecting them with the
            licensed medical doctors in our network. We aim to ensure that you have access to
            what you need for the betterment of your health and wellness.
          </p>
        </div>
      </div>
    </section>
  );
}
