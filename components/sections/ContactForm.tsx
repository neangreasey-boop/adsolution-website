"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { serviceOptions } from "@/lib/data/services";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * CONTACT FORM — backend integration point
 * ---------------------------------------------------------------
 * The form POSTs JSON to `NEXT_PUBLIC_CONTACT_ENDPOINT` (default:
 * `/api/contact`). On Cloudflare Pages that path is served by the
 * Pages Function in `/functions/api/contact.ts`, which emails the
 * inquiry to the CONTACT_TO address configured in Cloudflare.
 *
 * To use a third-party form backend instead (Formspree, Web3Forms, …)
 * set NEXT_PUBLIC_CONTACT_ENDPOINT to that service's URL.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "/api/contact";

export const budgetOptions = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  /** Honeypot — must stay empty */
  website?: string;
};

const fieldBase =
  "w-full rounded-md border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const serviceRef = useRef<HTMLSelectElement>(null);

  // Pre-select a service when arriving from /services (?service=...)
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("service");
    if (param && serviceOptions.includes(param) && serviceRef.current) {
      serviceRef.current.value = param;
    }
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Honeypot filled → silently "succeed" for bots
    if (data.website) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const payload: ContactPayload = {
      name: data.name?.trim(),
      company: data.company?.trim() ?? "",
      email: data.email?.trim(),
      phone: data.phone?.trim() ?? "",
      service: data.service,
      budget: data.budget,
      message: data.message?.trim(),
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || `Request failed (${res.status})`);
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-xl border border-line bg-white p-10 text-center shadow-card"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <CheckCircle2 className="size-7" aria-hidden />
        </span>
        <h3 className="mt-6 text-2xl">Inquiry sent.</h3>
        <p className="mt-3 max-w-sm text-muted">
          Thank you — we&apos;ve received your message and will get back to
          you shortly.
        </p>
        <Button variant="ghost" className="mt-8" onClick={() => setStatus("idle")}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate={false}
      className="relative rounded-xl border border-line bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" required>
          <input id="name" name="name" type="text" autoComplete="name" required maxLength={120} placeholder="Your name" className={fieldBase} />
        </Field>
        <Field label="Company" htmlFor="company">
          <input id="company" name="company" type="text" autoComplete="organization" maxLength={120} placeholder="Company or brand" className={fieldBase} />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <input id="email" name="email" type="email" autoComplete="email" required maxLength={200} placeholder="you@company.com" className={fieldBase} />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="+855 …" className={fieldBase} />
        </Field>
        <Field label="Service Interested In" htmlFor="service" required>
          <Select id="service" name="service" required selectRef={serviceRef} placeholder="Select a service">
            {serviceOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </Select>
        </Field>
        <Field label="Budget Range" htmlFor="budget" required>
          <Select id="budget" name="budget" required placeholder="Select a range">
            {budgetOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </Select>
        </Field>
        <Field label="Message" htmlFor="message" required className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            minLength={10}
            maxLength={3000}
            placeholder="Tell us about your business, your goals and what you need help with."
            className={cn(fieldBase, "resize-y")}
          />
        </Field>

        {/* Honeypot — hidden from humans, filled by bots */}
        <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === "error" && (
        <div role="alert" className="mt-5 flex gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
          <div>
            <p className="font-semibold">We couldn&apos;t send your inquiry.</p>
            <p className="mt-0.5 text-red-700/90">
              {errorMsg} Please try again or email us directly at{" "}
              <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-2">
                {site.email}
              </a>.
            </p>
          </div>
        </div>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
            </>
          ) : (
            <>
              Send Inquiry <Send className="size-4" aria-hidden />
            </>
          )}
        </Button>
        <p className="text-xs leading-relaxed text-muted">
          By sending this form you agree to our{" "}
          <a href="/privacy-policy" className="underline underline-offset-2 hover:text-ink">
            Privacy Policy
          </a>.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="ml-0.5 text-brand-500" aria-hidden>*</span>}
      </label>
      {children}
    </div>
  );
}

function Select({
  id,
  name,
  required,
  placeholder,
  selectRef,
  children,
}: {
  id: string;
  name: string;
  required?: boolean;
  placeholder: string;
  selectRef?: React.Ref<HTMLSelectElement>;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        ref={selectRef}
        required={required}
        defaultValue=""
        className={cn(fieldBase, "appearance-none pr-10")}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {children}
      </select>
      <svg
        className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden
      >
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
