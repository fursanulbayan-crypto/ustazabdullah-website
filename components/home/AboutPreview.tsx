import { Reveal } from "@/components/ui/Reveal";

const timeline = [
  { y: "2017", t: "Began teaching Arabic Language and Islamic Studies at Markaz Sahadat Alimosho, Lagos." },
  { y: "2019", t: "Founded Al-Mafaazat Arabic and Islamic Training Centre and became Chief Imam of Al-Mafaazat Central Mosque." },
  { y: "2025", t: "Graduated First Class Honours, Best Graduating Student, Institute of Education, Al-Hikmah University." },
  { y: "2026", t: "Certified SDG 16 Advocate. Began coursework in instructional design and e-learning development." },
];

export function AboutPreview() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-12" id="about">
      <div className="lg:col-span-4">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">
            About
          </p>
          <h2 className="font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl">
            Learning, designed better. Delivered more effectively. Measured meaningfully.
          </h2>
        </Reveal>
      </div>
      <div className="lg:col-span-8">
        <Reveal delay={100}>
          <p className="leading-relaxed text-ink/65 dark:text-beige-100/65">
            Abubakar, Abdulahi Olayinka (Ustaz Abdullah) is an Islamic scholar, educator, researcher
            and learning professional working at the intersection of education, instructional design,
            assessment and technology. As Chief Imam of Al-Mafaazat Central Mosque and founder of
            Al-Mafaazat Arabic and Islamic Training Centre, he has trained over 100 students across
            physical and online settings. His research applies quantitative methods to Islamic
            education, and he builds practical digital tools that extend learning beyond the
            classroom.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-8 space-y-5">
            {timeline.map((row, i) => (
              <div
                key={row.y}
                className={`flex items-start gap-4 pb-5 ${i < timeline.length - 1 ? "border-b border-ink/10 dark:border-beige-100/10" : ""}`}
              >
                <span className="w-12 shrink-0 font-mono text-xs text-gold-600 dark:text-gold-300 pt-0.5">
                  {row.y}
                </span>
                <span className="text-sm text-ink/75 dark:text-beige-100/75">{row.t}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
