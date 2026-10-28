import type { Metadata } from "next";
import Link from "next/link";
import { site, telHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AppUploaderNav } from "@/components/app-uploader/AppUploaderNav";
import {
  UploadCloud,
  Layers,
  KeyRound,
  FileCheck2,
  Clock,
  ShieldCheck,
  FileText,
  Trash2,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "REASEY Uploader — Facebook Page Publishing & Management",
  description:
    "REASEY Uploader is a dedicated publishing workflow application developed by ADSolution to help authorized users connect, manage, schedule, and publish content to Facebook Pages.",
  alternates: { canonical: "/app-uploader" },
};

const verifiedFeatures = [
  {
    icon: KeyRound,
    title: "Meta OAuth 2.0 Authorization",
    description:
      "Secure authentication using official Meta Login. Requests granular permissions strictly for Facebook Pages that the authenticated user explicitly manages (pages_show_list, pages_read_engagement, pages_manage_posts).",
  },
  {
    icon: UploadCloud,
    title: "Page Content Publishing",
    description:
      "Facilitates posting video, image, and text content directly to authorized Facebook Pages through official Meta Graph API endpoints.",
  },
  {
    icon: Clock,
    title: "Workflow Scheduling & Queuing",
    description:
      "Allows operators to plan and queue posts for future publication dates and times, aligning with structured content calendars.",
  },
  {
    icon: Layers,
    title: "Multi-Page Management",
    description:
      "Provides operators with an organized interface to view and switch between different managed Facebook Pages without repetitive re-authentication.",
  },
  {
    icon: FileCheck2,
    title: "Operational Status & Logging",
    description:
      "Monitors API responses, submission statuses, and returned post IDs in PostgreSQL to provide operational clarity and assist with error diagnostics.",
  },
  {
    icon: ShieldCheck,
    title: "Application-Layer Token Encryption",
    description:
      "Encrypts user and Page access tokens at the application layer using AES-256-GCM before writing to PostgreSQL. Tokens are never exposed to browser clients or third parties.",
  },
];

const policyCards = [
  {
    title: "Privacy Policy",
    href: "/app-uploader/privacy",
    icon: ShieldCheck,
    description:
      "Comprehensive disclosure of Meta OAuth authorization, application-layer AES-256-GCM token encryption, Facebook Page data processing, retention, and revocation options.",
    badge: "Meta Compliance",
  },
  {
    title: "Terms of Service",
    href: "/app-uploader/terms",
    icon: FileText,
    description:
      "Terms governing operator authorization, content responsibility, acceptable use standards, and service boundaries.",
    badge: "Legal Terms",
  },
  {
    title: "Data Deletion Instructions",
    href: "/app-uploader/data-deletion",
    icon: Trash2,
    description:
      "Clear instructions on how to revoke Meta permissions in Facebook Settings and submit an administrative request for complete data and media erasure.",
    badge: "Data Rights",
  },
];

