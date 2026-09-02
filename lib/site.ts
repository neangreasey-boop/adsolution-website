/**
 * Central site configuration — the single source of truth for brand,
 * contact and social details used across pages, footer and metadata.
 */
export const site = {
  name: "ADSolution",
  tagline: "Advertising. Digital. Solutions.",
  url: "https://adsolution.men",
  domain: "adsolution.men",
  email: "neangreasey@hotmail.com",
  phones: ["+855 77 239 009", "+855 16 339 946"],
  address: {
    street: "National Road 51, Phum Lvea",
    commune: "Tumnob Thum Commune",
    district: "Ponhea Lueu District",
    province: "Kandal Province",
    postalCode: "08091302",
    country: "Cambodia",
    /** Single-line version for display */
    full: "National Road 51, Phum Lvea, Tumnob Thum Commune, Ponhea Lueu District, Kandal Province, 08091302, Cambodia",
  },
  title: "ADSolution — Digital Advertising & Creative Solutions",
  description:
    "ADSolution provides digital advertising, creative content, branding, social media management and digital solutions for growing businesses.",
  positioning:
    "A digital advertising and creative solutions agency focused on helping businesses build, grow, and improve their digital presence.",
  locale: "en_US",
  /** Copyright year shown in the footer */
  year: 2026,
} as const;

/** Phone number as a tel: href (digits only, keeps leading +) */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Social profiles. Only real, verified profiles are listed — add a new
 * entry here when another channel (LinkedIn, TikTok, Telegram…) exists.
 */
export const socials = [
  { name: "Facebook", key: "facebook", href: "https://web.facebook.com/reaseyneang" },
  { name: "Instagram", key: "instagram", href: "https://instagram.com/reasey_neang" },
] as const;

export type SocialKey = "facebook" | "instagram" | "linkedin" | "tiktok";
