import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Homepage speaking / booking CTA block.
 * One visually dominant primary action (Book Me), one secondary (View Academy),
 * one ghost link (Explore Tools). Removes equal-weight button competition.
 */
export function SpeakingCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="grid items-center gap-8 rounded-3xl border border-ink/10 p-10 dark:border-beige-100/10 lg:grid-cols-3 lg:p-14">
          <div className="lg:col-span-2">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">
              Work with Ustaz Abdullah
            </p>
            <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 sm:text-3xl">
              Book a talk, join the academy, or explore the tools.
            </h2>
            <p className="mt-3 text-sm text-ink/65 dark:text-beige-100/65">
              Conferences, teacher training, Islamic lectures, youth programmes — or enrol at
              Al-Mafaazat Arabic and Islamic Training Centre.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* Secondary */}
              <Link
                href="/academy"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink hover:border-gold-500 dark:border-beige-100/15 dark:text-beige-100"
              >
                Join the Academy
              </Link>
              {/* Ghost */}
              <Link
                href="/tools"
                className="text-sm text-emerald-800 underline underline-offset-4 dark:text-gold-300"
              >
                Explore Tools
              </Link>
            </div>
          </div>

          {/* Primary — visually dominant, full-width on the right column */}
          <Link
            href="/book"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-900 px-6 py-4 text-base font-semibold text-beige-100 shadow-lg shadow-emerald-950/20 hover:bg-emerald-800 lg:py-5"
          >
            Book Me to Speak <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
