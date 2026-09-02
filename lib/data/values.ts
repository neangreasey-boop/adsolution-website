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
      "We develop creative ideas that help businesses communicate clearly and stand out in a competitive digital environment.",
  },
  {
    title: "Results-Focused",
    description:
      "We focus on practical strategies and solutions that are aligned with business objectives.",
  },
  {
    title: "Professionalism",
    description:
      "We value quality, responsibility, transparency, and professional communication in every project.",
  },
  {
    title: "Innovation",
    description:
      "We continuously explore new digital technologies, tools, and approaches to improve the way businesses work and grow.",
  },
  {
    title: "Partnership",
    description:
      "We believe strong results come from understanding our clients and working together as long-term partners.",
  },
];

export const mission =
  "To provide reliable, creative, and results-focused digital services that help businesses reach the right audience, communicate their value, and build sustainable digital growth.";

export const vision =
  "To become a trusted digital partner for businesses, helping them grow through effective advertising, creative communication, and practical digital solutions.";
