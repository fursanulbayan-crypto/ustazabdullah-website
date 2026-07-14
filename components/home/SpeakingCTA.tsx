import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function SpeakingCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="grid items-center gap-8 rounded-3xl border border-ink/10 p-10 dark:border-beige-100/10 lg:grid-cols-3 lg:p-14">
          <div className="lg:col-span-2">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">Speaking</p>
            <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 sm:text-3xl">
              Available for talks on education, leadership, AI and Islam.
            </h2>
            <p className="mt-3 text-sm text-ink/65 dark:text-beige-100/65">
              Conferences, teacher training sessions, youth development programmes and community events.
            </p>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-medium text-beige-100 hover:bg-emerald-800"
          >
            Book Me to Speak <ArrowRight size={15} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
