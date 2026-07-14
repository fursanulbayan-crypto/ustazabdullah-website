import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ComingSoonGrid } from "@/components/ui/ComingSoonGrid";
import { AutoCarousel } from "@/components/ui/AutoCarousel";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Islamic Knowledge Centre",
  description: "Friday khutbahs, Qur'an reflections, hadith explanations and family guidance, in Arabic and English.",
};

const khutbahPhotos = [
  { src: "/images/khutbah-podium-1.jpg", alt: "Delivering a khutbah at Al-Mafaazat Central Mosque, Aboru" },
  { src: "/images/khutbah-podium-2.jpg", alt: "Friday khutbah at Al-Mafaazat Central Mosque" },
  { src: "/images/khutbah-podium-3.jpg", alt: "Address at Al-Mafaazat Central Mosque" },
  { src: "/images/mosque-congregation.jpg", alt: "Friday congregation at Al-Mafaazat Central Mosque" },
];

export default function KnowledgeCentrePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Islamic Knowledge Centre"
        title="Khutbahs, reflections and guidance"
        description="A growing library of Friday khutbahs, Qur'an reflections, hadith explanations and family guidance, with audio, video and downloadable PDFs. Arabic content is presented with full right-to-left support."
      />

      <div className="mx-auto max-w-4xl px-6 py-14">
        <Reveal>
          <AutoCarousel
            images={khutbahPhotos}
            className="h-72 rounded-2xl border border-ink/10 dark:border-beige-100/10 sm:h-96"
          />
          <p className="mt-2 text-xs text-ink/45 dark:text-beige-100/45">
            Rotates automatically through recent khutbahs and Friday congregation photos.
          </p>
        </Reveal>
      </div>

      <ComingSoonGrid
        items={[
          { title: "Friday Khutbahs", detail: "Weekly khutbah audio, transcript and key reflections." },
          { title: "Qur'an Reflections", detail: "Short tafsir notes on selected ayat, published regularly." },
          { title: "Hadith Explanations", detail: "Context, authenticity notes and practical lessons." },
          { title: "Family Guidance", detail: "Practical Islamic guidance for the home and community." },
          { title: "Ramadan Resources", detail: "Seasonal guides, schedules and reflections." },
          { title: "Arabic Articles", detail: "Original Arabic-language writing, with RTL layout." },
        ]}
      />
    </div>
  );
}
