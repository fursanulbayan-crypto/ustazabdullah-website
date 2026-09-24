import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Download, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Educational Tools",
  description:
    "Free educational tools built by Ustaz Abdullah: interactive Arabic grammar trainer, Qalam typing app, and more in development.",
};

const tools = [
  {
    status: "live" as const,
    tag: "Available Now",
    name: "أستاذ عبدالله | التطبيق النحوي",
    nameAr: "التطبيق النحوي",
    description:
      "An interactive Nahw (Arabic grammar) trainer built on the index of Al-Tatbiq Al-Nahwi by Dr. Abde Rajihi. Enter your name, choose your class level, and work through structured lessons with multiple question types: multiple choice, true/false, matching, and word ordering. Points, stars and badges track your progress.",
    audience: "Arabic students · Nahw · Secondary level",
    features: ["3 class levels", "10 lessons per level", "4 question types", "Progress tracking", "Based on Al-Tatbiq Al-Nahwi"],
    action: { label: "Launch Tool", href: "/tools/nahw-sarf", external: false },
  },
  {
    status: "download" as const,
    tag: "Download for PC",
    name: "Qalam — Arabic & English Typing Trainer",
    nameAr: "قلم",
    description:
      "A structured typing trainer for Arabic and English, built around authentic Qur'an and Hadith sources. Practice with a classic Arabic 101 keyboard layout or English QWERTY. Choose your level, switch between Scribe and Race modes, and build real typing fluency in both scripts.",
    audience: "Arabic learners · Typists · Students",
    features: ["Arabic 101 & QWERTY layouts", "Beginner / Intermediate / Pro", "Scribe and Race modes", "Authentic Qur'anic sources", "Light / Dark mode"],
    action: { label: "Download for PC", href: "#", external: false },
    note: "Windows download coming soon. Try the web version at qalam-swart.vercel.app",
    webUrl: "https://qalam-swart.vercel.app",
  },
  {
    status: "development" as const,
    tag: "In Development",
    name: "Islamic Studies Quiz Builder",
    nameAr: "بانى الاختبارات",
    description:
      "A tool for Islamic Studies teachers to generate structured assessments quickly. Enter a topic, class level and question count and receive a ready-to-use quiz with multiple question formats. Built to support the Nigerian curriculum and reduce teacher workload.",
    audience: "Islamic Studies teachers · Educators",
    features: ["Topic-based generation", "Nigerian curriculum alignment", "Multiple question formats", "Printable output"],
    action: null,
  },
];

const STATUS_STYLES = {
  live: {
    badge: "bg-emerald-900/10 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400",
    dot: "bg-emerald-500",
    border: "border-gold-400/40 hover:border-gold-500",
  },
  download: {
    badge: "bg-emerald-900/10 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400",
    dot: "bg-gold-500",
    border: "border-ink/10 hover:border-gold-400 dark:border-beige-100/10",
  },
  development: {
    badge: "bg-ink/5 text-ink/50 dark:bg-beige-100/5 dark:text-beige-100/50",
    dot: "bg-ink/25 dark:bg-beige-100/25",
    border: "border-ink/10 dark:border-beige-100/10 opacity-75",
  },
};

export default function ToolsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="border-b border-ink/10 bg-beige-100/50 dark:border-beige-100/10 dark:bg-emerald-950/40">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">
            Tools & Applications
          </p>
          <h1 className="mt-3 font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl">
            Educational tools built by Ustaz Abdullah
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink/65 dark:text-beige-100/65">
            Free tools for Arabic learning, typing practice and Islamic Studies, designed from real
            classroom experience. Use them directly in your browser or download them for offline use.
          </p>
        </div>
      </section>

      {/* TOOLS GRID */}
      <section className="mx-auto max-w-5xl px-6 py-20 space-y-8">
        {tools.map((tool, i) => {
          const styles = STATUS_STYLES[tool.status];
          return (
            <div
              key={tool.name}
              className={`rounded-2xl border bg-white p-8 transition-colors dark:bg-emerald-900/30 ${styles.border}`}
            >
              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${styles.badge}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
                    {tool.tag}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-semibold text-ink dark:text-beige-100 sm:text-2xl">
                    {tool.name}
                  </h2>
                  <p className="mt-1 font-mono text-xs text-gold-600 dark:text-gold-300">
                    {tool.audience}
                  </p>
                </div>

                {/* Action button */}
                {tool.action && (
                  tool.action.external ? (
                    <a
                      href={tool.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-medium text-beige-100 hover:bg-emerald-800 shrink-0"
                    >
                      <ExternalLink size={14} /> {tool.action.label}
                    </a>
                  ) : tool.status === "download" ? (
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink/40 dark:border-beige-100/15 dark:text-beige-100/40 cursor-not-allowed">
                        <Download size={14} /> {tool.action.label}
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={tool.action.href}
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-medium text-beige-100 hover:bg-emerald-800 shrink-0"
                    >
                      <ArrowRight size={14} /> {tool.action.label}
                    </Link>
                  )
                )}

                {tool.status === "development" && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-5 py-2.5 text-sm text-ink/40 dark:border-beige-100/10 dark:text-beige-100/40 shrink-0">
                    <Clock size={14} /> In Development
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">
                {tool.description}
              </p>

              {/* Features */}
              <div className="mt-5 flex flex-wrap gap-2">
                {tool.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-ink/10 px-3 py-1 text-xs text-ink/60 dark:border-beige-100/10 dark:text-beige-100/60"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Qalam web version note */}
              {"webUrl" in tool && tool.webUrl && (
                <p className="mt-4 text-xs text-ink/45 dark:text-beige-100/45">
                  PC download coming soon.{" "}
                  <a
                    href={tool.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-800 underline underline-offset-2 dark:text-gold-300"
                  >
                    Try the web version →
                  </a>
                </p>
              )}
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl bg-emerald-900 p-10 text-center lg:p-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-300">More Coming</p>
          <h2 className="font-display text-2xl font-medium text-beige-100 sm:text-3xl">
            Have an idea for a tool?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-beige-100/70">
            If there is a gap in Arabic, Islamic Studies or educational technology that a well-built
            tool could fill, get in touch.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-beige-100 px-7 py-3.5 text-sm font-medium text-emerald-900 hover:bg-white"
          >
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
