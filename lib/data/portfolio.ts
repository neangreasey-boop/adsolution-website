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
  /** Path under /public. Recommended 1200×900. */
  image?: string;
  /** Accent hue used for the placeholder art while `image` is not set. */
  tone: "blue" | "navy" | "slate";
  /** Marks sample content. Must be false for real client work. */
  placeholder: boolean;
};

/**
 * REAL CLIENT PROJECTS
 * ---------------------------------------------------------------
 * This list is intentionally empty until real, approved ADSolution
 * projects are available. While it is empty the Portfolio page shows
 * the "What We Can Do" capabilities section instead of project cards.
 *
 * To publish a project, add an entry such as:
 *   {
 *     slug: "client-campaign",
 *     title: "Campaign name",
 *     category: "Advertising",
 *     description: "What was done (no unverified statistics).",
 *     image: "/portfolio/client-campaign.jpg",
 *     tone: "blue",
 *     placeholder: false,
 *   }
 */
export const projects: Project[] = [];
