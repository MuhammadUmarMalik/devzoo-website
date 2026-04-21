import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Disclaimer | Devzoo",
  },
  description:
    "Devzoo's disclaimer covering the accuracy of information on our website, limitations of liability, external links, and results expectations.",
  alternates: { canonical: "https://thedevzoo.com/disclaimer" },
  openGraph: {
    title: "Disclaimer | Devzoo",
    description: "Important disclaimers regarding Devzoo's website content and services.",
    url: "https://thedevzoo.com/disclaimer",
  },
};

const LAST_UPDATED = "April 21, 2026";
const COMPANY = "Devzoo";
const DOMAIN = "thedevzoo.com";
const EMAIL = "info@thedevzoo.com";

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Disclaimer — Devzoo",
          url: "https://thedevzoo.com/disclaimer",
          publisher: { "@id": "https://thedevzoo.com/#organization" },
        }}
      />

      <HeroSection>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Disclaimer
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </HeroSection>

      <section className="bg-surface-light px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-slate max-w-none [&_a]:text-brand [&_a]:no-underline [&_a:hover]:underline [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-surface-dark [&_h2]:text-[22px] [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:text-surface-dark/70 [&_p]:leading-[1.8] [&_p]:mb-4 [&_ul]:text-surface-dark/70 [&_ul]:leading-[1.8] [&_ul]:mb-4 [&_li]:mb-1">

          <p>
            The information provided on the {COMPANY} website ({" "}
            <a href={`https://${DOMAIN}`}>{DOMAIN}</a>) is for general informational purposes only.
            While we strive to keep the information accurate and up to date, we make no representations
            or warranties of any kind, express or implied, about the completeness, accuracy, reliability,
            or suitability of the information, products, services, or related graphics on this website.
          </p>

          <h2>1. No Guarantee of Results</h2>
          <p>
            Any case studies, client stories, testimonials, or performance figures mentioned on this website
            represent the experiences of individual clients under specific circumstances. These results are
            not typical and do not guarantee that you will achieve similar outcomes.
          </p>
          <p>
            Digital marketing, SEO, website performance, and business growth depend on many variables
            outside {COMPANY}&apos;s control — including market conditions, competition, algorithm changes,
            client-side execution, and industry factors. {COMPANY} cannot guarantee specific rankings,
            traffic levels, conversion rates, leads, or revenue outcomes.
          </p>

          <h2>2. Professional Advice</h2>
          <p>
            Nothing on this website constitutes legal, financial, accounting, tax, or professional advice.
            All content is provided for informational purposes only. You should consult qualified
            professionals before making decisions based on information found on this website.
          </p>

          <h2>3. Accuracy of Information</h2>
          <p>
            We make reasonable efforts to keep the content on our website current and accurate. However,
            pricing, service offerings, availability, and other details may change without notice.
            Always confirm current details directly with us before making a purchasing decision.
          </p>

          <h2>4. External Links</h2>
          <p>
            Our website may contain links to third-party websites for your convenience and reference.
            These links do not constitute an endorsement of those sites or their content. {COMPANY} has
            no control over the nature, content, or availability of external sites and accepts no
            responsibility for their content, privacy practices, or any loss or damage that may arise
            from your use of those sites.
          </p>

          <h2>5. Third-Party Tools and Platforms</h2>
          <p>
            We may recommend or use third-party software, plugins, platforms, or services as part of
            our work. {COMPANY} is not responsible for the performance, security, uptime, pricing changes,
            or discontinuation of any third-party tool. Clients are responsible for reviewing and accepting
            the terms of any third-party platforms used in their project.
          </p>

          <h2>6. Website Availability</h2>
          <p>
            We aim to keep our website available at all times, but we do not guarantee uninterrupted
            access. The website may be temporarily unavailable due to maintenance, technical issues, or
            circumstances beyond our control. {COMPANY} accepts no liability for any inconvenience
            caused by downtime.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and imagery — is the property
            of {COMPANY} or its content suppliers and is protected by applicable intellectual property
            laws. Unauthorised reproduction, distribution, or modification of any content on this website
            is prohibited without prior written consent from {COMPANY}.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {COMPANY} excludes all liability for any direct,
            indirect, incidental, or consequential loss or damage arising from your use of, or reliance
            on, the information or services provided through this website.
          </p>

          <h2>9. Changes to This Disclaimer</h2>
          <p>
            {COMPANY} reserves the right to modify this Disclaimer at any time. Changes will take
            effect immediately upon posting to this page. Continued use of our website following any
            changes constitutes your acceptance of the revised Disclaimer.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Disclaimer, please contact us:</p>
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
