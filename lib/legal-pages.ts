import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  CheckCheck,
  EyeOff,
  HandCoins,
  PenLine,
  ShieldCheck,
  TriangleAlert,
  Video,
} from "lucide-react";
import { pages } from "@/lib/seo";

export type LegalPage = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const legalPages: LegalPage[] = [
  {
    label: "Privacy Policy",
    href: pages.privacy.path,
    description: "How we collect, use, and protect your personal and health information.",
    icon: EyeOff,
  },
  {
    label: "HIPAA Compliance",
    href: pages.hipaa.path,
    description: "Our standards for safeguarding patient health information in telehealth care.",
    icon: ShieldCheck,
  },
  {
    label: "Consent for Telehealth",
    href: pages.telehealth.path,
    description: "What to know before joining a remote evaluation with a licensed physician.",
    icon: Video,
  },
  {
    label: "Terms of Use",
    href: pages.terms.path,
    description: "Rules for using our platform, eligibility, liability, and Oklahoma law.",
    icon: CheckCheck,
  },
  {
    label: "Refund Policy",
    href: pages.refund.path,
    description: "When you qualify for a refund and how to request one after an evaluation.",
    icon: HandCoins,
  },
  {
    label: "Accessibility Statement",
    href: pages.accessibility.path,
    description: "Our commitment to WCAG standards so every patient can use this site.",
    icon: Accessibility,
  },
  {
    label: "Editorial Policy",
    href: pages.editorial.path,
    description: "How we research, review, and keep medical marijuana content accurate.",
    icon: PenLine,
  },
  {
    label: "Disclaimer",
    href: pages.disclaimer.path,
    description: "Important limits on medical advice and the role of our platform.",
    icon: TriangleAlert,
  },
];
