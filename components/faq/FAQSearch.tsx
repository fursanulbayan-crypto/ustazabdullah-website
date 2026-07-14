"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { faqCategories } from "@/lib/faq";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/ui/Reveal";

function matches(text: string, query: string) {
  return text.toLowerCase().includes(query.toLowerCase());
}

export function FAQSearch() {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const q = query.trim();
    if (!q) return faqCategories;

    return faqCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            matches(item.q, q) ||
            matches(item.a, q) ||
            (item.list ?? []).some((l) => matches(l, q)) ||
            (item.note ? matches(item.note, q) : false)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  const totalResults = filteredCategories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <div>
      {/* SEARCH */}
      <div className="mx-auto max-w-2xl px-6">
        <label htmlFor="faq-search" className="sr-only">Search frequently asked questions</label>
        <div className="relative">
          <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/35 dark:text-beige-100/35" />
          <input
            id="faq-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions, e.g. &ldquo;online classes&rdquo; or &ldquo;speaking fee&rdquo;"
            className="w-full rounded-full border border-ink/15 bg-white py-3 pl-11 pr-11 text-sm outline-none focus-visible:border-gold-500 dark:border-beige-100/15 dark:bg-emerald-900/40"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-ink/40 hover:text-ink dark:text-beige-100/40 dark:hover:text-beige-100"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <p className="mt-2 text-center text-xs text-ink/45 dark:text-beige-100/45" aria-live="polite">
          {query ? `${totalResults} question${totalResults === 1 ? "" : "s"} found` : `${faqCategories.reduce((s, c) => s + c.items.length, 0)} questions across ${faqCategories.length} categories`}
        </p>
      </div>

      {/* RESULTS */}
      <div className="mx-auto mt-14 max-w-3xl space-y-16 px-6">
        {filteredCategories.length === 0 ? (
          <Reveal>
            <div className="rounded-2xl border border-dashed border-ink/15 py-16 text-center dark:border-beige-100/15">
              <p className="font-display text-lg text-ink dark:text-beige-100">No results found</p>
              <p className="mt-2 text-sm text-ink/55 dark:text-beige-100/55">
                Try a different search term, or clear the search to browse all questions.
              </p>
              <button
                onClick={() => setQuery("")}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink dark:border-beige-100/15 dark:text-beige-100"
              >
                Clear search
              </button>
            </div>
          </Reveal>
        ) : (
          filteredCategories.map((cat) => (
            <div key={cat.title}>
              <Reveal>
                <h2 className="font-display text-xl font-semibold text-ink dark:text-beige-100 sm:text-2xl">
                  {cat.title}
                </h2>
              </Reveal>
              <div className="mt-6">
                <FAQAccordion faqs={cat.items} idPrefix={cat.title.replace(/\s+/g, "-").toLowerCase()} key={`${cat.title}-${query}`} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
