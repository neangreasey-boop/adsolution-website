export const portfolioCategories = [
  "All",
  "Advertising",
  "Branding",
  "Creative",
  "Social",
  "Web",
] as const;

export type PortfolioCategory = Exclude<
  (typeof portfolioCategories)[number],
  "All"
>;

export type Project = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  /** Path under /public. Replace with a real image (recommended 1200×900). */
  image?: string;
  /** Accent hue used for the placeholder art while `image` is not set. */
  tone: "blue" | "navy" | "slate";
  /** Marks sample content. Set to false once replaced with real work. */
  placeholder: boolean;
};

/**
 * PLACEHOLDER PROJECTS
 * ---------------------------------------------------------------
 * These are sample entries so the portfolio layout can be reviewed.
 * They are NOT real client work. Replace each entry with a real
 * project (title, category, description, image) and set
 * `placeholder: false`. Cards with `placeholder: true` display a
 * visible "Sample project" label.
 */
export const projects: Project[] = [
  {
    slug: "sample-advertising-campaign",
    title: "Lead Generation Campaign",
    category: "Advertising",
    description:
      "A Meta ads campaign structured around audience testing, creative iteration and weekly optimization.",
    tone: "blue",
    placeholder: true,
  },
  {
    slug: "sample-brand-identity",
    title: "Brand Identity System",
    category: "Branding",
    description:
      "Logo, colour system, typography and guidelines for a business preparing to scale.",
    tone: "navy",
    placeholder: true,
  },
  {
    slug: "sample-short-form-video",
    title: "Short-form Video Series",
    category: "Creative",
    description:
      "A batch of vertical videos designed for Reels and TikTok, produced for a product launch.",
    tone: "slate",
    placeholder: true,
  },
  {
    slug: "sample-social-management",
    title: "Social Media Presence",
    category: "Social",
    description:
      "Monthly content planning, publishing and community management across Facebook and Instagram.",
    tone: "navy",
    placeholder: true,
  },
  {
    slug: "sample-website",
    title: "Business Website & Landing Page",
    category: "Web",
    description:
      "A fast, mobile-first website with a conversion-focused landing page and business email setup.",
    tone: "blue",
    placeholder: true,
  },
  {
    slug: "sample-promotional-creative",
    title: "Promotional Creative Set",
    category: "Creative",
    description:
      "Static and motion creative for a seasonal promotion across social and paid placements.",
    tone: "slate",
    placeholder: true,
  },
];
