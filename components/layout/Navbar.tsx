"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setOpenGroup(null);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-ink/10 bg-beige-50/90 backdrop-blur-md dark:border-beige-100/10 dark:bg-emerald-950/90"
            : "border-b border-transparent bg-beige-50 dark:bg-emerald-950"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-lg font-semibold text-ink dark:text-beige-100" onClick={close}>
            <span className="text-gold-500">A.</span> {site.shortName}
          </Link>

          {/* Desktop nav */}
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
              className="lg:hidden p-2"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — FIXED overlay, does NOT push page content */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm dark:bg-emerald-950/60 lg:hidden"
            aria-hidden="true"
            onClick={close}
          />
          {/* Drawer */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-x-0 top-[65px] z-50 max-h-[calc(100dvh-65px)] overflow-y-auto border-t border-ink/10 bg-beige-50 dark:border-beige-100/10 dark:bg-emerald-950 lg:hidden"
          >
            <nav className="flex flex-col px-6 py-5" aria-label="Mobile navigation">
              {navLinks.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-3 text-base font-medium text-ink/80 dark:text-beige-100/80"
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mb-2 ml-3 flex flex-col border-l border-ink/10 pl-4 dark:border-beige-100/10">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2 text-sm text-ink/60 dark:text-beige-100/60"
                          onClick={close}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 border-t border-ink/10 pt-4 dark:border-beige-100/10">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900 px-5 py-2.5 text-sm font-medium text-beige-100"
                  onClick={close}
                >
                  Book Me <ArrowUpRight size={14} />
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
