import type { Metadata } from "next";
import HeroSection from "@/components/ui/HeroSection";
import SectionLabel from "@/components/ui/SectionLabel";
import JsonLd from "@/components/seo/JsonLd";
import { ORGANIZATION_ID, SITE_DOMAIN, SITE_EMAIL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Terms & Conditions | Devzoo",
  },
  description:
    "Read Devzoo's terms and conditions governing the use of our website and the provision of our digital agency services.",
  alternates: { canonical: absoluteUrl("/terms") },
  openGraph: {
    title: "Terms & Conditions | Devzoo",
    description: "The terms governing Devzoo's website use and service engagements.",
    url: absoluteUrl("/terms"),
  },
};

const LAST_UPDATED = "April 21, 2026";
const COMPANY = "Devzoo";
export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms & Conditions — Devzoo",
          url: absoluteUrl("/terms"),
          publisher: { "@id": ORGANIZATION_ID },
        }}
      />

      <HeroSection>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="mt-2 font-heading text-[40px] font-extrabold leading-[1.05] text-white md:text-[64px]">
            Terms &amp; Conditions
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
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the website at{" "}
            <a href={absoluteUrl("/")}>{SITE_DOMAIN}</a> and any services provided by {COMPANY}
            (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing our website or engaging
            our services, you agree to be bound by these Terms.
          </p>

          <h2>1. Services</h2>
          <p>
            {COMPANY} provides digital agency services including website development, digital marketing,
            graphic design, and video editing. The specific scope, deliverables, timeline, and fees for
            each engagement are agreed upon in a separate project agreement or proposal.
          </p>
          <p>
            We reserve the right to decline any project request at our discretion and without obligation
            to provide a reason.
          </p>

          <h2>2. Proposals and Agreements</h2>
          <p>
            All services begin with a written proposal or project brief that outlines the scope, timeline,
            revisions, and price. Work commences only after the client approves the proposal and, where
            applicable, pays the agreed deposit. Verbal agreements are not binding.
          </p>

          <h2>3. Payment Terms</h2>
          <ul>
            <li>
              <strong>Deposit:</strong> A deposit of 50% of the total project fee is required before work
              begins, unless otherwise agreed in writing.
            </li>
            <li>
              <strong>Final payment:</strong> The remaining balance is due upon project completion and before
              final files or access credentials are delivered.
            </li>
            <li>
              <strong>Retainer engagements:</strong> Monthly services (e.g., social media management, SEO)
              are billed at the start of each billing period.
            </li>
            <li>
              <strong>Late payments:</strong> Invoices unpaid after 14 days from the due date may incur a
              late fee of 2% per month on the outstanding balance.
            </li>
            <li>
              <strong>Currency:</strong> All prices are quoted in USD unless otherwise specified.
            </li>
          </ul>

          <h2>4. Revisions</h2>
          <p>
            Unless otherwise stated in the project proposal, each engagement includes the agreed number
            of revision rounds. Additional revisions beyond the agreed scope may be billed at our standard
            hourly rate. Revisions must be requested within 7 days of delivery.
          </p>

          <h2>5. Client Responsibilities</h2>
          <p>To ensure timely delivery, clients agree to:</p>
          <ul>
            <li>Provide all required content, assets, and approvals promptly</li>
            <li>Designate a single point of contact for project communications</li>
            <li>Respond to feedback requests within 5 business days</li>
            <li>Ensure all materials provided to {COMPANY} are owned by the client or properly licensed</li>
          </ul>
          <p>
            Delays caused by the client (late feedback, missing assets, change of scope) may extend
            the project timeline and may affect pricing.
          </p>

          <h2>6. Intellectual Property</h2>

          <h3>Ownership upon payment</h3>
          <p>
            Upon receipt of full payment, {COMPANY} assigns to the client all intellectual property rights
            in the final deliverables produced specifically for that engagement, including custom designs,
            written copy, and code.
          </p>

          <h3>Our retained rights</h3>
          <p>
            {COMPANY} retains ownership of all pre-existing tools, frameworks, templates, methodologies,
            and general know-how used during the engagement. We also retain the right to display completed
            work in our portfolio and marketing materials unless the client requests otherwise in writing.
          </p>

          <h3>Third-party assets</h3>
          <p>
            We may use licensed stock photography, fonts, plugins, or third-party components in our work.
            The client is responsible for obtaining and maintaining appropriate licences for any third-party
            assets used in their project beyond the scope agreed.
          </p>

          <h2>7. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential any sensitive business information shared during the
            engagement. This obligation survives the termination of the project. {COMPANY} will not share
            client confidential information with third parties without prior written consent, except as
            required by law.
          </p>

          <h2>8. Cancellation and Refunds</h2>
          <ul>
            <li>
              <strong>Client cancellation:</strong> If the client cancels after work has commenced, the
              deposit is non-refundable. Any work completed beyond the deposit will be invoiced pro-rata.
            </li>
            <li>
              <strong>Devzoo cancellation:</strong> If we must cancel a project, we will refund any
              prepaid fees for work not yet started.
            </li>
            <li>
              <strong>Disputes:</strong> Any billing disputes must be raised in writing within 14 days
              of invoice receipt.
            </li>
          </ul>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, {COMPANY} shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, including loss of profits,
            data, or business opportunities, arising from your use of our website or services.
          </p>
          <p>
            Our total liability for any claim arising from a project shall not exceed the total fees
            paid by the client for that specific project.
          </p>

          <h2>10. Warranties and Disclaimers</h2>
          <p>
            We deliver our services with reasonable skill and care. However, we make no guarantee of
            specific results such as search engine rankings, traffic levels, conversion rates, or revenue
            outcomes, as these depend on many factors outside our control.
          </p>
          <p>
            Our website is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied.
          </p>

          <h2>11. Website Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our website for any unlawful or fraudulent purpose</li>
            <li>Attempt to gain unauthorised access to any part of our website</li>
            <li>Transmit any harmful, offensive, or disruptive content</li>
            <li>Reproduce or distribute our website content without written permission</li>
          </ul>

          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with applicable laws. Any disputes
            shall first be attempted to be resolved by good-faith negotiation. If unresolved, disputes
            may be referred to mediation or binding arbitration before any legal action is taken.
          </p>

          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the top
            of this page will reflect the most recent revision. Continued use of our website or services
            after changes constitutes acceptance of the updated Terms.
          </p>

          <h2>14. Contact Us</h2>
          <p>For questions about these Terms, contact us at:</p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a href={absoluteUrl("/contact")}>{SITE_DOMAIN}/contact</a>
            </li>
          </ul>

          </div>
        </div>
      </section>
    </>
  );
}
