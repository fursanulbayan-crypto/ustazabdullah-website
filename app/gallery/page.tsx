import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Gallery", description: "Photographs from teaching, mosque activities, conferences and community service." };

const photos = [
  { src: "/images/portrait-hero.jpg", alt: "Portrait of Abubakar, Abdulahi Olayinka" },
  { src: "/images/graduation.jpg", alt: "First Class graduation, Al-Hikmah University, Ilorin" },
  { src: "/images/khutbah-podium-1.jpg", alt: "Khutbah at Al-Mafaazat Central Mosque" },
  { src: "/images/teaching-classroom.jpg", alt: "Teaching Arabic and Islamic Studies" },
  { src: "/images/markaz-group-outdoor.jpg", alt: "With students of Al-Mafaazat Training Centre" },
  { src: "/images/khutbah-podium-2.jpg", alt: "Friday khutbah" },
  { src: "/images/teaching-selfie.jpg", alt: "With students after class" },
  { src: "/images/markaz-group-indoor.jpg", alt: "With students, indoor group photo" },
  { src: "/images/khutbah-podium-3.jpg", alt: "Address at Al-Mafaazat Central Mosque" },
  { src: "/images/mosque-congregation.jpg", alt: "Friday congregation at Al-Mafaazat Central Mosque" },
  { src: "/images/media-moontv.jpg", alt: "Television appearance, Moon TV" },
  { src: "/images/mosque-collage.jpg", alt: "Al-Mafaazat Central Mosque: building, classes and Friday congregation" },
  { src: "/images/sdg-campaign-banner.jpg", alt: "SDG 16 youth outreach campaign, Aboru" },
];

export default function GalleryPage() {
  return (
    <div>
      <PageHeader eyebrow="Gallery" title="Photo gallery" description="Teaching, mosque activities, conferences and community service." />
      <div className="mx-auto max-w-6xl columns-2 gap-4 px-6 py-16 sm:columns-3">
        {photos.map((p) => (
          <div key={p.src} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
            <Image src={p.src} alt={p.alt} width={800} height={800} className="w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
