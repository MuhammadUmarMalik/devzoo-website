import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  service?: unknown;
  timeline?: unknown;
  budget?: unknown;
  preferredContact?: unknown;
  message?: unknown;
  website?: unknown;
};

type LeadRecord = {
  submittedAt: string;
  source: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  timeline: string;
  budget: string;
  preferredContact: string;
  message: string;
  page: string;
  userAgent: string;
};

function asCleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const website = asCleanString(payload.website);
  if (website) {
    return NextResponse.json({ message: "Submitted." });
  }

  const lead: LeadRecord = {
    submittedAt: new Date().toISOString(),
    source: "devzoo-website-contact-form",
    name: asCleanString(payload.name),
    email: asCleanString(payload.email),
    company: asCleanString(payload.company),
    phone: asCleanString(payload.phone),
    service: asCleanString(payload.service),
    timeline: asCleanString(payload.timeline),
    budget: asCleanString(payload.budget),
    preferredContact: asCleanString(payload.preferredContact),
    message: asCleanString(payload.message),
    page: "/contact",
    userAgent: request.headers.get("user-agent") ?? "",
  };

  const fieldErrors: Record<string, string> = {};

  if (!lead.name || lead.name.length < 2) {
    fieldErrors.name = "Enter your name.";
  }

  if (!lead.email || !isValidEmail(lead.email)) {
    fieldErrors.email = "Enter a valid email.";
  }

  if (!lead.service) {
    fieldErrors.service = "Choose a service.";
  }

  if (!lead.timeline) {
    fieldErrors.timeline = "Choose a timeline.";
  }

  if (!lead.preferredContact) {
    fieldErrors.preferredContact = "Choose a contact method.";
  }

  if (!lead.message || lead.message.length < 20) {
    fieldErrors.message = "Add a little more detail.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      {
        message: "Please fix the highlighted fields and try again.",
        fieldErrors,
      },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        message:
          "Lead storage is not configured yet. Add GOOGLE_SHEETS_WEBHOOK_URL to enable Google Sheets sync.",
      },
      { status: 503 }
    );
  }

  try {
    const targetUrl = new URL(webhookUrl);

    if (webhookSecret && !targetUrl.searchParams.has("secret")) {
      targetUrl.searchParams.set("secret", webhookSecret);
    }

    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          message:
            "Your message could not be stored right now. Please try again in a moment.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message:
        "Thanks. Your brief has been saved and we will get back to you within one business day.",
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "We could not reach the lead sheet right now. Please try again in a moment.",
      },
      { status: 502 }
    );
  }
}
