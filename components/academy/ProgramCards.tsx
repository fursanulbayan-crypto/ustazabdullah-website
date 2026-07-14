"use client";

import { useState } from "react";
import { Languages, BookOpen, Landmark, GraduationCap, ChevronDown, Check } from "lucide-react";
import { academyPrograms } from "@/lib/academy";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: Record<string, any> = {
  languages: Languages,
  "book-open": BookOpen,
  landmark: Landmark,
  "graduation-cap": GraduationCap,
};

export function ProgramCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {academyPrograms.map((p, i) => {
        const Icon = ICONS[p.icon];
        const open = openIndex === i;
        return (
          <Reveal key={p.title} delay={i * 60}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="h-full w-full rounded-2xl border border-ink/10 bg-white p-6 text-left transition-all hover:-translate-y-1 hover:border-gold-400 dark:border-beige-100/10 dark:bg-emerald-900/40"
            >
              <div className="flex items-start justify-between">
                <Icon size={24} className="text-emerald-800 dark:text-gold-300" />
                <ChevronDown
                  size={16}
                  className="mt-1 text-ink/30 transition-transform dark:text-beige-100/30"
                  style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-300">
                {p.level}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink dark:text-beige-100">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">{p.description}</p>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open ? 200 : 0, opacity: open ? 1 : 0 }}
              >
                <ul className="mt-4 space-y-2 border-t border-ink/10 pt-4 dark:border-beige-100/10">
                  {p.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-ink/60 dark:text-beige-100/60">
                      <Check size={13} className="mt-0.5 shrink-0 text-gold-500" /> {d}
                    </li>
                  ))}
                </ul>
              </div>

              {!open && (
                <p className="mt-3 text-xs font-medium text-emerald-800 dark:text-gold-300">Tap for details</p>
              )}
            </button>
          </Reveal>
        );
      })}
    </div>
  );
}
