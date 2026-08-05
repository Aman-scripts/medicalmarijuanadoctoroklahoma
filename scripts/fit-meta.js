const titles = {
  home: "Medical Marijuana Doctor Oklahoma | Your MMJ Card Now",
  about: "About Us | Medical Marijuana Doctor Oklahoma Team",
  contact: "Contact Us | Medical Marijuana Doctor Oklahoma",
  doctors: "Our Doctors | Medical Marijuana Doctor Oklahoma",
  faq: "FAQ | Medical Marijuana Doctor Oklahoma Answers",
  privacy: "Privacy Policy | Medical Marijuana Doctor OK",
  terms: "Terms of Use | Medical Marijuana Doctor Oklahoma",
  hipaa: "HIPAA Compliance | Medical Marijuana Doctor OK",
  telehealth: "Consent to Telehealth | Medical Marijuana Doctor",
  refund: "Refund Policy | Medical Marijuana Doctor Oklahoma",
  accessibility: "Accessibility | Medical Marijuana Doctor Oklahoma",
  editorial: "Editorial Policy | Medical Marijuana Doctor OK",
  disclaimer: "Disclaimer | Medical Marijuana Doctor Oklahoma",
};

const descs = {
  home: "Oklahoma's trusted telehealth platform for medical marijuana evaluations. Licensed OK doctors, fast online visits, and clear OMMA card guidance for patients.",
  about:
    "Learn how Medical Marijuana Doctor Oklahoma connects patients with licensed physicians for secure, compliant medical marijuana evaluations statewide.",
  contact:
    "Questions about your Oklahoma MMJ card? Contact Medical Marijuana Doctor Oklahoma by phone, email, or visit. Real staff respond quickly to help you.",
  doctors:
    "Meet Oklahoma-licensed physicians offering medical marijuana evaluations through Medical Marijuana Doctor Oklahoma. Fast, secure telehealth visits.",
  faq: "Answers to common questions about Oklahoma medical marijuana cards, telehealth evaluations, eligibility rules, and OMMA application next steps.",
  privacy:
    "See how Medical Marijuana Doctor Oklahoma collects, uses, and protects your personal and health information during medical marijuana evaluations.",
  terms:
    "Read Terms of Use for Medical Marijuana Doctor Oklahoma covering eligibility, telehealth consent, physician relationships, liability, and Oklahoma law.",
  hipaa:
    "See how Medical Marijuana Doctor Oklahoma protects patient health information and maintains HIPAA compliance during telehealth MMJ evaluations.",
  telehealth:
    "Read our Consent to Telehealth policy to understand how remote evaluations work with Medical Marijuana Doctor Oklahoma licensed physicians.",
  refund:
    "Learn when you qualify for a full refund on your Oklahoma medical marijuana evaluation, plus missed appointment fees and the refund request process.",
  accessibility:
    "Medical Marijuana Doctor Oklahoma is committed to WCAG 2.1 accessibility standards so every patient can use our telehealth services with ease.",
  editorial:
    "See how Medical Marijuana Doctor Oklahoma ensures accurate, fact-checked medical marijuana content for Oklahoma patients, caregivers, and readers.",
  disclaimer:
    "Read important disclaimers about Medical Marijuana Doctor Oklahoma telehealth services, including limits on medical advice and platform responsibility.",
};

function fit(s, n) {
  if (s.length === n) return s;
  if (s.length > n) {
    // trim at word boundary when possible
    let cut = s.slice(0, n);
    const lastSpace = cut.lastIndexOf(" ");
    if (lastSpace > n - 18) cut = cut.slice(0, lastSpace);
    // pad if we went under
    while (cut.length < n) {
      cut += ".";
      if (cut.length === n) break;
      // prefer adding helpful words instead of dots
      break;
    }
    if (cut.length < n) {
      const filler = " in Oklahoma today for patients";
      cut = (cut.replace(/[.\s]+$/, "") + filler).slice(0, n);
    }
    return cut.slice(0, n);
  }
  const extras = [
    " Online",
    " in OK",
    " Today",
    " Here",
    " Now",
    " Info",
    " Page",
    " Hub",
    " Guide",
    " Help",
  ];
  let out = s;
  for (const e of extras) {
    if ((out + e).length <= n) out += e;
  }
  if (out.length < n) {
    const filler = " for Oklahoma patients";
    out = (out + filler).slice(0, n);
  }
  if (out.length < n) out = out.padEnd(n, ".");
  return out.slice(0, n);
}

console.log("TITLES");
for (const [k, v] of Object.entries(titles)) {
  const t = fit(v, 55);
  console.log(`${k}|${t.length}|${t}`);
}
console.log("\nDESCS");
for (const [k, v] of Object.entries(descs)) {
  const d = fit(v, 130);
  console.log(`${k}|${d.length}|${d}`);
}
