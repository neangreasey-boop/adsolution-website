import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ADSolution collects, uses and protects your information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

/* TODO (legal): Review this template with a legal advisor before launch. */
export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="September 2026"
      intro={`This Privacy Policy explains how ${site.name} ("we", "us") collects, uses and protects information when you visit ${site.domain} or contact us.`}
      sections={[
        {
          heading: "Information we collect",
          body: (
            <>
              <p>
                When you submit our contact form we collect the details you
                provide: your name, company, email address, phone number, the
                service you are interested in, your budget range and your
                message.
              </p>
              <p>
                Like most websites, our hosting provider may automatically
                record technical information such as your IP address, browser
                type and the pages you visit, for security and performance
                purposes.
              </p>
            </>
          ),
        },
        {
          heading: "How we use your information",
          body: (
            <ul>
              <li>To respond to your inquiry and discuss your project.</li>
              <li>To provide and improve our services.</li>
              <li>To keep our website secure and reliable.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          ),
        },
        {
          heading: "Sharing",
          body: (
            <p>
              We do not sell your personal information. We may share it with
              service providers who help us operate our website and email
              (for example hosting and email delivery providers), and only as
              needed to provide those services.
            </p>
          ),
        },
        {
          heading: "Cookies & analytics",
          body: (
            <p>
              Our website does not currently use advertising cookies. If we
              add analytics or advertising tools in the future, this policy
              will be updated to describe them.
            </p>
          ),
        },
        {
          heading: "Data retention",
          body: (
            <p>
              We keep inquiry details for as long as needed to respond to you
              and to maintain a record of our communication, unless you ask us
              to delete them.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              You may ask us to access, correct or delete the personal
              information we hold about you by emailing{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
