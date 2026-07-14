export function ComingSoonGrid({ items }: { items: { title: string; detail: string }[] }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-5 px-6 py-16 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-dashed border-ink/15 p-6 dark:border-beige-100/15">
          <h3 className="font-display text-lg font-semibold text-ink dark:text-beige-100">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-beige-100/60">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
