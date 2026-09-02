import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Selected advertising, branding, creative, social media and web projects by ADSolution.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Work That Turns Attention Into Results."
        description="A selection of the projects we take on across advertising, branding, creative, social media and web."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <PortfolioGrid />
          </Reveal>

          {/* Placeholder notice — remove once real projects are added */}
          <Reveal delay={100} className="mt-10">
            <p className="rounded-lg border border-dashed border-line bg-surface px-5 py-4 text-sm text-muted">
              <strong className="font-semibold text-ink">Note:</strong> The
              projects shown are sample entries so the layout can be reviewed.
              They will be replaced with real ADSolution case studies. No
              results or client names are shown until they are verified.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="Your Project Could Be Next."
        description="Tell us what you're working on and we'll show you how ADSolution can help."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
