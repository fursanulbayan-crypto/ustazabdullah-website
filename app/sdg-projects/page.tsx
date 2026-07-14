import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { ComingSoonGrid } from "@/components/ui/ComingSoonGrid";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "SDG Projects",
  description: "SDG 16 mosque-based youth peacebuilding outreach in Aboru, Alimosho LGA, Lagos.",
};

export default function SDGProjectsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="SDG Projects"
        title="Building Values, Building Peace"
        description="As an SDGs Advocate (Cohort 8, ID C8/M/LAG/393) focused on SDG 16, this programme runs mosque-based youth peacebuilding outreach in the Aboru community, Alimosho LGA."
      />

      <div className="mx-auto max-w-4xl px-6 py-14">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
            <Image
              src="/images/sdg-campaign-banner.jpg"
              alt="SDG 16 Advocate Programme Cohort 8: mosque and community-based youth outreach in Aboru, Alimosho LGA, led by Abubakar Abdulahi Olayinka"
              width={1672}
              height={941}
              className="w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <ComingSoonGrid
        items={[
          { title: "Programme Overview", detail: "Goals, structure and weekly session format." },
          { title: "Impact Statistics", detail: "Participation numbers and outcomes tracked over time." },
          { title: "Volunteer Team", detail: "How youth volunteers are trained and involved." },
          { title: "Photo Gallery", detail: "Documentation of sessions and community events." },
        ]}
      />
    </div>
  );
}
