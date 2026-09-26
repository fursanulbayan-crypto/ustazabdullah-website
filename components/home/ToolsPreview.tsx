import Link from "next/link";
import { ArrowRight, Languages, Type, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const toolPreviews = [
  {
    icon: Languages,
    title: "أستاذ عبدالله | التطبيق النحوي",
    status: "Available Now",
    statusColor: "text-emerald-700 dark:text-emerald-400",
    dot: "bg-emerald-500",
    description: "Interactive Nahw trainer based on Al-Tatbiq Al-Nahwi.",
  },
  {
    icon: Type,
    title: "Qalam",
    status: "Available Now",
    statusColor: "text-emerald-700 dark:text-emerald-400",
    dot: "bg-emerald-500",
    description: "Free bilingual Arabic/English typing trainer. No install required.",
  },
  {
    icon: HelpCircle,
    title: "Islamic Studies Quiz Builder",
    status: "In Development",
    statusColor: "text-ink/45 dark:text-beige-100/45",
    dot: "bg-ink/25 dark:bg-beige-100/25",
    description: "Generate structured assessments for Islamic Studies classes.",
  },
];

export function ToolsPreview() {
  return (
    <section className="border-y border-ink/10 bg-beige-100/40 py-20 dark:border-beige-100/10 dark:bg-emerald-950/30">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">
                Tools &amp; Applications
              </p>
              <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 sm:text-3xl">
                Educational tools, built and free to use
              </h2>
            </div>
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-sm text-emerald-800 dark:text-gold-300"
            >
              Explore All Tools <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3">
          {toolPreviews.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={i * 70}>
                <Link
                  href="/tools"
                  className="block h-full rounded-2xl border border-ink/10 bg-white p-6 transition-transform hover:-translate-y-1 dark:border-beige-100/10 dark:bg-emerald-900/40"
                >
                  <div className="flex items-start justify-between">
                    <Icon size={20} className="text-emerald-800 dark:text-gold-300" />
                    <span className={`inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest ${t.statusColor}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
                      {t.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink dark:text-beige-100">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-beige-100/60">
                    {t.description}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
