import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Privacy Policy", description: "How this website collects and uses information." };

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="Placeholder policy. Replace with wording reviewed against applicable Nigerian data protection law (NDPA 2023) before launch." />
      <div className="prose-article mx-auto max-w-3xl px-6 py-16">
        <p>This site collects only the information visitors choose to submit, such as through the contact
        or newsletter forms. That information is used solely to respond to enquiries and send requested
        updates, and is never sold or shared with third parties for marketing purposes.</p>
        <p>Cookie consent, analytics disclosures and data retention terms should be finalised here before
        the site goes live, in line with the Nigeria Data Protection Act 2023.</p>
      </div>
    </div>
  );
}
