import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely, resolving conflicting utility classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Rough reading time estimate for article content (words per minute basis).
 */
export function readingTime(content: string, wpm = 200) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / wpm));
}

/**
 * Format an ISO date string as "12 July 2026" (British long date format).
 */
export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
