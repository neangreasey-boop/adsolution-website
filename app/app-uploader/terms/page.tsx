import type { Metadata } from "next";
import { site } from "@/lib/site";
import { AppUploaderLegalPage } from "@/components/app-uploader/AppUploaderLegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — REASEY Uploader",
  description:
    "Terms of Service governing the use of REASEY Uploader for Facebook Page management and publishing workflows.",
  alternates: { canonical: "/app-uploader/terms" },
  robots: { index: true, follow: true },
};

export default function AppUploaderTermsPage() {
  return (
    <AppUploaderLegalPage
      eyebrow="REASEY Uploader • Terms & Conditions"
      title="Terms of Service"
      updated="October 2026"
      intro={`These Terms of Service ("Terms") govern access to and use of REASEY Uploader ("the Application"), operated by ${site.name} ("we", "us", or "our"). By accessing or utilizing the Application, authorized operators agree to be bound by these Terms.`}
      nextPage={{
        label: "Data Deletion Instructions",
        href: "/app-uploader/data-deletion",
        description:
          "Learn how to revoke Facebook permissions in account settings and request administrative erasure of stored application data.",
      }}
      sections={[
        {
          heading: "1. Authorized Operator Access",
          body: (
            <>
              <p>
                REASEY Uploader is a specialized publishing workflow utility provided for authorized
                operators, personnel, and designated clients of {site.name}.
              </p>
              <p>
                To access and use the Application, you represent and warrant that:
              </p>
              <ul>
                <li>You are at least 18 years of age.</li>
                <li>
                  You have been explicitly authorized by {site.name} to operate the Application.
                </li>
                <li>
                  You hold legal authority, administrative ownership, or explicit editing permissions
                  for every Facebook Page you connect to or manage through the Application.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "2. Acceptable Use & Meta Platform Compliance",
          body: (
            <>
              <p>
                You agree to use REASEY Uploader solely for legitimate social media management and
                content publishing workflows. Because the Application integrates directly with Meta
                services, you must comply at all times with:
              </p>
              <ul>
                <li>
                  <a
                    href="https://developers.facebook.com/terms/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Meta Platform Terms
                  </a>
                </li>
                <li>
                  <a
                    href="https://developers.facebook.com/devpolicy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Meta Developer Policies
                  </a>
                </li>
                <li>
                  <a
                    href="https://transparency.meta.com/policies/community-standards/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook Community Standards
                  </a>
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "3. User Responsibility for Published Content",
          body: (
            <>
              <p>
                You are solely responsible for all text, titles, captions, images, videos, tags,
                and media uploaded, scheduled, or published through the Application.
              </p>
              <p>You agree that no content published through the Application shall:</p>
              <ul>
                <li>
                  Infringe any third-party copyright, trademark, patent, trade secret, privacy, or
                  publicity right.
                </li>
                <li>
                  Contain defamatory, libelous, unlawful, fraudulent, obscene, or threatening
                  material.
                </li>
                <li>
                  Disseminate deceptive marketing, coordinated spam, misleading claims, or malicious
                  links.
                </li>
                <li>
                  Violate applicable advertising laws, consumer protection regulations, or industry
                  standards.
                </li>
              </ul>
              <p>
                {site.name} acts solely as a technical workflow intermediary and does not pre-screen
                or endorse content published by operators.
              </p>
            </>
          ),
        },
        {
          heading: "4. Prohibited Misuse",
          body: (
            <>
              <p>When using REASEY Uploader, you may not:</p>
              <ul>
                <li>
                  Share your authorized account credentials or session access with unauthorized third
                  parties.
                </li>
                <li>
                  Attempt to probe, scan, or compromise the vulnerability of any system or network
                  hosting the Application.
                </li>
                <li>
                  Reverse-engineer, decompile, disassemble, or derive the source code of the
                  Application without prior written consent.
                </li>
                <li>
                  Exceed, circumvent, or manipulate Meta Graph API rate limits or application query
                  budgets.
                </li>
                <li>
                  Use the Application to scrape data, build competitor datasets, or engage in bulk
                  unauthorized harvesting.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "5. Intellectual Property Rights",
          body: (
            <>
              <p>
                The Application, including its software code, user interface, design assets, and
                branding, is the exclusive intellectual property of {site.name} and its licensors.
                Except for the limited right to access and use the Application in accordance with
                these Terms, no intellectual property rights are transferred to you.
              </p>
              <p>
                All rights, title, and interest in content created and published by you remain with
                you or your respective client page owners.
              </p>
            </>
          ),
        },
        {
          heading: "6. Service Availability & Platform Dependencies",
          body: (
            <>
              <p>
                REASEY Uploader relies on external network connections and the availability of the
                Meta Graph API. We strive to provide reliable and stable service, but you
                acknowledge that:
              </p>
              <ul>
                <li>
                  The Application is provided on an <strong>&ldquo;AS IS&rdquo;</strong> and{" "}
                  <strong>&ldquo;AS AVAILABLE&rdquo;</strong> basis.
                </li>
                <li>
                  Service may be temporarily interrupted by maintenance, network outages, server
                  reboots, or changes and downtimes in Meta’s API endpoints.
                </li>
                <li>
                  We do not guarantee that Meta will approve every publish request or that published
                  posts will achieve specific distribution metrics.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "7. Disclaimer of Warranties & Limitation of Liability",
          body: (
            <>
              <p>
                To the fullest extent permitted by applicable law, {site.name} disclaims all
                warranties, express or implied, including warranties of merchantability, fitness for
                a particular purpose, and non-infringement.
              </p>
              <p>
                Under no circumstances shall {site.name}, its founder, employees, or contractors be
                liable for any indirect, incidental, special, consequential, or punitive damages,
                including loss of profits, goodwill, data, or business opportunities, arising from or
                in connection with your use or inability to use the Application.
              </p>
            </>
          ),
        },
        {
          heading: "8. Suspension and Termination",
          body: (
            <>
              <p>
                We reserve the right to suspend or terminate your access to REASEY Uploader
                immediately and without prior notice if:
              </p>
              <ul>
                <li>You breach any provision of these Terms.</li>
                <li>You violate Meta Platform Policies or Community Standards.</li>
                <li>
                  Continued access presents a security vulnerability, operational risk, or legal
                  liability.
                </li>
              </ul>
              <p>
                Upon termination, your authorization to use the Application ceases immediately. Stored
                access tokens and associated operator records will be administratively removed from
                the application database, and operators are advised to revoke permissions in their
                Facebook account settings.
              </p>
            </>
          ),
        },
        {
          heading: "9. Governing Law & Dispute Resolution",
          body: (
            <>
              <p>
                These Terms are governed by and construed in accordance with the laws of Cambodia,
                without regard to conflict of law principles. Any legal disputes arising out of or
                relating to these Terms shall be subject to the competent courts of Cambodia.
              </p>
            </>
          ),
        },
        {
          heading: "10. Questions and Legal Contact",
          body: (
            <>
              <p>
                If you have questions regarding these Terms of Service or require legal
                clarification, please contact us:
              </p>
              <div className="rounded-lg border border-line bg-surface p-5 text-sm not-italic">
                <p className="font-semibold text-ink">{site.name}</p>
                <p className="text-muted mt-1">Attn: Legal & Operations</p>
                <p className="mt-2 text-muted">
                  Email:{" "}
                  <a href={`mailto:${site.email}`} className="font-medium">
                    {site.email}
                  </a>
                </p>
                <p className="text-muted">
                  Phone:{" "}
                  <a href={`tel:${site.phones[0].replace(/[^\d+]/g, "")}`} className="font-medium">
                    {site.phones[0]}
                  </a>
                </p>
                <p className="text-muted mt-1">Address: {site.address.full}</p>
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
