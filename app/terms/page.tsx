import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use governing access to and use of ustazabdullah-website.vercel.app.",
};

const sections = [
  {
    heading: "1. About These Terms",
    body: `These Terms of Use govern your access to and use of ustazabdullah-website.vercel.app (the "Website"). The Website is operated by Ustaz Abdullah (Abubakar, Abdulahi Olayinka), currently based in Nigeria.

By accessing or using the Website, you agree to comply with these Terms. If you do not agree with them, please do not use the Website.

These Terms are general website terms. Any service-specific agreement, quotation, booking confirmation, or written arrangement may contain additional terms that apply to that service.`,
  },
  {
    heading: "2. Permitted Use",
    body: `You may use the Website for lawful personal, informational, and service-related purposes. You agree not to: use the Website in violation of any applicable law or regulation; interfere with, disrupt, or damage the Website or its systems; introduce malware or harmful code; scrape, copy, or commercially exploit Website content without permission; impersonate another person or misrepresent your identity; use forms or other features to submit spam, fraudulent information, or abusive material; or use the Website in a way that could damage its availability, security, or reputation.`,
  },
  {
    heading: "3. Information and Content",
    body: `The content on the Website is provided for general informational purposes. Although reasonable care may be taken in preparing the content, we do not promise that it is complete, current, accurate, or suitable for every purpose.

Content on the Website should not be treated as legal, medical, financial, religious, educational, or other professional advice tailored to your circumstances. We may update, change, suspend, or remove Website content at any time without notice.`,
  },
  {
    heading: "4. Bookings, Enquiries, and Forms",
    body: `The Website provides forms, including a Madrasah registration form and a Book Me form, for enquiries or requests. Submitting a form does not necessarily create a contract, confirm availability, or guarantee that a requested service will be provided.

A service will be confirmed only when the relevant details have been agreed through an appropriate written or other clear confirmation. You agree to provide information that is accurate, complete, and not misleading. Applicable fees, timing, deliverables, payment terms, and cancellation terms will be stated in the relevant booking confirmation or separate service agreement.`,
  },
  {
    heading: "5. Intellectual Property",
    body: `Unless otherwise stated, the Website and its content — including text, branding, logos, graphics, photographs, videos, audio, layout, and design — are owned by or licensed to the website owner and are protected by applicable intellectual-property laws.

You may view and temporarily store reasonable copies of Website content for your personal, non-commercial use. You must not modify, reproduce, distribute, publicly display, sell, or create derivative works from Website content without prior written permission, except where applicable law permits otherwise.`,
  },
  {
    heading: "6. Third-Party Links and Services",
    body: `The Website contains links to third-party websites, platforms, or services including Google Forms, YouTube, TikTok, LinkedIn, Facebook, and GitHub. These links are provided for convenience and do not imply endorsement. We are not responsible for third-party content, availability, security, privacy practices, or terms. Your use of a third-party service is governed by that service's own terms and policies.`,
  },
  {
    heading: "7. Privacy",
    body: `Our collection and use of personal information is described in the Privacy Policy. By using the Website, you should review that Policy and any notices presented when you submit information or use analytics-related features.`,
  },
  {
    heading: "8. Availability and Security",
    body: `We do not guarantee that the Website will always be available, uninterrupted, secure, or free from errors or harmful components. Access may be suspended, restricted, or changed for maintenance, security, technical, legal, or operational reasons. You are responsible for using appropriate security measures on your own device and connection.`,
  },
  {
    heading: "9. Disclaimers",
    body: `To the maximum extent permitted by applicable law, the Website and its content are provided on an "as is" and "as available" basis, without warranties or representations of any kind, whether express or implied. We do not guarantee that the Website will meet your particular requirements, that information will always be accurate, or that use of the Website will produce a particular result.`,
  },
  {
    heading: "10. Limitation of Liability",
    body: `To the maximum extent permitted by applicable law, the website owner will not be liable for indirect, incidental, special, consequential, or punitive loss or damage, or for loss of data, revenue, profits, business, goodwill, or opportunity, arising from or related to your access to or use of the Website. Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited.`,
  },
  {
    heading: "11. Indemnity",
    body: `To the extent permitted by applicable law, you agree to indemnify and hold harmless the website owner from claims, losses, liabilities, costs, and expenses arising from your unlawful use of the Website, your breach of these Terms, or your infringement of another person's rights.`,
  },
  {
    heading: "12. Suspension or Termination",
    body: `We may suspend or restrict your access to the Website where reasonably necessary to protect the Website, its users, the website owner, or third parties, or where you breach these Terms or applicable law. Provisions concerning intellectual property, disclaimers, liability, indemnity, and governing law will continue to apply after access ends.`,
  },
  {
    heading: "13. Changes to These Terms",
    body: `We may update these Terms when the Website, its services, or applicable legal requirements change. The updated version will be posted on the Website with a revised "Last updated" date. Your continued use of the Website after an update means that you accept the updated Terms.`,
  },
  {
    heading: "14. Governing Law and Disputes",
    body: `These Terms are governed by the laws of the Federal Republic of Nigeria. Before starting formal proceedings, the parties should try in good faith to resolve a dispute by contacting the website owner. If a dispute cannot be resolved informally, it will be subject to the jurisdiction of the courts of Nigeria, unless applicable law requires another forum.`,
  },
  {
    heading: "15. General Provisions",
    body: `If any provision of these Terms is found to be invalid or unenforceable, that provision will be modified or severed to the minimum extent necessary, and the remaining provisions will continue in effect. These Terms do not create a partnership, employment relationship, agency relationship, or joint venture between you and the website owner.`,
  },
  {
    heading: "16. Contact Us",
    body: `For questions about these Terms, contact:\n\nWebsite owner: Ustaz Abdullah (Abubakar, Abdulahi Olayinka)\nEmail: fursanulbayan@gmail.com\nCountry: Nigeria`,
  },
];

export default function TermsPage() {
  return (
    <div>
      <section className="border-b border-ink/10 bg-beige-100/50 dark:border-beige-100/10 dark:bg-emerald-950/40">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">Legal</p>
          <h1 className="mt-3 font-display text-3xl font-medium text-ink dark:text-beige-100">Terms of Use</h1>
          <p className="mt-3 text-sm text-ink/55 dark:text-beige-100/55">
            Last updated: September 2026. Applies to ustazabdullah-website.vercel.app.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 space-y-10">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-display text-lg font-semibold text-ink dark:text-beige-100 mb-3">{s.heading}</h2>
            <p className="text-sm leading-relaxed text-ink/70 dark:text-beige-100/70 whitespace-pre-line">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
