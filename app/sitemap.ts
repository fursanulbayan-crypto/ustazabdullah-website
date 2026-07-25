import type { MetadataRoute } from "next";
import { site } from "@/lib/data";
import { getAllArticles } from "@/lib/articles";

/**
 * Next.js auto-serves this as /sitemap.xml. Static routes get a fixed
 * priority; article pages are pulled in dynamically so new posts appear
 * without editing this file.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${site.url}/about`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${site.url}/academy`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${site.url}/expertise`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${site.url}/research`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${site.url}/articles`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${site.url}/knowledge-centre`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${site.url}/teaching`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${site.url}/speaking`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${site.url}/book`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${site.url}/sdg-projects`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${site.url}/gallery`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${site.url}/media`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${site.url}/resources`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${site.url}/testimonials`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${site.url}/faq`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${site.url}/contact`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${site.url}/privacy-policy`, priority: 0.2, changeFrequency: "yearly" },
    { url: `${site.url}/terms`, priority: 0.2, changeFrequency: "yearly" },
  ];

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${site.url}/articles/${a.slug}`,
    lastModified: a.date,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...articleRoutes];
}
