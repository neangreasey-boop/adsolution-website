import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  Share2,
  Clapperboard,
  PenTool,
  Globe,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  /** One-line outcome statement used on the Services page */
  outcome: string;
};

export const services: Service[] = [
  {
    slug: "digital-advertising",
    title: "Digital Advertising",
    short:
      "Paid campaigns built on strategy, precise targeting and continuous optimization.",
    description:
      "We plan, launch and manage paid campaigns across Meta platforms with a clear objective behind every dollar. From audience research to creative testing and reporting, every campaign is built to be measured and improved.",
    icon: Megaphone,
    items: [
      "Facebook & Instagram Ads",
      "Campaign Strategy",
      "Audience Targeting",
      "Campaign Optimization",
      "Performance Tracking",
    ],
    outcome: "Reach the right people, at the right moment, with a message that converts.",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    short:
      "Consistent, on-brand presence that turns followers into a community.",
    description:
      "Your social channels are often the first impression a customer gets. We handle planning, publishing and community engagement so your brand stays active, consistent and growing — without you having to think about it every day.",
    icon: Share2,
    items: [
      "Page Management",
      "Content Planning",
      "Publishing",
      "Community Management",
      "Growth Strategy",
    ],
    outcome: "A professional, always-on presence that builds trust over time.",
  },
  {
    slug: "creative-content",
    title: "Creative & Content",
    short:
      "Design and video crafted to stop the scroll and communicate clearly.",
    description:
      "Attention is earned with creative. Our team produces graphics, short-form video and promotional content designed for the platforms your customers actually use — and for the campaigns that need to perform.",
    icon: Clapperboard,
    items: [
      "Graphic Design",
      "Social Media Creative",
      "Video Editing",
      "Short-form Video",
      "Promotional Content",
      "Brand Content",
    ],
    outcome: "Creative that looks premium and works hard for your objectives.",
  },
  {
    slug: "branding",
    title: "Branding",
    short:
      "A clear, consistent identity that makes your business look established.",
    description:
      "A strong brand makes every other marketing effort more effective. We build identities that are distinctive, flexible and ready to be applied everywhere — from your logo to your marketing materials.",
    icon: PenTool,
    items: [
      "Logo Design",
      "Brand Identity",
      "Visual Guidelines",
      "Marketing Materials",
    ],
    outcome: "An identity your customers recognize and your team can use with confidence.",
  },
  {
    slug: "digital-solutions",
    title: "Digital Solutions",
    short:
      "Websites, landing pages and the digital infrastructure behind your business.",
    description:
      "We build the practical digital foundations a modern business needs: fast websites, high-converting landing pages, professional email and the tools that save your team time.",
    icon: Globe,
    items: [
      "Website Development",
      "Landing Pages",
      "Business Email",
      "Domain Setup",
      "Digital Tools & Automation",
    ],
    outcome: "A reliable digital foundation that supports your growth.",
  },
];

/** Options used in the contact form's "Service Interested In" select. */
export const serviceOptions = [
  ...services.map((s) => s.title),
  "Multiple Services",
  "Not sure yet",
];
