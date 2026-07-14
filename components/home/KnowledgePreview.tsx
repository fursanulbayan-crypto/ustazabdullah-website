import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { AutoCarousel } from "@/components/ui/AutoCarousel";

const khutbahPhotos = [
  { src: "/images/khutbah-podium-1.jpg", alt: "Delivering a khutbah at Al-Mafaazat Central Mosque, Aboru" },
  { src: "/images/khutbah-podium-2.jpg", alt: "Friday khutbah at Al-Mafaazat Central Mosque" },
  { src: "/images/khutbah-podium-3.jpg", alt: "Address at Al-Mafaazat Central Mosque" },
  { src: "/images/mosque-congregation.jpg", alt: "Friday congregation at Al-Mafaazat Central Mosque" },
];

export function KnowledgePreview() {
  return (
    <section className="bg-emerald-900 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-300">Islamic Knowledge Centre</p>
          <h2 className="font-display text-3xl font-medium text-beige-100 sm:text-4xl">
            Khutbahs, tafsir reflections and family guidance.
          </h2>
          <p className="mt-5 leading-relaxed text-beige-100/70">
            Friday khutbahs, Qur&apos;an reflections and hadith explanations in Arabic and English, with audio
            and downloadable PDFs, built for the mosque community and a global audience alike.
          </p>
          <Link
            href="/knowledge-centre"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-beige-100/30 px-5 py-2.5 text-sm text-beige-100"
          >
            Browse the Knowledge Centre <ArrowRight size={14} />
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <AutoCarousel
            images={khutbahPhotos}
            className="mb-4 h-56 rounded-2xl border border-beige-100/15"
          />
          <div className="rounded-2xl border border-beige-100/15 bg-beige-100/5 p-8">
            <Quote size={20} className="text-gold-300" />
            <p className="arabic mt-4 text-2xl leading-loose text-beige-100">إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ</p>
            <p className="mt-4 text-sm text-beige-100/70">
              &ldquo;Actions are judged by intentions.&rdquo; This week&apos;s khutbah reflection draws on this
              hadith to examine sincerity in community leadership.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
