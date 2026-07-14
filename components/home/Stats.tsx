import { stats } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Stats() {
  return (
    <section className="border-t border-ink/10 bg-emerald-900 dark:border-beige-100/10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <p className="font-mono text-2xl font-medium text-beige-100">{s.value}</p>
            <p className="mt-1 text-xs text-beige-100/60">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
