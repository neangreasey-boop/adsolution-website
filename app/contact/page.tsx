import type { Metadata } from "next";
import { Mail, Globe, Clock, MessageSquareText } from "lucide-react";
import { site, socials } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ADSolution for digital advertising, creative, branding, social media and digital solutions. Send an inquiry and we'll get back to you.",
  alternates: { canonical: "/contact" },
};

const expectations = [
  "A reply from a real person, not an auto-responder",
  "A clear recommendation on the right services for your goals",
  "A transparent scope and next steps — no pressure",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Build Something That Grows."
        description="Tell us about your business and what you need. We'll come back with a clear recommendation and next steps."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Details */}
            <aside className="lg:col-span-4">
              <Reveal>
                <h2 className="text-2xl">Contact details</h2>
                <ul className="mt-6 space-y-5">
                  <li className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                      <Mail className="size-[18px]" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Email</p>
                      <a href={`mailto:${site.email}`} className="mt-1 block font-medium text-ink hover:text-brand-600">
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                      <Globe className="size-[18px]" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Website</p>
                      <a href={site.url} className="mt-1 block font-medium text-ink hover:text-brand-600">
                        {site.domain}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                      <Clock className="size-[18px]" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Response time</p>
                      <p className="mt-1 font-medium text-ink">Usually within 1–2 business days</p>
                    </div>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={100} className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Follow ADSolution</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <li key={s.key}>
                      {s.configured ? (
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-line px-3.5 py-2 text-sm font-medium text-ink transition hover:border-brand-300 hover:bg-brand-50"
                        >
                          <SocialIcon name={s.key} className="size-4 text-brand-600" />
                          {s.name}
                        </a>
                      ) : (
                        <span
                          title={`${s.name} link to be configured`}
                          className="inline-flex cursor-default items-center gap-2 rounded-md border border-dashed border-line px-3.5 py-2 text-sm font-medium text-muted"
                        >
                          <SocialIcon name={s.key} className="size-4" />
                          {s.name}
                          <span className="rounded bg-surface px-1.5 py-0.5 text-[10px] uppercase tracking-wider">
                            Soon
                          </span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={160} className="mt-10 rounded-xl bg-navy-950 p-6 text-white">
                <div className="flex items-center gap-2 text-brand-300">
                  <MessageSquareText className="size-4" aria-hidden />
                  <p className="text-xs font-semibold uppercase tracking-[0.18em]">What to expect</p>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-white/75">
                  {expectations.map((e) => (
                    <li key={e} className="flex gap-2.5">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-400" />
                      {e}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </aside>

            {/* Form */}
            <Reveal delay={80} className="lg:col-span-8">
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