export default function AppUploaderPage() {
  return (
    <>
      <PageHeader
        eyebrow="Application Information"
        title="REASEY Uploader"
        description="A specialized publishing workflow application developed by ADSolution to streamline Facebook Page publishing, scheduling, and asset distribution for authorized operators."
      >
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-400/30 bg-brand-500/10 px-3.5 py-1 text-xs font-medium text-brand-200">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Meta Graph API Integration
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-white/70">
            Authorized Operators Only
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-white/70">
            ADSolution Internal Tooling
          </span>
        </div>
      </PageHeader>

      <AppUploaderNav />

      {/* Overview Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Application Purpose"
                title="Structured Publishing for Facebook Pages."
                description="Built to eliminate manual friction and coordinate publishing operations across brand and business pages."
              />
              <div className="mt-6 space-y-4 text-sm text-muted">
                <div className="flex items-start gap-3 rounded-lg border border-line bg-surface p-4">
                  <CheckCircle2 className="size-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ink">Role-Based Access:</span> Designed
                    strictly for verified staff and clients managed by ADSolution.
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-line bg-surface p-4">
                  <CheckCircle2 className="size-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ink">Zero Public Content Scraping:</span>{" "}
                    Does not index public feeds or collect third-party user browsing history.
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-line bg-surface p-4">
                  <CheckCircle2 className="size-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ink">Direct API Communication:</span>{" "}
                    Utilizes verified Meta developer endpoints to handle official Graph API transactions.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5 text-[15.5px] leading-relaxed text-muted">
              <p>
                <strong className="text-ink">REASEY Uploader</strong> is an internal workflow
                application built by ADSolution. Its primary purpose is to assist social media
                managers, content specialists, and authorized business administrators in executing
                content publishing tasks directly to Facebook Pages they manage.
              </p>
              <p>
                Managing multiple client assets and editorial calendars often involves repetitive
                manual steps. REASEY Uploader connects to Facebook using the official Meta OAuth 2.0
                framework, enabling authorized operators to select connected Pages, compose post
                captions, upload designated media assets, and dispatch or schedule posts via the
                Meta Graph API.
              </p>
              <div className="rounded-xl border border-line bg-surface p-6">
                <h3 className="font-display text-base font-bold text-ink">
                  Application Scope & Access Control
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  REASEY Uploader is an enterprise utility operated for authorized business workflows.
                  Access is credentialed and restricted to designated operators. The application does
                  not offer open consumer account creation or public social networking features.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Verified Features Grid */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24 border-y border-line">
        <Container>
          <SectionHeader
            eyebrow="Technical Capabilities"
            title="Verified Application Workflow"
            description="The system architecture encompasses these core functions within the Meta ecosystem."
            align="center"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {verifiedFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="card p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-base font-bold text-ink">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-line/60 flex items-center text-xs font-semibold text-brand-600">
                    <span>Verified Implementation</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Compliance & Policy Hub Cards */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Compliance & Governance"
            title="Policies & Regulatory Standards"
            description="Transparent documentation covering data handling, platform terms, and data deletion rights."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {policyCards.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  className="card card-hover group p-7 flex flex-col justify-between border-line transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted group-hover:text-brand-600 transition-colors">
                        {p.badge}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-ink group-hover:text-brand-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-brand-600 group-hover:text-brand-700">
                    <span>Read policy documentation</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Pre-Publication Verification & Developer Contact */}
      <section className="bg-navy-950 py-16 sm:py-20 text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow eyebrow-dark">Business Entity & Verified Contact</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Operated by ADSolution
              </h2>
              <p className="text-sm leading-relaxed text-white/65">
                REASEY Uploader is maintained by the ADSolution digital engineering team. For
                compliance inquiries, authorization requests, or Meta audit reviews, reach out
                directly to the registered business contact below.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-sm text-white/80">
                  <Mail className="size-4 text-brand-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white/40 block text-xs">Official Inquiries & Support</span>
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-white hover:text-brand-300 underline underline-offset-2"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-white/80">
                  <Phone className="size-4 text-brand-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white/40 block text-xs">Direct Telephone</span>
                    <div className="space-x-3">
                      {site.phones.map((ph) => (
                        <a
                          key={ph}
                          href={telHref(ph)}
                          className="font-medium text-white hover:text-brand-300"
                        >
                          {ph}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-white/80">
                  <MapPin className="size-4 text-brand-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white/40 block text-xs">Registered Business Address</span>
                    <span className="text-white/80 leading-relaxed block">{site.address.full}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 rounded-xl border border-white/10 bg-white/[0.04] p-7 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-300">
                <AlertCircle className="size-4 text-brand-400" />
                <span>Meta Platform Compliance Notice</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-white">
                Independence & Trademark Disclaimer
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                REASEY Uploader is an independent software tool developed by ADSolution. It is not
                developed, sponsored, owned, or endorsed by Meta Platforms, Inc. All Facebook, Meta,
                and related logos and trademarks are the intellectual property of Meta Platforms, Inc.
              </p>
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-4 text-xs text-white/50">
                <Link href="/app-uploader/privacy" className="hover:text-white underline">
                  Privacy Policy
                </Link>
                <Link href="/app-uploader/terms" className="hover:text-white underline">
                  Terms of Service
                </Link>
                <Link href="/app-uploader/data-deletion" className="hover:text-white underline">
                  Data Deletion Instructions
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
