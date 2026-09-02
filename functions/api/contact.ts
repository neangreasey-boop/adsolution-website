/**
 * Cloudflare Pages Function — POST /api/contact
 * ------------------------------------------------------------------
 * Receives the contact form (JSON), validates it and emails the inquiry
 * to CONTACT_TO via the Resend API. Deployed automatically by Cloudflare
 * Pages because it lives in the `/functions` directory.
 *
 * Required environment variables (Pages → Settings → Environment variables):
 *   RESEND_API_KEY  – secret. Create at https://resend.com (verify adsolution.men there).
 *   CONTACT_TO      – where inquiries go, e.g. admin@adsolution.men
 *   CONTACT_FROM    – verified sender, e.g. "ADSolution Website <noreply@adsolution.men>"
 *
 * To use another email provider, replace `sendEmail()` only.
 */

type Env = {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
};

type PagesContext = {
  request: Request;
  env: Env;
};

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message?: string;
  website?: string; // honeypot
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export const onRequestPost = async ({ request, env }: PagesContext) => {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (body.website) return json({ ok: true });

  const data = {
    name: clean(body.name, 120),
    company: clean(body.company, 120),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    service: clean(body.service, 80),
    budget: clean(body.budget, 40),
    message: clean(body.message, 3000),
  };

  if (!data.name || !data.email || !data.service || !data.budget || data.message.length < 10) {
    return json({ error: "Please complete all required fields." }, 422);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return json({ error: "Please enter a valid email address." }, 422);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) {
    console.error("Contact function is missing RESEND_API_KEY / CONTACT_TO / CONTACT_FROM.");
    return json({ error: "The contact form is not configured yet." }, 500);
  }

  try {
    await sendEmail(env, data);
    return json({ ok: true });
  } catch (err) {
    console.error("Email send failed", err);
    return json({ error: "We couldn't send your message right now." }, 502);
  }
};

async function sendEmail(env: Env, d: Record<string, string>) {
  const rows = [
    ["Name", d.name],
    ["Company", d.company || "—"],
    ["Email", d.email],
    ["Phone", d.phone || "—"],
    ["Service", d.service],
    ["Budget", d.budget],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#5b6577;font-size:13px">${k}</td><td style="padding:6px 0;font-weight:600">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#0b1220;max-width:560px">
      <h2 style="margin:0 0 16px">New inquiry from ${escapeHtml(d.name)}</h2>
      <table style="border-collapse:collapse">${rows}</table>
      <p style="margin:20px 0 6px;color:#5b6577;font-size:13px">Message</p>
      <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(d.message)}</p>
      <hr style="border:0;border-top:1px solid #e5e9f0;margin:24px 0" />
      <p style="color:#5b6577;font-size:12px">Sent from the adsolution.men contact form.</p>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: [env.CONTACT_TO],
      reply_to: d.email,
      subject: `[ADSolution] ${d.service} inquiry — ${d.name}${d.company ? ` (${d.company})` : ""}`,
      html,
      text: `New inquiry\n\nName: ${d.name}\nCompany: ${d.company}\nEmail: ${d.email}\nPhone: ${d.phone}\nService: ${d.service}\nBudget: ${d.budget}\n\n${d.message}`,
    }),
  });

  if (!res.ok) {
    throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
  }
}
