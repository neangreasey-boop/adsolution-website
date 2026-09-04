import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site, socials } from "@/lib/site";
import { founder } from "@/lib/data/founder";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

/* Self-hosted variable fonts (SIL OFL) — no third-party font requests. */
const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

const manrope = localFont({
  src: "./fonts/manrope-latin-wght-normal.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,

  other: {
    "facebook-domain-verification": "665wzo2bnsu2is3axdgz6p56dv4yd6",
  },
  applicationName: site.name,
  keywords: [
    "digital advertising",
    "Facebook ads",
    "Instagram ads",
    "social media management",
    "creative agency",
    "branding",
    "website development",
    "digital solutions",
    "ADSolution",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a1226",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phones[0],
  description: site.description,
  logo: `${site.url}/icon.svg`,
  image: `${site.url}/og-image.png`,
  sameAs: socials.map((s) => s.href),
  founder: {
    "@type": "Person",
    name: founder.name,
    jobTitle: "Founder",
    image: `${site.url}${founder.photo}`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.commune}`,
    addressLocality: site.address.district,
    addressRegion: site.address.province,
    postalCode: site.address.postalCode,
    addressCountry: "KH",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
