import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are the doctors licensed to recommend medical marijuana?",
    answer:
      "Yes. All our doctors are state-licensed and registered to legally evaluate and recommend medical marijuana for qualifying Oklahoma patients under OMMA.",
  },
  {
    question: "What qualifications do MMJ doctors have?",
    answer:
      "Our doctors are board-certified medical professionals with specialized training in medical cannabis treatment and experience managing qualifying health conditions.",
  },
  {
    question: "How can I speak directly with a medical marijuana doctor?",
    answer:
      "You can book a telehealth consultation and connect directly with our licensed MMJ doctor through a secure video or audio call, all from the comfort of your home.",
  },
  {
    question: "How long does a doctor consultation usually take?",
    answer:
      "Most consultations last about 10-15 minutes, giving the doctor enough time to review your health history, discuss symptoms, and determine your eligibility for medical cannabis.",
  },
  {
    question: "What should I prepare before my appointment with the MMJ doctor?",
    answer:
      "Have your valid ID and any relevant medical records ready. These help your doctor better understand your health condition and make an informed certification decision.",
  },
  {
    question: "Will the doctor ask for my medical history or records?",
    answer:
      "Yes, your doctor will review your medical history, current medications, and past diagnoses to ensure your cannabis recommendation is medically appropriate and safe.",
  },
  {
    question: "How do doctors ensure my privacy?",
    answer:
      "All consultations are HIPAA-compliant, and personal health information is never shared without your consent.",
  },
  {
    question: "How does the doctor decide if I qualify for medical marijuana?",
    answer:
      "The doctor evaluates your symptoms, medical records, and overall condition based on Oklahoma's qualifying criteria to determine if you meet eligibility requirements.",
  },
  {
    question: "What happens if the doctor doesn't approve my medical condition?",
    answer:
      "If you're not approved for medical marijuana use, your consultation fee will be returned. Our goal is to ensure that every recommendation is compliant and medically justified.",
  },
  {
    question: "Do the same doctors handle renewals and first-time evaluations?",
    answer:
      "Yes. Many of our patients choose to return to the same doctor for renewals, ensuring consistent, ongoing care from a physician who understands their medical history.",
  },
];

export function DoctorsFaq() {
  return (
    <section className="bg-[#EAF1EA] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[#0E3B2E]/80">
            Everything patients ask before their first Oklahoma evaluation.
          </p>
        </div>

        <Accordion defaultValue={[0]} className="mt-10 flex flex-col gap-3 rounded-none border-none bg-transparent">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={index}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-5 text-sm font-semibold text-[#0E3B2E] hover:no-underline sm:text-base [&_svg]:text-[#2F7A18]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 text-sm leading-relaxed text-[#0E3B2E]/85">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex justify-center">
          <Button
            render={<a href="#contact" />}
            className="h-auto gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
          >
            Contact Our Support Team <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
