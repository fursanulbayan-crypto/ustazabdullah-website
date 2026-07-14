import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ComingSoonGrid } from "@/components/ui/ComingSoonGrid";

export const metadata: Metadata = { title: "Resources", description: "Free educational resources: teaching materials, research templates and presentation slides." };

export default function ResourcesPage() {
  return (
    <div>
      <PageHeader eyebrow="Resources" title="Free educational resources" description="Teaching materials, research templates, presentation slides and recommended reading, shared freely." />
      <ComingSoonGrid
        items={[
          { title: "Teaching Materials", detail: "Ready-to-use worksheets and lesson outlines." },
          { title: "Research Templates", detail: "Questionnaire and SPSS analysis templates." },
          { title: "Presentation Slides", detail: "Downloadable slide decks from past lectures." },
          { title: "Reading Recommendations", detail: "A curated list of books across every area of expertise." },
        ]}
      />
    </div>
  );
}
