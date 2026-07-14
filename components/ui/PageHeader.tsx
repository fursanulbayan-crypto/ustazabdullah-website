export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="border-b border-ink/10 bg-beige-100/50 dark:border-beige-100/10 dark:bg-emerald-950/40">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">{eyebrow}</p>
        <h1 className="font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink/65 dark:text-beige-100/65">{description}</p>
      </div>
    </div>
  );
}
