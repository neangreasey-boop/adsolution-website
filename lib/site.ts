/**
 * Central site configuration.
 * Anything marked TODO is a placeholder to replace before launch.
 */
export const site = {
  name: "ADSolution",
  tagline: "Advertising. Digital. Solutions.",
  url: "https://adsolution.men",
  domain: "adsolution.men",
  email: "admin@adsolution.men",
  title: "ADSolution — Digital Advertising & Creative Solutions",
  description:
    "ADSolution provides digital advertising, creative content, branding, social media management and digital solutions for growing businesses.",
  locale: "en_US",
  /** Founded / copyright year shown in the footer */
  year: 2026,
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Social profiles.
 * TODO: Replace each `href` with the real profile URL. Entries with
 * `configured: false` render as inert placeholders (no broken links).
 */
export const socials = [
  { name: "Facebook", key: "facebook", href: "#", configured: false },
  { name: "Instagram", key: "instagram", href: "#", configured: false },
  { name: "LinkedIn", key: "linkedin", href: "#", configured: false },
  { name: "TikTok", key: "tiktok", href: "#", configured: false },
] as const;

export type SocialKey = (typeof socials)[number]["key"];
