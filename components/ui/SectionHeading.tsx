export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink dark:text-beige-100">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink/65 dark:text-beige-100/65 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
