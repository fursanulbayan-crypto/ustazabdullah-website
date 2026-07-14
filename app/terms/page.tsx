import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Terms", description: "Terms of use for this website." };

export default function TermsPage() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Terms of Use" description="Placeholder terms. Replace with wording reviewed by a qualified legal professional before launch." />
      <div className="prose-article mx-auto max-w-3xl px-6 py-16">
        <p>All original content on this site, including articles, research summaries and khutbah materials,
        remains the intellectual property of Abubakar, Abdulahi Olayinka unless otherwise credited.</p>
        <p>Downloadable resources are provided for personal and educational use. Redistribution for
        commercial purposes requires prior written permission.</p>
      </div>
    </div>
  );
}
