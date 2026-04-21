import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Devzoo | Book a Free Discovery Call | Digital Agency",
  },
  description:
    "Get in touch with Devzoo to start your project. Tell us what you need — website, marketing, design, or video — and we'll reply within one business day.",
  alternates: { canonical: "https://thedevzoo.com/contact" },
  openGraph: {
    title: "Contact Devzoo | Book a Free Discovery Call",
    description:
      "Ready to start? Share your project brief and we'll map the fastest next step. No vague replies, no back-and-forth.",
    url: "https://thedevzoo.com/contact",
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
          url: "https://thedevzoo.com/contact",
          description:
            "Book a free discovery call or send a project brief to Devzoo. We serve startups, creators, and small businesses in the US, UK, UAE, and Pakistan.",
          mainEntity: {
            "@type": "LocalBusiness",
            "@id": "https://thedevzoo.com/#organization",
            name: "Devzoo",
            email: "info@thedevzoo.com",
            url: "https://thedevzoo.com",
            areaServed: ["US", "GB", "AE", "PK"],
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@thedevzoo.com",
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
