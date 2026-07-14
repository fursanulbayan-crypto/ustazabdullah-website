"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface FaqItem {
  q: string;
  a: string;
  list?: string[];
  note?: string;
}

export function FAQAccordion({ faqs, idPrefix = "faq" }: { faqs: FaqItem[]; idPrefix?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10 dark:divide-beige-100/10 dark:border-beige-100/10">
      {faqs.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;
        return (
          <Reveal key={item.q} delay={i * 40}>
            <div>
              <button
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-base font-medium text-ink dark:text-beige-100 sm:text-lg">
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className="shrink-0 text-gold-500 transition-transform"
                  style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                  aria-hidden="true"
                />
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="grid transition-all duration-300 ease-in-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
              >
                <div className="overflow-hidden">
                  <div className="max-w-2xl pb-5 text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">
                    <p>{item.a}</p>
                    {item.list && (
                      <ul className="mt-3 space-y-1.5">
                        {item.list.map((l) => (
                          <li key={l} className="flex items-start gap-2">
                            <Check size={13} className="mt-0.5 shrink-0 text-gold-500" /> {l}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.note && <p className="mt-3">{item.note}</p>}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
