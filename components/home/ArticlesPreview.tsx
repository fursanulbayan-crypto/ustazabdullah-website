import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function ArticlesPreview() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24" id="articles">
      <Reveal>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">
              Research &amp; Articles
            </p>
            <h2 className="font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl">
              Recent writing
            </h2>
          </div>
          <Link href="/articles" className="inline-flex items-center gap-1.5 text-sm text-emerald-800 dark:text-gold-300">
            View all articles <ArrowRight size={14} />
          </Link>
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 90}>
            <article className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 dark:border-beige-100/10 dark:bg-emerald-900/40">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-emerald-900/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-emerald-800 dark:bg-beige-100/10 dark:text-gold-300">
                  {a.category}
                </span>
                <span className="text-xs text-ink/50 dark:text-beige-100/50">
                  {a.readMinutes} min · {formatDate(a.date)}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold leading-snug text-ink dark:text-beige-100">
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">
                {a.excerpt}
              </p>
              <Link href={`/articles/${a.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm text-gold-600 dark:text-gold-300">
                Read more <ArrowUpRight size={13} />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
