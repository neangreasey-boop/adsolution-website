import type { Metadata } from "next";
import { projects } from "@/lib/data/portfolio";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Portfolio & Capabilities",
  description:
    "What ADSolution can do across digital advertising, social media, creative, branding, web and digital tools. Client case studies are published as they become available.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  const hasProjects = projects.length > 0;

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={hasProjects ? "Work That Turns Attention Into Results." : "What We Can Do for Your Business."}
        description={
          hasProjects
            ? "A selection of the projects we take on across advertising, branding, creative, social media and web."
            : "Client case studies are published here as they become available. In the meantime, here is the work ADSolution delivers across every service area."
        }
      />

      {hasProjects ? (
        <section className="py-16 sm:py-20 lg:py-24">
          <Container>
            <Reveal>
              <PortfolioGrid />
            </Reveal>
          </Container>
        </section>
      ) : (
        <CapabilitiesSection />
      )}

      <CTASection
        title="Your Project Could Be Next."
        description="Tell us what you're working on and we'll show you how ADSolution can help."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
