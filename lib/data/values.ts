import type { LucideIcon } from "lucide-react";
import { Target, Sparkles, TrendingUp, Handshake } from "lucide-react";

export type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** Trust / value pillars shown directly below the hero. */
export const values: Value[] = [
  {
    title: "Strategic",
    description: "We focus on strategy, not just execution.",
    icon: Target,
  },
  {
    title: "Creative",
    description:
      "We create content and campaigns designed to capture attention.",
    icon: Sparkles,
  },
  {
    title: "Performance",
    description: "We focus on measurable business results.",
    icon: TrendingUp,
  },
  {
    title: "Reliable",
    description: "We build long-term relationships with our clients.",
    icon: Handshake,
  },
];

/** Core values for the About page. */
export const coreValues = [
  {
    title: "Creativity",
    description:
      "We look for the idea that makes people stop, look and remember.",
  },
  {
    title: "Integrity",
    description:
      "Honest recommendations, transparent reporting and no inflated promises.",
  },
  {
    title: "Results",
    description:
      "Every decision is measured against the outcome it creates for your business.",
  },
  {
    title: "Innovation",
    description:
      "We keep learning new platforms, formats and tools so you don't have to.",
  },
  {
    title: "Partnership",
    description:
      "We work as an extension of your team, invested in your long-term growth.",
  },
];
