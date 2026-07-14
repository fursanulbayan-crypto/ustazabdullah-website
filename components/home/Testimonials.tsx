"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section className="bg-beige-100/60 py-24 dark:bg-emerald-950/40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-8 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">
          Testimonials
        </p>
        <Quote size={26} className="mx-auto mb-6 text-emerald-800 dark:text-gold-300" />
        <p className="font-display text-xl font-normal leading-relaxed text-ink dark:text-beige-100 sm:text-2xl">
          &ldquo;{t.quote}&rdquo;
        </p>
        <p className="mt-6 text-sm text-ink/60 dark:text-beige-100/60">
          {t.name} · {t.role}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="rounded-full border border-ink/10 p-2 dark:border-beige-100/10"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-gold-500" : "bg-ink/15 dark:bg-beige-100/15"}`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="rounded-full border border-ink/10 p-2 dark:border-beige-100/10"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
