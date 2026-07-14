import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: React.ReactNode;
};

const variants = {
  primary: "bg-emerald-900 text-beige-100 hover:bg-emerald-800",
  secondary: "border border-ink/15 text-ink hover:border-gold-500 dark:border-beige-100/15 dark:text-beige-100",
  ghost: "text-emerald-800 dark:text-gold-300 underline underline-offset-4",
};

export function Button({ href, children, variant = "primary", className, icon }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
      {icon}
    </Link>
  );
}
