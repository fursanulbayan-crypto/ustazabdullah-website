import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, type: "article" },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">
        {article.category}
      </p>
      <h1 className="font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-4 text-sm text-ink/50 dark:text-beige-100/50">
        {formatDate(article.date)} · {article.readMinutes} min read
      </p>

      <div className="prose-article mt-10">
        <MDXRemote source={article.content} />
      </div>

      <div className="mt-12 flex flex-wrap gap-2 border-t border-ink/10 pt-6 dark:border-beige-100/10">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-ink/10 px-3 py-1 text-xs text-ink/60 dark:border-beige-100/10 dark:text-beige-100/60">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
