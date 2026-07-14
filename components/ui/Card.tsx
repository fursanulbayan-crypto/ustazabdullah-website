import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ink/10 bg-white p-6 dark:border-beige-100/10 dark:bg-emerald-900/40",
        className
      )}
    >
      {children}
    </div>
  );
}
