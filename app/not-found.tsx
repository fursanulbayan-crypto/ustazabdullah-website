import Link from "next/link";
import { Home } from "lucide-react";
import { EightPointRose } from "@/components/ui/EightPointRose";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="absolute text-emerald-800/20 dark:text-gold-300/20">
        <EightPointRose size={320} opacity={0.5} />
      </div>
      <p className="relative font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">404</p>
      <h1 className="relative mt-3 font-display text-3xl font-medium text-ink dark:text-beige-100">
        This page could not be found.
      </h1>
      <p className="relative mt-3 max-w-sm text-sm text-ink/60 dark:text-beige-100/60">
        The page you are looking for may have been moved or does not exist yet.
      </p>
      <Link href="/" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3 text-sm font-medium text-beige-100 hover:bg-emerald-800">
        <Home size={15} /> Back to homepage
      </Link>
    </div>
  );
}
