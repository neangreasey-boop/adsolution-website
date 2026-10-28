import type { Metadata } from "next";
import { site } from "@/lib/site";
import { AppUploaderLegalPage } from "@/components/app-uploader/AppUploaderLegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — REASEY Uploader",
  description:
    "Privacy Policy for REASEY Uploader detailing Meta OAuth authorization, AES-256-GCM token encryption, Facebook Page data processing, retention, and revocation options.",
  alternates: { canonical: "/app-uploader/privacy" },
  robots: { index: true, follow: true },
};

export default function AppUploaderPrivacyPage() {
  return (
    <AppUploaderLegalPage
      eyebrow="REASEY Uploader • Legal & Privacy"
      title="Privacy Policy"
      updated="October 2026"
      intro={`This Privacy Policy describes how REASEY Uploader ("the Application"), operated by ${site.name} ("we", "us", or "our"), processes, handles, and safeguards data when authorized operators connect their Facebook accounts, manage Facebook Pages, and publish content.`}
      advisoryNotice={{
        title: "Pre-Publication Deployment & Verification Notice",
        description:
          "REASEY Uploader is an internal workflow tool utilizing PostgreSQL (via Prisma ORM) and application-layer AES-256-GCM token encryption. System administrators should verify the following infrastructure-specific configurations with the production hosting provider prior to submitting for broader Meta App Review:",
        points: [
          "Database disk-level encryption: Verify whether your cloud PostgreSQL database provider (e.g. AWS RDS, Neon, Supabase) has enabled volume/disk-level encryption-at-rest (TDE).",
          "Media storage lifecycle: Confirm whether production uploads are retained on local persistent disk staging or transitioned to cloud object storage (e.g., AWS S3, Cloudflare R2) with automated lifecycle rules.",
          "Token synchronization: Verify operational routines for periodic token synchronization, as access tokens are not refreshed via background cron workers.",
        ],
      }}
      nextPage={{
        label: "Terms of Service",
        href: "/app-uploader/terms",
        description:
          "Review the acceptable use guidelines, publisher responsibilities, and operational conditions for REASEY Uploader.",
      }}
      sections={[
        {
          heading: "1. Scope & Application Purpose",
          body: (
            <>
              <p>
                REASEY Uploader is a dedicated publishing utility developed by {site.name} to
                facilitate content publishing, media distribution, and post scheduling to Facebook
                Pages. This policy governs the data processed by REASEY Uploader and applies to
                authorized operators granted access to the tool.
              </p>
              <p>
                The Application operates as an authenticated business tool connecting directly to the
                official Meta Graph API. It does not harvest public user data, operate ad networks,
                or trade in personal data.
              </p>
            </>
          ),
        },
        {
          heading: "2. Facebook Account Authorization & Exact Permissions",
          body: (
            <>
              <p>
                REASEY Uploader uses official <strong>Meta Login (OAuth 2.0)</strong> to authenticate
                authorized users. During OAuth authorization, the Application requests only the
                following specific permissions:
              </p>
              <ul>
                <li>
                  <strong>pages_show_list:</strong> Allows the Application to retrieve the list of
                  Facebook Pages that the authenticated operator administers or edits.
                </li>
                <li>
                  <strong>pages_read_engagement:</strong> Enables the Application to verify Page
                  status and publishing prerequisites for reliable delivery.
                </li>
                <li>
                  <strong>pages_manage_posts:</strong> Grants authorization to create, schedule, and
                  publish posts, photos, and video content directly to authorized Facebook Pages on
                  your behalf.
                </li>
              </ul>
              <p>
                Additionally, standard operator identity information (such as name, Facebook
                App-Scoped User ID, and contact email) is provided through the default Meta Login
                dialog to display the authenticated session within the application.
              </p>
              <p>
                The Application does not request access to personal feeds, friend lists, direct
                messages, or personal timeline posting permissions.
              </p>
            </>
          ),
        },
        {
          heading: "3. Information We Collect and Process",
          body: (
            <>
              <p>
                Data is stored in a PostgreSQL database using Prisma ORM. The Application processes
                and stores the following categories of information:
              </p>
              <ul>
                <li>
                  <strong>Operator Profile Data:</strong> Operator name, contact email, and Facebook
                  App-Scoped User ID (ASID) returned during authentication.
                </li>
                <li>
                  <strong>Facebook Page Metadata:</strong> Facebook Page IDs, Page names, categories,
                  Page avatar URLs, and active status toggles.
                </li>
                <li>
                  <strong>Encrypted Access Tokens:</strong> User access tokens and Page access tokens
                  obtained from Meta, protected via application-layer encryption.
                </li>
                <li>
                  <strong>Publishing Jobs & Captions:</strong> Post captions, scheduled publishing
                  timestamps, time zone configurations, order indexes, delivery statuses, retry
                  counts, error messages, and returned Facebook Post IDs.
                </li>
                <li>
                  <strong>Media Asset Metadata & Files:</strong> File names, file sizes, MIME types,
                  and staging storage keys for uploaded images and videos. Uploaded media files are
                  staged on protected server storage.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "4. Access-Token Handling & Application-Layer Encryption",
          body: (
            <>
              <p>
                Access tokens granted via Meta OAuth represent authenticated authorization to
                communicate with Meta Graph API endpoints. We implement rigorous protection
                mechanisms in application code:
              </p>
              <ul>
                <li>
                  <strong>Application-Layer AES-256-GCM Encryption:</strong> Both user access tokens
                  and Page access tokens are encrypted in application code using AES-256-GCM with a
                  unique 12-byte initialization vector (IV) and a 16-byte authentication tag before
                  being persisted in PostgreSQL.
                </li>
                <li>
                  <strong>No Plaintext Storage:</strong> Tokens are never stored in plaintext within
                  the database or logged to server stdout/stderr.
                </li>
                <li>
                  <strong>Excluded from Client Responses:</strong> Server API routes explicitly exclude
                  token fields from JSON payloads sent to browser clients. Plaintext tokens exist in
                  memory only temporarily when dispatching authorized API calls to Meta.
                </li>
                <li>
                  <strong>Encrypted Transmission:</strong> All communications with Meta Graph API and
                  client web sessions use encrypted HTTPS (TLS) connections.
                </li>
                <li>
                  <strong>Strict Usage Scope:</strong> Tokens are used exclusively to execute authorized
                  publishing actions on behalf of the designated Page, and are never shared or sold.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "5. How We Use Information",
          body: (
            <>
              <p>Information processed by REASEY Uploader is strictly utilized to:</p>
              <ul>
                <li>Authenticate the authorized operator session.</li>
                <li>Display authorized Facebook Pages in the publishing interface.</li>
                <li>Format, queue, and dispatch media content to official Meta Graph API endpoints.</li>
                <li>Reconcile publishing status and provide audit feedback to the operator.</li>
                <li>Diagnose operational API errors, rate-limit warnings, or network timeouts.</li>
                <li>Comply with Meta Platform Policies and applicable legal standards.</li>
              </ul>
            </>
          ),
        },
        {
          heading: "6. Data Sharing & External Services",
          body: (
            <>
              <p>
                We do not sell, rent, monetize, or trade any operator or Page data. Data is shared
                only with the following external services required to operate the workflow:
              </p>
              <ul>
                <li>
                  <strong>Meta Platforms, Inc. (Graph API):</strong> Publishing operations, media
                  uploads, and token verifications communicate directly with official Meta Graph API
                  endpoints (`graph.facebook.com`). All interactions with Meta are governed by the{" "}
                  <a
                    href="https://www.facebook.com/privacy/policy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Meta Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://developers.facebook.com/terms/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Meta Platform Terms
                  </a>
                  .
                </li>
                <li>
                  <strong>Hosting & Database Infrastructure:</strong> Server hosting and PostgreSQL
                  database services utilized for running the application and storing encrypted
                  records under strict confidentiality.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "7. Data Retention & Storage Practices",
          body: (
            <>
              <p>Under the current application implementation:</p>
              <ul>
                <li>
                  <strong>Encrypted Access Tokens:</strong> Retained in PostgreSQL during the active
                  operational period or until replaced during re-authentication or manually removed
                  upon request.
                </li>
                <li>
                  <strong>Uploaded Media Files:</strong> Media files uploaded by operators are staged
                  on server storage and remain stored unless manually deleted through administrative
                  maintenance. Deleting an individual publishing job removes only the queue record;
                  it does not delete the associated media asset or unlink the file from disk.
                </li>
                <li>
                  <strong>Publishing Records:</strong> Completed or failed publishing job records
                  remain in the database for operational reporting and error auditing until manually
                  cleared.
                </li>
              </ul>
              <p>
                Because the application does not have an automated account-deletion or media-deletion
                API, complete purging of stored data requires submitting a request to the operator
                for manual administrative processing. For details, see our{" "}
                <a href="/app-uploader/data-deletion">Data Deletion Instructions</a>.
              </p>
            </>
          ),
        },
        {
          heading: "8. Disconnecting Facebook and Revoking Permissions",
          body: (
            <>
              <p>
                The Application does not include an in-app Facebook disconnect button or token
                deletion endpoint. You maintain full self-service control to revoke REASEY Uploader&apos;s
                access directly through your Facebook account:
              </p>
              <ol>
                <li>
                  Log in to Facebook and open <strong>Settings & Privacy</strong> &gt;{" "}
                  <strong>Settings</strong>.
                </li>
                <li>
                  In the navigation menu, select <strong>Apps and Websites</strong> (or{" "}
                  <strong>Business Integrations</strong>).
                </li>
                <li>
                  Locate <strong>REASEY Uploader</strong> in your list of connected applications.
                </li>
                <li>
                  Click <strong>Remove</strong> and confirm. Meta will immediately invalidate all
                  user and Page access tokens granted to the application.
                </li>
              </ol>
              <p>
                To request that previously stored database records, encrypted tokens, and uploaded
                media files be completely removed from the application server, please submit an
                administrative request as outlined below.
              </p>
            </>
          ),
        },
        {
          heading: "9. Privacy Inquiries & Contact Details",
          body: (
            <>
              <p>
                If you have questions regarding this Privacy Policy, wish to exercise your data
                protection rights, or need assistance regarding token revocation or data erasure,
                please contact:
              </p>
              <div className="rounded-lg border border-line bg-surface p-5 text-sm not-italic">
                <p className="font-semibold text-ink">{site.name}</p>
                <p className="text-muted mt-1">Attn: Privacy & Data Protection</p>
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
