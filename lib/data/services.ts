import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  Share2,
  Clapperboard,
  PenTool,
  Globe,
  Workflow,
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
      "We plan, set up and manage paid campaigns on Facebook and Instagram with a clear objective behind every dollar. From audience research to ad optimization and performance monitoring, every campaign is built to be measured and improved.",
    icon: Megaphone,
    items: [
      "Facebook & Instagram Ads",
      "Campaign Strategy",
      "Audience Targeting",
      "Campaign Setup",
      "Ad Optimization",
      "Performance Monitoring",
      "Advertising Consultation",
    ],
    outcome: "Reach the right people, at the right moment, with a message that converts.",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    short:
      "Consistent, on-brand presence that turns followers into a community.",
    description:
      "Your social channels are often the first impression a customer gets. We handle planning, publishing and community engagement for your Facebook and Instagram presence so your brand stays active, consistent and growing — without you having to think about it every day.",
    icon: Share2,
    items: [
      "Facebook Page Management",
      "Instagram Management",
      "Content Planning",
      "Content Publishing",
      "Community Management",
      "Social Media Strategy",
    ],
    outcome: "A professional, always-on presence that builds trust over time.",
  },
  {
    slug: "creative-content",
    title: "Creative & Content",
    short:
      "Design and video crafted to stop the scroll and communicate clearly.",
    description:
      "Attention is earned with creative. We produce graphics, promotional designs, short-form video and Reels built for the platforms your customers actually use — and for the campaigns that need to perform.",
    icon: Clapperboard,
    items: [
      "Graphic Design",
      "Social Media Creatives",
      "Promotional Designs",
      "Video Editing",
      "Short-form Videos / Reels",
      "Promotional Content",
    ],
    outcome: "Creative that looks premium and works hard for your objectives.",
  },
  {
    slug: "branding",
    title: "Branding",
    short:
      "A clear, consistent identity that makes your business look established.",
    description:
      "A strong brand makes every other marketing effort more effective. We build identities that are distinctive, flexible and ready to be applied everywhere — from your logo and guidelines to your marketing materials and social media.",
    icon: PenTool,
    items: [
      "Logo Design",
      "Brand Identity",
      "Visual Identity",
      "Brand Guidelines",
      "Marketing Materials",
      "Social Media Branding",
    ],
    outcome: "An identity your customers recognize and your team can use with confidence.",
  },
  {
    slug: "web-digital-solutions",
    title: "Web & Digital Solutions",
    short:
      "Websites, landing pages and the digital infrastructure behind your business.",
    description:
      "We build the practical digital foundations a modern business needs: fast business websites, conversion-focused landing pages, domain and business email setup, and ongoing maintenance so everything keeps working.",
    icon: Globe,
    items: [
      "Business Website Development",
      "Landing Page Development",
      "Domain Setup",
      "Business Email Setup",
      "Website Maintenance",
      "Digital Infrastructure Setup",
    ],
    outcome: "A reliable digital foundation that supports your growth.",
  },
  {
    slug: "digital-tools-automation",
    title: "Digital Tools & Automation",
    short:
      "Practical tools and workflows that make your business faster and easier to run.",
    description:
      "We help businesses work smarter with the right digital tools — from marketing and business tools to process automation and custom digital solutions — with consultation on the technology that fits your needs.",
    icon: Workflow,
    items: [
      "Digital Workflow Solutions",
      "Business Tools",
      "Marketing Tools",
      "Process Automation",
      "Custom Digital Solutions",
      "Technology Consultation",
    ],
    outcome: "Less manual work, better systems, and more time to focus on growth.",
  },
];

/** Options used in the contact form's "Service Interested In" select. */
export const serviceOptions = [
  ...services.map((s) => s.title),
  "Multiple Services",
  "Not sure yet",
];
