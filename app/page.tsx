import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseMedical,
  Clock,
  FileCheck2,
  Globe2,
  Home as HomeIcon,
  Leaf,
  Lock,
  Mail,
  MapPin,
  Phone,
  Repeat,
  ShieldCheck,
  Sparkles,
  Sprout,
  Star,
  Stethoscope,
  Wallet,
  ZapIcon,
  MessageCircle,
  AtSign,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <SiteHeader />
      <main>
        <Hero />
        <WhyChoose />
        <HowItWorks />
        <WhatIsCard />
        <QualifyingConditions />
        <DontSeeCondition />
        <BenefitsOfCannabis />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
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

function Hero() {
  const badges = [
    { icon: ShieldCheck, label: "HIPAA Compliant" },
    { icon: Lock, label: "100% Secure" },
    { icon: ZapIcon, label: "Instant Approval" },
    { icon: Star, label: "99% Approval Rate - Licensed OK Doctors" },
  ];

  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#BFE7B0] opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-32 h-96 w-96 rounded-full bg-[#0E3B2E]/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0E3B2E]/15 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0E3B2E] shadow-sm">
            <Sparkles className="size-3.5 text-[#4C9A2A]" />
            OKLAHOMA'S TRUSTED MMJ PLATFORM
          </div>

          <h1 className="mt-6 font-heading text-4xl leading-[1.1] font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
            Get Approved by an Oklahoma Medical Marijuana Doctor and Receive Your{" "}
            <span className="italic text-[#4C9A2A]">Digital Card in Minutes!</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#0E3B2E]/70">
            Easy online application, instant approval, and same-day access to legal cannabis in
            Oklahoma.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
            >
              Get Started <ArrowRight className="size-4" />
            </a>
            <a
              href="#conditions"
              className="inline-flex items-center gap-2 rounded-full border border-[#0E3B2E]/15 bg-white px-7 py-4 text-sm font-semibold text-[#0E3B2E] transition-colors hover:bg-[#0E3B2E]/5"
            >
              Check Eligibility
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 rounded-full border border-[#0E3B2E]/10 bg-white px-3.5 py-2 text-xs font-medium text-[#0E3B2E]/70"
              >
                <Icon className="size-3.5 text-[#4C9A2A]" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#0E3B2E]/15">
            <Image
              src="/hero-section.jpg"
              alt="Patient meeting with a physician over telemedicine video call"
              width={800}
              height={560}
              priority
              className="h-[420px] w-full object-cover sm:h-[480px]"
            />
          </div>

          <div className="absolute -bottom-8 -left-6 w-64 rounded-2xl border border-black/5 bg-white p-5 shadow-xl sm:-left-10">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-[#4C9A2A]">
              <BadgeCheck className="size-4" />
              INSTANT APPROVAL
            </div>
            <p className="mt-2 font-heading text-lg font-medium text-[#0E3B2E]">
              Digital card in minutes
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-[#0E3B2E]/60">
              Licensed Oklahoma doctors review and approve your application same-day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const features = [
    { icon: FileCheck2, title: "Easy Application", description: "Simple online form to start your MMJ process." },
    { icon: ZapIcon, title: "Instant Approval", description: "Get recommendations within minutes." },
    { icon: Globe2, title: "Online Convenience", description: "Consult with licensed doctors from your home." },
    { icon: Sprout, title: "Same-Day Start", description: "Begin the OMMA application immediately after approval." },
    { icon: ShieldCheck, title: "Secure Platform", description: "HIPAA-compliant process keeps all records private." },
    { icon: Stethoscope, title: "Expert Doctors", description: "Connect with certified marijuana specialists." },
    { icon: Wallet, title: "Affordable Pricing", description: "Low-cost consultations with a full refund guarantee." },
    { icon: MapPin, title: "Local Focus", description: "Specialized for OK laws, patients, and dispensaries." },
  ];

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#4C9A2A]">WHY CHOOSE US</p>
          <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight text-[#0E3B2E]">
            Why Choose MMJ Doctor Oklahoma?
          </h2>
          <p className="mt-4 text-[#0E3B2E]/60">
            The fastest, most secure way to get your medical marijuana card in Oklahoma.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#0E3B2E]/5 text-[#0E3B2E]">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-[#0E3B2E]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0E3B2E]/60">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
          >
            Book Your Appointment Now <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Schedule an Appointment",
      description: "Book a consultation with a licensed Oklahoma MMJ doctor online.",
    },
    {
      number: "02",
      title: "Connect with Licensed Oklahoma Doctors",
      description: "Meet with our certified physicians via secure video call.",
    },
    {
      number: "03",
      title: "Registration with OMMA",
      description: "Use the recommendation letter for OMMA registration.",
    },
    {
      number: "04",
      title: "Receive Your Medical Marijuana Card",
      description: "Get your digital card instantly and physical card by mail.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#0E3B2E] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#8FD66B]">THE PROCESS</p>
          <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight text-white">
            How It Works?
          </h2>
          <p className="mt-4 text-white/60">
            Get your Oklahoma Medical Marijuana Card in 4 simple steps:
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#8FD66B]/15 font-heading text-base font-medium text-[#8FD66B]">
                {step.number}
              </div>
              <h3 className="mt-6 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
            <BadgeCheck className="size-4 text-[#8FD66B]" />
            High Quality MMJ - State Dispensary Access
          </div>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-[#F2C14E] px-7 py-4 text-sm font-semibold text-[#0E3B2E] transition-colors hover:bg-[#F2C14E]/90"
          >
            Click to Start <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatIsCard() {
  const benefits = [
    { icon: ShieldCheck, title: "Legal Protection", description: "Provides safe, legal access to medical marijuana use." },
    { icon: HomeIcon, title: "Dispensary Access", description: "Purchase cannabis products from licensed Oklahoma dispensaries." },
    { icon: Leaf, title: "Higher Possession", description: "Allows carrying more cannabis than recreational limits." },
    { icon: BadgeCheck, title: "Lower Age", description: "Eligible patients under 21 can legally access cannabis." },
    { icon: Sprout, title: "Cultivation Rights", description: "Grow your own plants as permitted by OMMA." },
    { icon: Stethoscope, title: "Medical Guidance", description: "Get dosage advice from licensed Oklahoma MMJ doctors." },
    { icon: MapPin, title: "Statewide Validity", description: "Use your card anywhere within Oklahoma legally." },
    { icon: Repeat, title: "Renewal Convenience", description: "Simple renewal process ensures uninterrupted access." },
  ];

  return (
    <section id="apply" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#4C9A2A]">GET STARTED</p>
          <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight text-[#0E3B2E]">
            What is An Oklahoma Medical Marijuana Card?
          </h2>
          <p className="mt-4 text-[#0E3B2E]/60">
            A Medical Marijuana Card in Oklahoma gives you legal protection and access to cannabis
            for therapeutic purposes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#C9E9BE] text-[#0E3B2E]">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-[#0E3B2E]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0E3B2E]/60">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center gap-5 rounded-[2rem] bg-[#0E3B2E] px-10 py-10 text-center sm:flex-row sm:gap-8 sm:text-left">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#8FD66B]">ONE-TIME FEE</p>
              <p className="font-heading text-4xl font-medium text-white">$149</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F2C14E] px-7 py-4 text-sm font-semibold text-[#0E3B2E] transition-colors hover:bg-[#F2C14E]/90"
            >
              Apply Your Card at $149 <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function QualifyingConditions() {
  const conditions = [
    "Anorexia", "Anxiety", "Arthritis", "Cancer", "Chronic Pain", "Crohn's Disease",
    "Depression", "Epilepsy", "Fibromyalgia", "Glaucoma", "Insomnia", "Migraines",
    "Multiple Sclerosis", "Muscle Spasms", "Nausea", "PTSD",
  ];

  return (
    <section id="conditions" className="bg-[#C9E9BE] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#0E3B2E]/60">ELIGIBILITY</p>
          <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight text-[#0E3B2E]">
            What Are The Qualifying Medical Conditions?
          </h2>
          <p className="mt-4 text-[#0E3B2E]/70">
            Oklahoma has some of the most inclusive medical marijuana laws, covering a wide range
            of qualifying conditions.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="rounded-full border border-[#0E3B2E]/10 bg-white px-5 py-2.5 text-sm font-medium text-[#0E3B2E]"
            >
              {condition}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DontSeeCondition() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-10 text-center shadow-sm ring-1 ring-black/5 sm:p-14">
        <h2 className="font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
          Don&apos;t See Your Condition Listed?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[#0E3B2E]/60">
          Oklahoma law allows doctors to recommend medical marijuana for any condition they
          believe may benefit from treatment.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
        >
          Free consultation if not approved <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function BenefitsOfCannabis() {
  const benefits = [
    {
      icon: BriefcaseMedical,
      title: "Pain Management",
      description: "Effective relief for chronic pain, arthritis, and inflammatory conditions.",
    },
    {
      icon: Sparkles,
      title: "Mental Health Support",
      description: "Natural treatment for anxiety, depression, PTSD, and stress disorders.",
    },
    {
      icon: ShieldCheck,
      title: "Cancer Support",
      description: "Helps manage chemotherapy side effects, nausea, and appetite loss.",
    },
    {
      icon: Clock,
      title: "Digestion & Sleep",
      description: "Helps with digestive disorders and improves sleep quality.",
    },
  ];

  return (
    <section className="bg-[#0E3B2E] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#8FD66B]">HEALTH &amp; WELLNESS</p>
          <h2 className="mt-3 font-heading text-4xl font-medium tracking-tight text-white">
            Benefits of Medical Cannabis
          </h2>
          <p className="mt-4 text-white/60">
            Discover how medical marijuana can improve your quality of life with natural,
            effective treatment.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#8FD66B]/15 text-[#8FD66B]">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
            <Star className="size-4 text-[#F2C14E]" />
            98% Customer Satisfaction - Helping patients manage their conditions
          </div>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-[#F2C14E] px-7 py-4 text-sm font-semibold text-[#0E3B2E] transition-colors hover:bg-[#F2C14E]/90"
          >
            Get Cannabis for Your Condition <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.12A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56V6.6H1.28a12 12 0 0 0 0 10.8l3.99-3.12Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.76 0 3.34.6 4.59 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.28 6.6l3.99 3.12C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}

function Testimonials() {
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
      text: "They overcharge for their services. $150 for them to send a signed form for the application that I had to submit myself which cost an additional $100. For the…",
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

        <div className="mt-14 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div key={review.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[i]} text-base font-semibold text-white`}
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="flex items-center gap-1 text-sm font-semibold text-[#0E3B2E]">
                      {review.name}
                    </p>
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
                      starIndex < review.rating
                        ? "fill-[#F2C14E] text-[#F2C14E]"
                        : "fill-[#E5E7EB] text-[#E5E7EB]"
                    }`}
                  />
                ))}
                <BadgeCheck className="ml-1 size-4 text-[#4285F4]" />
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[#0E3B2E]/75">{review.text}</p>
              {review.truncated && (
                <button type="button" className="mt-1 self-start text-xs font-medium text-[#0E3B2E]/40 hover:text-[#0E3B2E]/60">
                  Read more
                </button>
              )}
            </div>
          ))}
        </div>

        <a
          href="https://maps.app.goo.gl/8HTa3Scrh8eU3Wfi7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
        >
          Read More Reviews <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function SiteFooter() {
  const quickLinks = [
    "What is OK MMJ Card",
    "Qualifying Conditions",
    "Process for MMJ",
    "Why Choose Us",
    "Patient's Reviews",
  ];
  const resources = ["Locations", "FAQs"];

  return (
    <footer id="contact" className="border-t border-black/5 bg-white px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/logo.png" alt="Medical Marijuana Doctor Oklahoma" width={160} height={40} className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#0E3B2E]/60">
            Oklahoma&apos;s most trusted platform for medical marijuana card approvals. Licensed
            doctors, instant approval, legal protection.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[MessageCircle, AtSign, Users].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex size-9 items-center justify-center rounded-full bg-[#0E3B2E]/5 text-[#0E3B2E] transition-colors hover:bg-[#0E3B2E]/10"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#0E3B2E]">Quick Links</p>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-[#0E3B2E]/60 transition-colors hover:text-[#0E3B2E]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#0E3B2E]">Resources</p>
          <ul className="mt-4 space-y-2.5">
            {resources.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-[#0E3B2E]/60 transition-colors hover:text-[#0E3B2E]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#0E3B2E]">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-[#0E3B2E]/60">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-[#4C9A2A]" />
              +1 (405) 445 - 1637
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-[#4C9A2A]" />
              info@medicalmarijuanadoctoroklahoma.com
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#4C9A2A]" />
              1036 W I-240 Service Road, Oklahoma City, OK 73139
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-[#4C9A2A]" />
              9:00 am to 10:00 pm
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-black/5 pt-6 text-center">
        <p className="text-xs text-[#0E3B2E]/50">
          © {new Date().getFullYear()} Medical Marijuana Doctor Oklahoma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
