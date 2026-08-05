const meta = {
  home: {
    title: "Medical Marijuana Doctor Oklahoma | Get MMJ Card",
    description:
      "Oklahoma trusted telehealth for medical marijuana evaluations. Licensed OK doctors, fast online visits, and clear OMMA card guidance for qualifying patients today.",
  },
  about: {
    title: "About Us | Medical Marijuana Doctor Oklahoma",
    description:
      "Learn how Medical Marijuana Doctor Oklahoma connects patients with licensed physicians for secure, compliant medical marijuana evaluations across Oklahoma.",
  },
  contact: {
    title: "Contact Us | Medical Marijuana Doctor Oklahoma",
    description:
      "Questions about your Oklahoma MMJ card? Contact Medical Marijuana Doctor Oklahoma by phone, email, or office visit. Real staff respond quickly to help.",
  },
  doctors: {
    title: "Our Doctors | Medical Marijuana Doctor Oklahoma",
    description:
      "Meet Oklahoma-licensed physicians offering medical marijuana evaluations through Medical Marijuana Doctor Oklahoma with fast, secure telehealth visits.",
  },
  faq: {
    title: "FAQ | Medical Marijuana Doctor Oklahoma Guide",
    description:
      "Get answers about Oklahoma medical marijuana cards, telehealth evaluations, eligibility rules, OMMA applications, renewals, and next steps for patients.",
  },
  privacy: {
    title: "Privacy Policy | Medical Marijuana Doctor OK",
    description:
      "See how Medical Marijuana Doctor Oklahoma collects, uses, and protects personal and health information during medical marijuana evaluations and care.",
  },
  terms: {
    title: "Terms of Use | Medical Marijuana Doctor Oklahoma",
    description:
      "Read Terms of Use for Medical Marijuana Doctor Oklahoma covering eligibility, telehealth consent, physician relationships, liability, and Oklahoma law.",
  },
  hipaa: {
    title: "HIPAA Compliance | Medical Marijuana Doctor OK",
    description:
      "See how Medical Marijuana Doctor Oklahoma protects patient health information and maintains HIPAA compliance during telehealth medical marijuana visits.",
  },
  telehealth: {
    title: "Telehealth Consent | Medical Marijuana Doctor OK",
    description:
      "Read our Consent to Telehealth policy to understand how remote evaluations work with Medical Marijuana Doctor Oklahoma licensed physicians statewide.",
  },
  refund: {
    title: "Refund Policy | Medical Marijuana Doctor Oklahoma",
    description:
      "Learn when you qualify for a full refund on your Oklahoma medical marijuana evaluation, plus missed appointment fees and how to request a refund.",
  },
  accessibility: {
    title: "Accessibility | Medical Marijuana Doctor Oklahoma",
    description:
      "Medical Marijuana Doctor Oklahoma commits to WCAG 2.1 accessibility standards so every patient can use our telehealth services clearly and easily.",
  },
  editorial: {
    title: "Editorial Policy | Medical Marijuana Doctor OK",
    description:
      "See how Medical Marijuana Doctor Oklahoma ensures accurate, fact-checked medical marijuana content for Oklahoma patients, caregivers, and readers.",
  },
  disclaimer: {
    title: "Disclaimer | Medical Marijuana Doctor Oklahoma",
    description:
      "Read key disclaimers about Medical Marijuana Doctor Oklahoma telehealth services, including limits on medical advice and the platform role in care.",
  },
};

let ok = true;
for (const [key, value] of Object.entries(meta)) {
  const t = value.title.length;
  const d = value.description.length;
  const pass = t === 55 && d === 130;
  if (!pass) ok = false;
  console.log(`${pass ? "OK" : "BAD"} ${key.padEnd(14)} T=${t} D=${d}`);
  if (!pass) {
    console.log("  title:", JSON.stringify(value.title));
    console.log("  desc :", JSON.stringify(value.description));
  }
}
if (ok) {
  console.log("\nALL_GOOD");
  console.log(JSON.stringify(meta, null, 2));
}
