import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { ComingSoonGrid } from "@/components/ui/ComingSoonGrid";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Courses taught, teaching philosophy and learning resources from Abubakar, Abdulahi Olayinka.",
};

const photos = [
  { src: "/images/teaching-classroom.jpg", alt: "Teaching an Arabic and Islamic Studies class at Markaz Sahadat Alimosho", w: 1290, h: 1527 },
  { src: "/images/teaching-selfie.jpg", alt: "With students after class", w: 1200, h: 1564 },
  { src: "/images/markaz-group-indoor.jpg", alt: "With students of Al-Mafaazat Arabic and Islamic Training Centre", w: 1400, h: 1050 },
];

export default function TeachingPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Teaching"
        title="Courses, philosophy and resources"
        description="Arabic Language (Nahw, Sarf, 'Aruḍ) and Islamic Studies instruction for students from JSS level through advanced study, at Al-Mafaazat Training Centre and Markaz Sahadat Alimosho."
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-6 py-14 sm:grid-cols-3">
        {photos.map((p, i) => (
          <Reveal key={p.src} delay={i * 70}>
            <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
              <Image src={p.src} alt={p.alt} width={p.w} height={p.h} className="h-56 w-full object-cover" />
            </div>
          </Reveal>
        ))}
      </div>

      <ComingSoonGrid
        items={[
          { title: "Courses Taught", detail: "A structured list of current and past courses, with levels and syllabi." },
          { title: "Teaching Philosophy", detail: "The principles that shape how each lesson is planned and delivered." },
          { title: "Learning Resources", detail: "Slides, worksheets and revision materials for enrolled students." },
          { title: "Student Testimonials", detail: "Reflections from current and former students." },
        ]}
      />
    </div>
  );
}
