import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResearchList } from "@/components/research/ResearchList";

export const metadata: Metadata = {
  title: "Research",
  description: "Research portfolio of Abubakar, Abdulahi Olayinka: journal articles, conference papers and research reports on Islamic education.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        eyebrow="Research"
        title="Research portfolio"
        description="Quantitative and applied research into Islamic education, moral development and educational technology."
      />
      <div className="mt-14">
        <ResearchList />
      </div>
    </div>
  );
}
