export type Doctor = {
  slug: string;
  name: string;
  credentials: string;
  experience: string;
  category: string;
  image: string;
  bio: string;
  about: string;
  focusAreas: string[];
};

export const doctors: Doctor[] = [
  {
    slug: "cheryl-bugailiskis",
    name: "Cheryl Bugailiskis",
    credentials: "MD",
    experience: "15 Years",
    category: "Pediatrics",
    image: "/dr-cheryl-bugailiskis.webp",
    bio: "Board-certified pediatrician providing compliant medical cannabis evaluations for qualifying Oklahoma patients.",
    about:
      "Dr. Bugailiskis has spent over a decade caring for Oklahoma families, with a particular focus on helping younger and pediatric patients navigate chronic conditions safely. She takes an unhurried, detail-oriented approach to every OMMA evaluation, walking each patient through how medical cannabis may fit into their broader treatment plan.",
    focusAreas: ["Chronic Pain", "Anxiety Disorders", "Sleep Conditions", "Autoimmune Conditions"],
  },
  {
    slug: "joel-durinka",
    name: "Joel Durinka",
    credentials: "MD",
    experience: "16 Years",
    category: "Family Medicine",
    image: "/image-of-joel-durinka.webp",
    bio: "Family medicine physician conducting a detailed evaluation of your medical history and qualifying conditions.",
    about:
      "With sixteen years in family medicine, Dr. Durinka reviews each patient's full medical history before recommending a course of care. He believes an OMMA evaluation should feel like a real consultation, not a rubber stamp, and takes time to answer questions about dosing, interactions, and renewal timelines.",
    focusAreas: ["Chronic Pain", "PTSD", "Migraines", "Digestive Disorders"],
  },
  {
    slug: "johnathan-miller",
    name: "Johnathan Miller",
    credentials: "MD",
    experience: "8 Years",
    category: "General Medicine",
    image: "/dr-johnathan-c-miller.webp",
    bio: "General physician using a holistic, patient-focused approach to every Oklahoma medical marijuana evaluation.",
    about:
      "Dr. Miller brings a holistic, whole-person perspective to general medicine, looking beyond a single diagnosis to understand how a patient's condition affects their daily life. Patients appreciate his straightforward explanations of Oklahoma's qualifying conditions and what to expect after approval.",
    focusAreas: ["Chronic Pain", "Anxiety Disorders", "Cancer Support", "Arthritis"],
  },
  {
    slug: "kevin-kargman",
    name: "Kevin Kargman",
    credentials: "DO",
    experience: "19 Years",
    category: "Pediatrics",
    image: "/doctor-kevin-kargman.webp",
    bio: "Certified pediatrician providing thorough, regulation-compliant medical marijuana evaluations.",
    about:
      "Dr. Kargman has nearly two decades of pediatric and family care experience, giving him deep familiarity with how chronic conditions present differently across age groups. He is thorough about documentation, which helps his patients stay compliant with Oklahoma's renewal requirements year after year.",
    focusAreas: ["Seizure Disorders", "Chronic Pain", "PTSD", "Nausea & Appetite Loss"],
  },
  {
    slug: "lewis-jassey",
    name: "Lewis Jassey",
    credentials: "DO",
    experience: "19 Years",
    category: "Pediatrics",
    image: "/dr-lewis-jassey.webp",
    bio: "Osteopathic medicine specialist in pediatrics offering careful, state-regulated evaluations.",
    about:
      "Trained in osteopathic medicine, Dr. Jassey treats each evaluation as part of an ongoing care relationship rather than a one-time visit. He is well versed in Oklahoma's OMMA regulations and works to make sure every recommendation he files is medically sound and fully compliant.",
    focusAreas: ["Chronic Pain", "Muscle Spasms", "Sleep Conditions", "Anxiety Disorders"],
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((doctor) => doctor.slug === slug);
}
