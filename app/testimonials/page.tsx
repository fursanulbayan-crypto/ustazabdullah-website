import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export const metadata: Metadata = { title: "Testimonials", description: "What students, academics, community leaders and parents say." };

export default function TestimonialsPage() {
  return (
    <div>
      <PageHeader eyebrow="Testimonials" title="What people say" description="Reflections from students, academics, community leaders and parents." />
      <div className="mx-auto grid max-w-5xl gap-6 px-6 py-16 sm:grid-cols-2">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl border border-ink/10 p-6 dark:border-beige-100/10">
            <Quote size={18} className="text-emerald-800 dark:text-gold-300" />
            <p className="mt-3 text-sm leading-relaxed text-ink/75 dark:text-beige-100/75">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-4 text-xs text-ink/50 dark:text-beige-100/50">{t.name} · {t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
