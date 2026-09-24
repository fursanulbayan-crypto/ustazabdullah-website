import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for ustazabdullah-website.vercel.app — how we collect, use and protect personal information.",
};

const sections = [
  {
    heading: "1. Introduction",
    body: `This Privacy Policy explains how the owner of ustazabdullah-website.vercel.app (referred to as "we," "us," or "the website owner") may collect, use, store, and disclose personal information when you visit or use the website.

The website owner is currently based in Nigeria. This Policy is intended to reflect the website's current operations and Nigeria's applicable data-protection framework, including the Nigeria Data Protection Act 2023, as applicable.

By using the website, you acknowledge the practices described in this Privacy Policy. Where consent is required by applicable law, we will seek it through appropriate means.`,
  },
  {
    heading: "2. Information We Collect",
    body: `The website is intended to collect only information reasonably needed to operate its services and respond to enquiries.`,
    subsections: [
      {
        heading: "2.1 Information you provide directly",
        body: `You may provide personal information when you submit a form on the website, including information submitted through the Madrasah registration form or the Book Me form: your name, email address, telephone number, preferred service, message, scheduling details, or other information you choose to include. Please avoid submitting sensitive personal information unless it is specifically requested and necessary for the relevant enquiry.`,
      },
      {
        heading: "2.2 Information collected automatically",
        body: `When you visit the website, certain technical information may be collected automatically by the website, its hosting provider (Vercel), or analytics services. This may include your IP address, browser type, device information, approximate location, pages visited, referring website, access times, and information about how you interact with the website. The website may use Google Analytics to collect usage information and generate statistics about website traffic.`,
      },
    ],
  },
  {
    heading: "3. Cookies and Analytics",
    body: `The website may use essential technologies needed for the website to function, and analytics technologies, including Google Analytics, to understand usage and performance. You may be able to control cookies through your browser settings. Disabling cookies may affect some website functionality. Where applicable law requires consent before non-essential analytics cookies are used, the website will provide an appropriate consent mechanism before activating them. Google may process analytics information according to its own privacy terms and policies.`,
  },
  {
    heading: "4. How We Use Personal Information",
    body: `We may use personal information to: respond to enquiries and requests submitted through the website forms; communicate with you about requested services, classes, bookings, or follow-up questions; schedule, coordinate, or provide services you request; maintain, secure, troubleshoot, and improve the website; understand website traffic and usage through Google Analytics; prevent fraud, misuse, security incidents, or other harmful activity; and comply with legal or regulatory obligations.`,
  },
  {
    heading: "5. Lawful Basis for Processing",
    body: `Where required by applicable law, we will process personal information only where a lawful basis exists. Depending on the circumstances, that basis may include your consent; taking steps at your request before entering into an arrangement; performing an agreement or responding to your request; complying with a legal obligation; protecting vital interests; or pursuing a legitimate interest where that interest is not overridden by your rights. Where processing is based on consent, you may withdraw consent at any time.`,
  },
  {
    heading: "6. Sharing Personal Information",
    body: `We do not sell your personal information. We may share information only as reasonably necessary for the purposes described in this Policy, including with website hosting, form-processing, email, analytics, security, and technology providers that help operate the website; professional advisers where reasonably necessary; law-enforcement or regulatory authorities where required or permitted by law; and a successor party if the website or relevant business assets are reorganised or sold, subject to applicable law.`,
  },
  {
    heading: "7. International Transfers",
    body: `Some service providers, including technology or analytics providers, may process personal information outside Nigeria. Where personal information is transferred internationally, we will take steps required by applicable law to provide an appropriate level of protection, including using applicable safeguards, contractual protections, or another lawful transfer mechanism where required.`,
  },
  {
    heading: "8. Data Retention",
    body: `We retain personal information only for as long as reasonably necessary for the purposes described in this Policy, including responding to enquiries, providing requested services, maintaining appropriate records, resolving disputes, and complying with legal obligations. When information is no longer needed, we will take reasonable steps to delete it, anonymise it, or securely dispose of it.`,
  },
  {
    heading: "9. Data Security",
    body: `We use reasonable technical and organisational measures intended to protect personal information against unauthorised access, loss, misuse, alteration, or disclosure. However, no website, transmission, or storage system can be guaranteed to be completely secure. If you believe that your information has been compromised or that you have identified a security issue, please contact us using the details below.`,
  },
  {
    heading: "10. Your Rights",
    body: `Subject to applicable law and any relevant exceptions, you may have rights to: request access to personal information we hold about you; request correction of inaccurate or incomplete information; request deletion of information in appropriate circumstances; request restriction of, or object to, certain processing; withdraw consent where processing is based on consent; request portability of information where applicable; and lodge a complaint with the relevant data-protection authority. To exercise a right, contact us using the details in Section 13.`,
  },
  {
    heading: "11. Children's Privacy",
    body: `The website is not intended to knowingly collect personal information from children in violation of applicable law. Where the website provides educational or Madrasah-related services to children, any collection or use of a child's information will be handled with appropriate parental or guardian involvement and in accordance with applicable law. If a parent or guardian believes that a child has provided personal information improperly, they should contact us so that we can assess and, where appropriate, delete the information.`,
  },
  {
    heading: "12. Third-Party Websites and Services",
    body: `The website may contain links to third-party websites, platforms, or services, including Google Forms (for the Madrasah and Book Me forms), YouTube, TikTok, LinkedIn, Facebook, and GitHub. This Privacy Policy does not govern those third parties. Their own privacy notices and terms will apply, and we are not responsible for their practices.`,
  },
  {
    heading: "13. Contact Us",
    body: `For privacy questions, requests, or complaints, contact:\n\nWebsite owner: Ustaz Abdullah (Abubakar, Abdulahi Olayinka)\nEmail: fursanulbayan@gmail.com\nCountry: Nigeria\n\nPlease include enough information for us to understand and respond to your request.`,
  },
  {
    heading: "14. Changes to This Privacy Policy",
    body: `We may update this Privacy Policy when the website, its services, or applicable legal requirements change. The updated version will be posted on this page with a revised "Last updated" date. Where required, we will provide additional notice or seek consent for material changes.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="border-b border-ink/10 bg-beige-100/50 dark:border-beige-100/10 dark:bg-emerald-950/40">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">Legal</p>
          <h1 className="mt-3 font-display text-3xl font-medium text-ink dark:text-beige-100">Privacy Policy</h1>
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
            {s.subsections?.map((sub) => (
              <div key={sub.heading} className="mt-5 pl-4 border-l-2 border-gold-400/40">
                <h3 className="font-semibold text-sm text-ink dark:text-beige-100 mb-2">{sub.heading}</h3>
                <p className="text-sm leading-relaxed text-ink/70 dark:text-beige-100/70">{sub.body}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
