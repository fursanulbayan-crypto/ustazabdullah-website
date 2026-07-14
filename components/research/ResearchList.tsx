"use client";

import { useState } from "react";
import { Download, ExternalLink, Quote } from "lucide-react";
import { researchProjects, publicationCategories } from "@/lib/research";
import { cn } from "@/lib/utils";

const statusColor: Record<string, string> = {
  Published: "text-emerald-800 dark:text-emerald-500",
  "Under Review": "text-gold-600 dark:text-gold-300",
  "In Progress": "text-ink/50 dark:text-beige-100/50",
};

export function ResearchList() {
  const [filter, setFilter] = useState<string>("All");

  const projects = researchProjects.filter((p) => filter === "All" || p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {publicationCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs transition-colors",
              filter === cat
                ? "border-emerald-900 bg-emerald-900 text-beige-100 dark:border-gold-400 dark:bg-gold-400 dark:text-emerald-950"
                : "border-ink/15 text-ink/60 hover:border-gold-500 dark:border-beige-100/15 dark:text-beige-100/60"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        {projects.map((p) => (
          <div key={p.slug} className="rounded-2xl border border-ink/10 p-7 dark:border-beige-100/10">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-emerald-900/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-emerald-800 dark:bg-beige-100/10 dark:text-gold-300">
                {p.category}
              </span>
              <span className="text-xs text-ink/50 dark:text-beige-100/50">{p.year}</span>
              <span className={cn("text-xs font-medium", statusColor[p.status])}>{p.status}</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-ink dark:text-beige-100">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">{p.abstract}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.keywords.map((k) => (
                <span key={k} className="rounded-full border border-ink/10 px-2.5 py-1 text-[11px] text-ink/55 dark:border-beige-100/10 dark:text-beige-100/55">
                  {k}
                </span>
              ))}
            </div>

            <p className="mt-4 text-xs text-ink/50 dark:text-beige-100/50">
              <span className="font-medium text-ink/70 dark:text-beige-100/70">Methodology: </span>{p.methodology}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-ink/10 pt-4 dark:border-beige-100/10">
              {p.pdfUrl ? (
                <a href={p.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-emerald-800 dark:text-gold-300">
                  <Download size={13} /> Download PDF
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs text-ink/35 dark:text-beige-100/35">
                  <Download size={13} /> PDF not yet available
                </span>
              )}
              {p.externalUrl ? (
                <a href={p.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-emerald-800 dark:text-gold-300">
                  <ExternalLink size={13} /> View publication
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs text-ink/35 dark:text-beige-100/35">
                  <ExternalLink size={13} /> Not yet published externally
                </span>
              )}
              <button
                onClick={() => navigator.clipboard.writeText(p.citation)}
                className="inline-flex items-center gap-1.5 text-xs text-ink/50 hover:text-emerald-800 dark:text-beige-100/50 dark:hover:text-gold-300"
              >
                <Quote size={13} /> Copy APA citation
              </button>
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <p className="text-sm text-ink/50 dark:text-beige-100/50">No research entries in this category yet.</p>
        )}
      </div>
    </div>
  );
}
