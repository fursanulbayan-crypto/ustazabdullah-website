"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { navLinks, site } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => {
    setOpen(false);
    setMobileGroup(null);
  };

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-ink/10 bg-beige-50/95 backdrop-blur-md dark:border-beige-100/10 dark:bg-emerald-950/95"
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
                    {item.label}
                    <ChevronDown
                      size={13}
                      className="transition-transform"
                      style={{ transform: openGroup === item.label ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>
                  {openGroup === item.label && (
                    <div className="absolute left-0 top-full pt-2 w-52">
                      <div className="rounded-xl border border-ink/10 bg-beige-50 p-1.5 shadow-lg dark:border-beige-100/10 dark:bg-emerald-900">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-ink/75 hover:bg-emerald-900/8 hover:text-emerald-800 dark:text-beige-100/75 dark:hover:bg-beige-100/8 dark:hover:text-gold-300"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 dark:border-beige-100/10 lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — fixed overlay, does NOT push page content down */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
            onClick={close}
          />

          {/* Drawer — slides down from below the header */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-x-0 top-[65px] z-50 max-h-[calc(100dvh-65px)] overflow-y-auto border-t border-ink/10 bg-beige-50 shadow-xl dark:border-beige-100/10 dark:bg-emerald-950 lg:hidden"
          >
            <nav className="px-6 py-4" aria-label="Mobile navigation">
              {navLinks.map((item) =>
                item.children ? (
                  <div key={item.label} className="border-b border-ink/8 dark:border-beige-100/8 last:border-0">
                    <button
                      onClick={() => setMobileGroup(mobileGroup === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between py-3.5 text-left text-base font-medium text-ink dark:text-beige-100"
                      aria-expanded={mobileGroup === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className="text-ink/40 dark:text-beige-100/40 transition-transform"
                        style={{ transform: mobileGroup === item.label ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>
                    {mobileGroup === item.label && (
                      <div className="mb-3 ml-1 space-y-0.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={close}
                            className="block rounded-lg px-3 py-2.5 text-sm text-ink/65 hover:bg-emerald-900/5 hover:text-emerald-800 dark:text-beige-100/65 dark:hover:text-gold-300"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div key={item.href} className="border-b border-ink/8 dark:border-beige-100/8 last:border-0">
                    <Link
                      href={item.href}
                      onClick={close}
                      className="block py-3.5 text-base font-medium text-ink dark:text-beige-100"
                    >
                      {item.label}
                    </Link>
                  </div>
                )
              )}

              {/* Book Me in mobile menu too */}
              <div className="mt-4 pb-2">
                <Link
                  href="/book"
                  onClick={close}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-900 py-3 text-sm font-medium text-beige-100"
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
