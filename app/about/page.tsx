import type { Metadata } from "next";
import { Compass, Eye, Lightbulb, Cpu, BarChart3, Handshake } from "lucide-react";
import { coreValues } from "@/lib/data/values";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "ADSolution is a modern digital advertising and creative solution company focused on strategy, creativity, technology, performance and long-term client relationships.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    icon: Compass,
    title: "Strategy",
    text: "Every project starts with understanding the business, the customer and the goal — before anything is designed or launched.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    text: "Attention is the scarcest resource online. We create work that earns it and communicates clearly.",
  },
  {
    icon: Cpu,
    title: "Technology",
    text: "Websites, tools and automation that make your business faster, more professional and easier to run.",
  },
  {
    icon: BarChart3,
    title: "Performance",
    text: "We measure what matters and keep improving. Results, not just activity.",
  },
  {
    icon: Handshake,
    title: "Long-term Partnership",
    text: "We aim to be the digital partner you keep — growing with your business over years, not campaigns.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About ADSolution"
        title="Building Better Digital Experiences for Growing Businesses."
        description="ADSolution is a modern digital advertising and creative solution company. The name says it: Advertising + Digital + Solution — one team that brings all three together."
      />

      {/* Story */}
      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Who We Are"
                title="One Partner for Advertising, Creative and Digital."
              />
            </div>
            <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-7">
              <p>
                Most growing businesses work with several disconnected
                providers: one for ads, one for design, one for the website.
                The result is inconsistent messaging, slow execution and
                nobody accountable for the outcome.
              </p>
              <p>
                ADSolution was built to solve that. We combine strategy,
                creative production, digital advertising and practical
                digital solutions under one roof — so your brand looks
                consistent everywhere, campaigns launch faster and results
                are measured in one place.
              </p>
              <p className="border-l-2 border-brand-500 pl-5 font-medium text-ink">
                We don&apos;t just create ads. We create digital solutions that
                help businesses grow.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Mission / Vision */}
      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: Compass,
                label: "Our Mission",
                text: "To help businesses grow through effective advertising, creative communication, and practical digital solutions.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                text: "To become a trusted digital growth partner for ambitious businesses.",
              },
            ].map((m, i) => (
              <Reveal
                key={m.label}
                delay={i * 120}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-8 sm:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-500/20 blur-[70px]" />
                <span className="flex size-11 items-center justify-center rounded-lg bg-brand-500 text-white">
                  <m.icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
                  {m.label}
                </p>
                <p className="mt-3 text-balance font-display text-2xl font-bold leading-snug text-white sm:text-[1.75rem]">
                  {m.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeader
            eyebrow="What We Focus On"
            title="Five Things That Shape Every Project."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <div className="card card-hover group h-full p-7">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <p.icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={180}>
              <div className="flex h-full flex-col justify-center rounded-xl border border-dashed border-brand-300 bg-brand-50/60 p-7">
                <p className="font-display text-xl font-bold text-brand-800">
                  Strategy × Creativity × Technology
                </p>
                <p className="mt-2 text-[15px] text-brand-700/80">
                  The combination is what turns attention into growth.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Core values */}
      <section className="bg-surface py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeader
                eyebrow="Core Values"
                title="What We Stand For."
                description="The principles behind how we work with every client."
              />
            </div>
            <ol className="divide-y divide-line rounded-xl border border-line bg-white lg:col-span-8">
              {coreValues.map((v, i) => (
                <Reveal
                  key={v.title}
                  as="li"
                  delay={i * 70}
                  className="grid gap-2 p-6 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:p-7"
                >
                  <span className="font-display text-sm font-bold text-brand-500">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{v.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">
                      {v.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <ProcessTimeline />
      <CTASection
        title="Let's Build Something That Grows."
        description="Ready to work with a partner that understands strategy, creative and technology? Let's talk about your business."
        primary={{ label: "Talk to ADSolution", href: "/contact" }}
        secondary={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}
