import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwYD25hnUPH0Q1O-H3ixhncc5wna0AXWVl6EQbn6PgOBHoeoapzD05FO9uL8kLFXpcImQ/exec";

// Field max lengths to prevent abuse
const MAX_LENGTHS = {
  name: 120,
  email: 254,
  company: 200,
  phone: 30,
  service: 80,
  timeline: 60,
  budget: 60,
  preferredContact: 40,
  message: 5000,
  website: 500,
};

const ALLOWED_SERVICES = [
  "Website Development",
  "Digital Marketing",
  "Graphic Design",
  "Video Editing",
  "Not sure yet",
];

const ALLOWED_TIMELINES = [
  "ASAP",
  "Within 2 weeks",
  "Within 1 month",
  "Within 2-3 months",
  "Just exploring",
];

const ALLOWED_CONTACT = ["Email", "WhatsApp", "Phone call"];

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

function asCleanString(value: unknown, maxLen: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

// RFC 5322-aligned regex — requires proper TLD (2+ chars), no consecutive dots
function isValidEmail(email: string) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/.test(email);
}

export async function POST(request: Request) {
  // Validate Content-Type
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { message: "Invalid content type." },
      { status: 415 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot — bots fill the hidden website field
  const website = asCleanString(payload.website, MAX_LENGTHS.website);
  if (website) {
    return NextResponse.json({ message: "Submitted." });
  }

  const lead: LeadRecord = {
    submittedAt: new Date().toISOString(),
    source: "devzoo-website-contact-form",
    name: asCleanString(payload.name, MAX_LENGTHS.name),
    email: asCleanString(payload.email, MAX_LENGTHS.email),
    company: asCleanString(payload.company, MAX_LENGTHS.company),
    phone: asCleanString(payload.phone, MAX_LENGTHS.phone),
    service: asCleanString(payload.service, MAX_LENGTHS.service),
    timeline: asCleanString(payload.timeline, MAX_LENGTHS.timeline),
    budget: asCleanString(payload.budget, MAX_LENGTHS.budget),
    preferredContact: asCleanString(payload.preferredContact, MAX_LENGTHS.preferredContact),
    message: asCleanString(payload.message, MAX_LENGTHS.message),
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

  // Validate against allowlists to prevent injection of arbitrary values
  if (!lead.service || !ALLOWED_SERVICES.includes(lead.service)) {
    fieldErrors.service = "Choose a service.";
  }

  if (!lead.timeline || !ALLOWED_TIMELINES.includes(lead.timeline)) {
    fieldErrors.timeline = "Choose a timeline.";
  }

  if (!lead.preferredContact || !ALLOWED_CONTACT.includes(lead.preferredContact)) {
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

  const webhookUrl =
    process.env.GOOGLE_SHEETS_WEBHOOK_URL ??
    DEFAULT_GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  try {
    // Send secret in Authorization header — never expose it in the URL
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(webhookSecret ? { Authorization: `Bearer ${webhookSecret}` } : {}),
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
