import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/seo/JsonLd";
import { ORGANIZATION_ID, SITE_EMAIL, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Devzoo | Book a Free Discovery Call | Digital Agency",
  },
  description:
    "Get in touch with Devzoo to start your project. Tell us what you need — website, marketing, design, or video — and we'll reply within one business day.",
  alternates: { canonical: absoluteUrl("/contact") },
  keywords: [
    "contact Devzoo", "book discovery call", "hire digital agency",
    "get website quote", "start a project", "free consultation",
  ],
  openGraph: {
    title: "Contact Devzoo | Book a Free Discovery Call",
    description:
      "Ready to start? Share your project brief and we'll map the fastest next step. No vague replies, no back-and-forth.",
    url: absoluteUrl("/contact"),
  },
  twitter: {
    title: "Contact Devzoo | Book a Free Discovery Call",
    description: "Ready to start? Share your project brief and we'll map the fastest next step. No vague replies, no back-and-forth.",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Devzoo",
          url: absoluteUrl("/contact"),
          description:
            "Book a free discovery call or send a project brief to Devzoo. We serve startups, creators, and small businesses in the US, UK, UAE, and Pakistan.",
          mainEntity: {
            "@type": "LocalBusiness",
            "@id": ORGANIZATION_ID,
            name: "Devzoo",
            email: SITE_EMAIL,
            url: SITE_URL,
            areaServed: ["US", "GB", "AE", "PK"],
            contactPoint: {
              "@type": "ContactPoint",
              email: SITE_EMAIL,
              contactType: "customer service",
              availableLanguage: "English",
            },
          },
        }}
      />
      {children}
    </>
  );
}
