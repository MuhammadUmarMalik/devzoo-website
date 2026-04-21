import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Devzoo",
  },
  description:
    "Devzoo's privacy policy explains how we collect, use, and protect your personal data when you use our website or services.",
  alternates: { canonical: "https://thedevzoo.com/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Devzoo",
    description: "How Devzoo collects, uses, and protects your personal information.",
    url: "https://thedevzoo.com/privacy-policy",
  },
};

const LAST_UPDATED = "April 21, 2026";
const COMPANY = "Devzoo";
const DOMAIN = "thedevzoo.com";
const EMAIL = "info@thedevzoo.com";

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy — Devzoo",
          url: "https://thedevzoo.com/privacy-policy",
          publisher: { "@id": "https://thedevzoo.com/#organization" },
        }}
      />

      <HeroSection>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Privacy Policy
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </HeroSection>

      <section className="bg-surface-light px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-slate max-w-none [&_a]:text-brand [&_a]:no-underline [&_a:hover]:underline [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-surface-dark [&_h2]:text-[22px] [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-surface-dark [&_h3]:text-[17px] [&_h3]:mt-7 [&_h3]:mb-2 [&_p]:text-surface-dark/70 [&_p]:leading-[1.8] [&_p]:mb-4 [&_ul]:text-surface-dark/70 [&_ul]:leading-[1.8] [&_ul]:mb-4 [&_li]:mb-1">

          <p>
            {COMPANY} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the website at{" "}
            <a href={`https://${DOMAIN}`}>{DOMAIN}</a> and provides digital agency services. This Privacy Policy
            explains how we collect, use, disclose, and protect information about you when you visit our website
            or engage us for services.
          </p>
          <p>
            By using our website or services, you agree to the terms of this policy. If you do not agree,
            please do not use our website.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>Information you provide directly</h3>
          <p>When you fill out our contact form or project brief, we collect:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number or WhatsApp number</li>
            <li>Company or brand name</li>
            <li>Service requirements, project details, and budget range</li>
            <li>Any other information you choose to include in your message</li>
          </ul>

          <h3>Information collected automatically</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>IP address and general geographic location</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring URL (how you found us)</li>
            <li>Device type and operating system</li>
          </ul>

          <h3>Cookies</h3>
          <p>
            We use essential cookies to ensure the website functions correctly. We may also use analytics
            cookies (such as Google Analytics) to understand how visitors use our site. You can control
            cookie settings through your browser preferences. Disabling cookies may affect some website
            functionality.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and project briefs</li>
            <li>Provide, deliver, and improve our services</li>
            <li>Send project updates, quotes, and deliverables</li>
            <li>Comply with legal obligations</li>
            <li>Analyse website traffic and improve user experience</li>
            <li>Prevent fraud and protect the security of our website</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>

          <h2>3. How We Share Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>
              <strong>Service providers:</strong> Trusted third-party tools that help us operate our business
              (e.g., email delivery services, analytics platforms, project management tools). These parties
              are bound by confidentiality obligations and may only use your data to perform services on our behalf.
            </li>
            <li>
              <strong>Legal requirements:</strong> If required by law, court order, or government authority,
              we may disclose your information.
            </li>
            <li>
              <strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets,
              your information may be transferred as part of that transaction.
            </li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfil the purposes described
            in this policy, unless a longer retention period is required by law. Project-related communications
            are typically retained for the duration of the engagement plus up to 3 years for legal and
            business record purposes.
          </p>

          <h2>5. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict certain processing of your data</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will respond within 30 days.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices or content of those sites. We encourage you to review the privacy policies of any
            third-party sites you visit.
          </p>

          <h2>7. Security</h2>
          <p>
            We implement reasonable technical and organisational measures to protect your information from
            unauthorised access, loss, or misuse. However, no method of transmission over the internet
            is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our website and services are not directed to individuals under the age of 16. We do not
            knowingly collect personal data from children. If you believe we have inadvertently collected
            such data, please contact us immediately.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update the
            &ldquo;Last updated&rdquo; date at the top of this page. Continued use of our website after any
            changes constitutes your acceptance of the revised policy.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, contact us at:</p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a href={`https://${DOMAIN}/contact`}>{DOMAIN}/contact</a>
            </li>
          </ul>

          </div>
        </div>
      </section>
    </>
  );
}
