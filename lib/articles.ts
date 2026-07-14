import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { readingTime } from "./utils";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  tags: string[];
  readMinutes: number;
}

export interface Article extends ArticleMeta {
  content: string;
}

/**
 * Read and parse every MDX file in content/articles, sorted by date (newest first).
 * Reads happen at build time in a Server Component, never in the browser.
 */
export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title as string,
      excerpt: data.excerpt as string,
      category: data.category as string,
      date: data.date as string,
      tags: (data.tags as string[]) ?? [],
      readMinutes: readingTime(content),
      content,
    };
  });

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getAllCategories(): string[] {
  const categories = new Set(getAllArticles().map((a) => a.category));
  return ["All", ...Array.from(categories)];
}
