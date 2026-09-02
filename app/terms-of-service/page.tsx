import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing the use of the ADSolution website and services.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: false, follow: true },
};

/* TODO (legal): Review this template with a legal advisor before launch. */
export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="September 2026"
      intro={`These terms apply to your use of ${site.domain} and to inquiries made through it. By using this website you agree to these terms.`}
      sections={[
        {
          heading: "Use of this website",
          body: (
            <p>
              The content on this website is provided for general information
              about {site.name} and its services. You may not use the website
              in any way that is unlawful, harmful or that interferes with its
              operation.
            </p>
          ),
        },
        {
          heading: "Inquiries and proposals",
          body: (
            <p>
              Submitting an inquiry does not create a contract. Any services
              are provided under a separate written agreement or proposal that
              sets out scope, timeline, fees and deliverables.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              Unless stated otherwise, the design, text, graphics and code of
              this website belong to {site.name} and may not be copied or
              reused without permission. Client work shown in the portfolio
              remains the property of the respective owners.
            </p>
          ),
        },
        {
          heading: "No guarantees",
          body: (
            <p>
              Advertising and marketing results depend on many factors outside
              our control. Information on this website is not a guarantee of
              specific results.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              To the extent permitted by law, {site.name} is not liable for
              any indirect or consequential loss arising from your use of this
              website.
            </p>
          ),
        },
        {
          heading: "Changes",
          body: (
            <p>
              We may update these terms from time to time. The latest version
              will always be published on this page.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
