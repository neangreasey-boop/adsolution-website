import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { AppUploaderNav } from "./AppUploaderNav";
import { site } from "@/lib/site";
import { ArrowRight, AlertTriangle } from "lucide-react";

export type LegalSection = {
  heading: string;
  body: React.ReactNode;
};

type Props = {
  eyebrow?: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  advisoryNotice?: {
    title: string;
    description: string;
    points?: string[];
  };
  nextPage?: {
    label: string;
    href: string;
    description: string;
  };
};

export function AppUploaderLegalPage({
  eyebrow = "REASEY Uploader • Policy & Compliance",
  title,
  updated,
  intro,
  sections,
  advisoryNotice,
  nextPage,
}: Props) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={intro}>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/50">
          <span>Application: REASEY Uploader</span>
          <span>•</span>
          <span>Last updated: {updated}</span>
          <span>•</span>
          <span>Publisher: {site.name}</span>
        </div>
      </PageHeader>

      <AppUploaderNav />

      <section className="py-14 sm:py-20">
        <Container size="narrow">
          {advisoryNotice && (
            <div className="mb-12 rounded-xl border border-amber-200 bg-amber-50/70 p-6 sm:p-7 text-amber-900">
              <div className="flex items-start gap-3">
                <AlertTriangle className="size-5 text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-display text-base font-bold text-amber-950">
                    {advisoryNotice.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-amber-900/90">
                    {advisoryNotice.description}
                  </p>
                  {advisoryNotice.points && advisoryNotice.points.length > 0 && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-amber-900/85">
                      {advisoryNotice.points.map((pt, idx) => (
                        <li key={idx}>{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="space-y-12 text-[15.5px] leading-relaxed text-muted [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2 [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5">
            {sections.map((s) => (
              <div key={s.heading} className="border-b border-line/60 pb-10 last:border-b-0 last:pb-0">
                <h2 className="text-xl font-bold text-ink sm:text-2xl tracking-tight">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-3.5">{s.body}</div>
              </div>
            ))}
          </div>

          {/* Quick Cross-Navigation Card */}
          <div className="mt-16 rounded-xl border border-line bg-surface p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                  REASEY Uploader Governance
                </p>
                <h3 className="mt-1 text-base font-bold text-ink">
                  {nextPage ? nextPage.label : "Return to REASEY Uploader Hub"}
                </h3>
                <p className="mt-1 text-xs text-muted max-w-md">
                  {nextPage
                    ? nextPage.description
                    : "Review application overview, operational workflow, and verified business contacts."}
                </p>
              </div>
              <Link
                href={nextPage ? nextPage.href : "/app-uploader"}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-brand-600 shrink-0 self-start sm:self-auto"
              >
                <span>{nextPage ? "Proceed to " + nextPage.label : "Back to Overview"}</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
