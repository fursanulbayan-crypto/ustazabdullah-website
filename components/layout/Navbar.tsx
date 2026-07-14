"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-beige-50/80 backdrop-blur-md transition-colors dark:bg-emerald-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-semibold text-ink dark:text-beige-100">
          <span className="text-gold-500">A.</span> {site.shortName}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(item.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  className="flex items-center gap-1 text-sm text-ink/70 hover:text-emerald-800 dark:text-beige-100/70 dark:hover:text-gold-300"
                  aria-expanded={openGroup === item.label}
                >
                  {item.label} <ChevronDown size={13} />
                </button>
                {openGroup === item.label && (
                  <div className="absolute left-0 top-full w-56 rounded-xl border border-ink/10 bg-beige-50 p-2 shadow-lg dark:border-beige-100/10 dark:bg-emerald-900">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-emerald-900/5 dark:text-beige-100/80 dark:hover:bg-beige-100/5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink/70 hover:text-emerald-800 dark:text-beige-100/70 dark:hover:text-gold-300"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/book"
            className="hidden items-center gap-1.5 rounded-full bg-emerald-900 px-4 py-2 text-sm font-medium text-beige-100 hover:bg-emerald-800 sm:inline-flex"
          >
            Book Me <ArrowUpRight size={14} />
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-ink/10 dark:border-beige-100/10 lg:hidden transition-[max-height] duration-300",
          open ? "max-h-[600px]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
          {navLinks.map((item) => (
            <div key={item.label}>
              <Link href={item.href} className="block py-2 text-sm text-ink/80 dark:text-beige-100/80" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 flex flex-col border-l border-ink/10 pl-3 dark:border-beige-100/10">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="py-1.5 text-sm text-ink/60 dark:text-beige-100/60"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
