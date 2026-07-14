"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-8 w-8" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full border border-emerald-900/15 dark:border-beige-100/15 p-2 transition-colors hover:border-gold-500"
    >
      {isDark ? <Sun size={16} className="text-gold-400" /> : <Moon size={16} className="text-emerald-800" />}
    </button>
  );
}
