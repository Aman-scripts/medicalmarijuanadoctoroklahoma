import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      "What if I need some help for the purchasing and consumption of Medical Marijuana?",
    answer:
      "If you need assistance purchasing or consuming Medical Marijuana, a caregiver can help you. Caregivers must obtain a legitimate license through OMMA registration before assisting a patient.",
  },
  {
    question: "What are the qualifying conditions to get your Medical Marijuana Card in Oklahoma?",
    answer:
      "Oklahoma does not have a specific list of qualifying conditions. Licensed physicians use their own clinical discretion to determine eligibility, though common conditions include Alzheimer's, anxiety, arthritis, cancer, chronic pain, and HIV/AIDS, among others.",
  },
  {
    question:
      "Recently I got shifted to a new location in Oklahoma only. How can I update my current address with OMMA?",
    answer:
      "Log into OMMA's online patient portal, create a new application update with your current address, and review the confirmation email once it's processed.",
  },
  {
    question:
      "What documents are essential to be shown to the Medical Doctors during the evaluation process in Oklahoma?",
    answer:
      "You'll need a valid photo ID, proof of Oklahoma residency, and any relevant medical records that support your evaluation.",
  },
  {
    question:
      "How much time does OMMA take to review the application and assign a Medical Marijuana Card in Oklahoma?",
    answer:
      "Once your application is complete, OMMA typically mails your Medical Marijuana Card within 14 days.",
  },
  {
    question: "Are there any DUI rules applicable in Oklahoma?",
    answer:
      "Yes. Oklahoma enforces strict driving-under-the-influence regulations for Medical Marijuana patients, with real penalties for violations.",
  },
  {
    question: "Does Oklahoma provide a temporary electronic card before they send the permanent one?",
    answer:
      "No, Oklahoma does not issue temporary cards. Patients must wait the full 14-day processing window to receive their permanent Medical Marijuana Card.",
  },
  {
    question: "What are the benefits of having a Medical Marijuana Card in Oklahoma?",
    answer:
      "Cardholders get legal access to Medical Marijuana, legal protection under state law, lower taxes on purchases, and higher potency limits than what's available to recreational users.",
  },
  {
    question: "Does Oklahoma approve the home delivery of Medical Marijuana?",
    answer: "No, Oklahoma currently has no provision that allows home delivery of Medical Marijuana.",
  },
  {
    question: "Will I be on a government list if I become a Medical Marijuana patient in Oklahoma?",
    answer:
      "Yes, patients are recorded under the Oklahoma Law Enforcement Telecommunication System, which exists to verify and protect your legal status as a cardholder.",
  },
  {
    question: "How to get a Medical Marijuana Card in Oklahoma?",
    answer:
      "It's a four-step process: complete an online evaluation form and schedule your appointment, have a video consultation with a licensed doctor, register with OMMA ($50 fee), and receive your card by mail within 14 days.",
  },
  {
    question: "My card is about to expire. Can I renew the card?",
    answer:
      "Yes, renewal is available online through the OMMA portal. Standard Medical Marijuana Cards are valid for two years from the issue date.",
  },
  {
    question: "When does my Medical Marijuana Card expire in Oklahoma?",
    answer:
      "Standard cards expire two years from the date they're issued. Short-term licenses expire 60 days from their issue date.",
  },
  {
    question: "What does a Medical Marijuana Transportation license mean?",
    answer:
      "It's a notation provided with processor, grower, or dispensary licenses that allows legal transport of Medical Marijuana with a valid copy of the license on hand.",
  },
  {
    question: "What is a Medical Marijuana Processor license?",
    answer:
      "It authorizes a business to process Medical Marijuana for medical use. Licensed processors can sell concentrated product to licensed dispensaries or other processors for a fee.",
  },
  {
    question: "Does Oklahoma accept out-of-state Medical Marijuana Cards?",
    answer:
      "Yes, out-of-state cardholders can receive a temporary adult license that allows them to purchase and consume Medical Marijuana under Oklahoma's rules.",
  },
  {
    question: "What is meant by a Medical Marijuana Dispensary license?",
    answer:
      "It's a license that enables a business to legally sell Medical Marijuana to registered OMMA patients who hold a valid Medical Marijuana Card.",
  },
  {
    question: "I suddenly lost my Medical Marijuana Card. How can I get a replacement for that?",
    answer:
      "Apply for a replacement online through the OMMA patient portal. Replacement cards are typically processed and mailed within 14 days.",
  },
  {
    question: "What does a Grower's license mean?",
    answer:
      "It permits patients or caregivers to cultivate Medical Marijuana. Licensed growers can sell their product to licensed processors or state-licensed dispensaries.",
  },
];

export function FaqList() {
  return (
    <section className="px-6 pt-8 pb-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-heading text-2xl font-medium text-[#0E3B2E] sm:text-3xl">
          Common Questions Asked by Oklahoma Patients
        </h2>

        <Accordion
          defaultValue={[0]}
          className="mt-10 flex flex-col gap-3 rounded-none border-none bg-transparent"
        >
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
      </div>
    </section>
  );
}
