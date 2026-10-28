import type { Metadata } from "next";
import { site } from "@/lib/site";
import { AppUploaderLegalPage } from "@/components/app-uploader/AppUploaderLegalPage";

export const metadata: Metadata = {
  title: "Data Deletion Instructions — REASEY Uploader",
  description:
    "Instructions on how to revoke Facebook permissions and request manual administrative deletion of stored user, Page, and media data from REASEY Uploader.",
  alternates: { canonical: "/app-uploader/data-deletion" },
  robots: { index: true, follow: true },
};

export default function AppUploaderDataDeletionPage() {
  return (
    <AppUploaderLegalPage
      eyebrow="REASEY Uploader • User Rights"
      title="Data Deletion Instructions"
      updated="October 2026"
      intro={`In compliance with Meta Platform Policy and data protection principles, REASEY Uploader provides transparent instructions for operators and Page administrators to revoke application access and request complete deletion of stored data.`}
      nextPage={{
        label: "Application Overview",
        href: "/app-uploader",
        description:
          "Return to the REASEY Uploader hub to explore architecture, features, and verified technical practices.",
      }}
      sections={[
        {
          heading: "1. Two Steps for Revocation and Data Deletion",
          body: (
            <>
              <p>
                Under the current application implementation, there is no in-app Facebook disconnect
                endpoint, automated account-deletion API, or automated Meta callback webhook. Data
                management involves two distinct steps:
              </p>
              <div className="space-y-4 not-prose my-4">
                <div className="rounded-xl border border-line bg-surface p-5">
                  <div className="flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                      1
                    </span>
                    <h4 className="text-base font-bold text-ink">
                      Immediate Self-Service: Revoke Permissions via Facebook Settings
                    </h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    You can immediately disconnect REASEY Uploader at any time directly through your
                    Facebook profile settings. This invalidates all user and Page access tokens at
                    the Meta level, preventing the Application from accessing your Facebook account
                    or Pages.
                  </p>
                </div>

                <div className="rounded-xl border border-line bg-surface p-5">
                  <div className="flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                      2
                    </span>
                    <h4 className="text-base font-bold text-ink">
                      Complete Removal: Administrative Request for Stored Data & Media Purging
                    </h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    To permanently erase stored application records (including encrypted tokens,
                    Facebook Page metadata, job logs, and uploaded media files in server storage),
                    submit a request to the operator. Deletion is carried out through manual
                    administrative database and storage procedures.
                  </p>
                </div>
              </div>
            </>
          ),
        },
        {
          heading: "2. How to Revoke Meta App Permissions (Self-Service via Facebook)",
          body: (
            <>
              <p>
                You do not need to contact support to revoke Meta permissions. You can immediately
                disconnect REASEY Uploader directly through Facebook:
              </p>
              <ol>
                <li>
                  Log in to your Facebook account and navigate to{" "}
                  <a
                    href="https://www.facebook.com/settings?tab=applications"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook Apps and Websites Settings
                  </a>
                  .
                </li>
                <li>
                  Under the <strong>Active</strong> tab, locate <strong>REASEY Uploader</strong>.
                </li>
                <li>
                  Click <strong>Remove</strong> (or <strong>View and Edit</strong> &gt;{" "}
                  <strong>Remove</strong>).
                </li>
                <li>
                  Confirm the removal. Meta will immediately invalidate all active access tokens
                  granted to REASEY Uploader.
                </li>
              </ol>
            </>
          ),
        },
        {
          heading: "3. How to Submit a Complete Data Deletion Request",
          body: (
            <>
              <p>
                If you require that all stored application records, encrypted access tokens,
                database entries, and uploaded media files be permanently deleted from our server
                infrastructure, please submit a formal deletion request:
              </p>
              <div className="rounded-xl border border-brand-200 bg-brand-50/60 p-5 not-prose my-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  Request Submission Details
                </p>
                <p className="mt-2 text-sm text-brand-950">
                  Send an email to:{" "}
                  <a href={`mailto:${site.email}`} className="font-bold underline">
                    {site.email}
                  </a>
                </p>
                <p className="mt-1 text-sm text-brand-900">
                  Subject Line:{" "}
                  <code className="rounded bg-white px-2 py-0.5 text-xs font-semibold text-brand-800 border border-brand-200">
                    [REASEY Uploader] Data Deletion Request
                  </code>
                </p>
              </div>
              <p>Please include the following verification details in your email:</p>
              <ul>
                <li>Your full name as displayed on your Facebook profile.</li>
                <li>The contact email address associated with your operator account.</li>
                <li>
                  Your Facebook App-Scoped User ID (ASID) or the exact Name(s) and URL(s) of the
                  connected Facebook Page(s).
                </li>
                <li>
                  A clear statement requesting the deletion of all stored database records and
                  uploaded media files associated with your account.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "4. Identity & Authority Verification",
          body: (
            <>
              <p>
                To prevent unauthorized or fraudulent data removal, deletion requests are verified
                prior to executing database operations:
              </p>
              <ul>
                <li>
                  The request must originate from the registered contact email associated with the
                  operator account.
                </li>
                <li>
                  If the request involves Facebook Page assets, the operator may be asked to confirm
                  administrative authority over the corresponding Page.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "5. Scope of Data Deleted vs. Retention Limitations",
          body: (
            <>
              <p>Upon verification of your request, the operator will administratively purge:</p>
              <ul>
                <li>
                  All stored encrypted user access tokens and Page access tokens from PostgreSQL.
                </li>
                <li>
                  Connected Facebook Account and Page records (`facebook_accounts` and
                  `facebook_pages` tables).
                </li>
                <li>
                  Publishing job records, captions, and operational error logs (`publishing_jobs`
                  table).
                </li>
                <li>
                  Uploaded media assets from the database (`media_assets` table) and the physical
                  media files staged in server storage (`storage/uploads/`).
                </li>
              </ul>
              <p>
                <strong>Important Note on In-App Job Deletion:</strong>
              </p>
              <p>
                Deleting an individual publishing job in the user interface removes only that
                specific queue record; it does not delete the underlying media asset or remove the
                staged file from disk. Full purging of uploaded media files and account records
                requires submitting this administrative deletion request.
              </p>
              <p>
                <strong>What Cannot Be Deleted by REASEY Uploader:</strong>
              </p>
              <p>
                Content that has already been published to Facebook lives on Meta&apos;s servers. To
                delete published posts, you must remove them directly from your Facebook Page using
                Facebook&apos;s Page management tools.
              </p>
            </>
          ),
        },
        {
          heading: "6. Manual Processing & Confirmation",
          body: (
            <>
              <p>
                Because data deletion is performed through manual administrative processing rather
                than an automated webhook or script, deletion is not instantaneous. Requests are
                reviewed, verified, and executed by the engineering team in an orderly timeframe.
              </p>
              <p>
                Once all associated records and files have been removed from the database and
                server storage, a written confirmation email will be delivered to your contact
                address.
              </p>
            </>
          ),
        },
        {
          heading: "7. Support and Verification Contact",
          body: (
            <>
              <p>
                For questions regarding data deletion, account disconnection, or verification
                status, contact our data protection team:
              </p>
              <div className="rounded-lg border border-line bg-surface p-5 text-sm not-italic">
                <p className="font-semibold text-ink">{site.name}</p>
                <p className="text-muted mt-1">Attn: Data Deletion & Privacy</p>
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
