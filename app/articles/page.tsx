import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Articles",
  description: "Writing on Islamic Studies, education, leadership, technology and research from Abubakar, Abdulahi Olayinka.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Articles"
          title="Writing on education, research and Islamic scholarship"
          description="New pieces are added regularly. Each article is written in-house; nothing here is AI-generated without disclosure."
        />
      </Reveal>

      <div className="mt-14 divide-y divide-ink/10 dark:divide-beige-100/10">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 50}>
            <Link href={`/articles/${a.slug}`} className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="rounded-full bg-emerald-900/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-emerald-800 dark:bg-beige-100/10 dark:text-gold-300">
                    {a.category}
                  </span>
                  <span className="text-xs text-ink/50 dark:text-beige-100/50">{formatDate(a.date)} · {a.readMinutes} min read</span>
                </div>
                <h2 className="font-display text-xl font-semibold text-ink group-hover:text-emerald-800 dark:text-beige-100 dark:group-hover:text-gold-300">
                  {a.title}
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-ink/60 dark:text-beige-100/60">{a.excerpt}</p>
              </div>
              <ArrowUpRight size={18} className="shrink-0 text-ink/30 group-hover:text-gold-500 dark:text-beige-100/30" />
            </Link>
          </Reveal>
        ))}
        {articles.length === 0 && (
          <p className="py-10 text-sm text-ink/50 dark:text-beige-100/50">
            No articles published yet. Add an .mdx file to content/articles to publish the first one.
          </p>
        )}
      </div>
    </div>
  );
}
