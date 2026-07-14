import { trustIndicators } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function TrustIndicators() {
  return (
    <section className="border-y border-ink/10 bg-beige-100/50 py-6 dark:border-beige-100/10 dark:bg-emerald-950/40">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6">
          {trustIndicators.map((t) => (
            <span
              key={t.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs font-medium text-ink/75 dark:border-beige-100/10 dark:bg-emerald-900/40 dark:text-beige-100/75"
            >
              <span aria-hidden="true">{t.emoji}</span> {t.label}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
