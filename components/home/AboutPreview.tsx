import { Reveal } from "@/components/ui/Reveal";

const timeline = [
  { y: "Founding", t: "Established Al-Mafaazat Arabic and Islamic Training Centre" },
  { y: "Appointed", t: "Chief Imam, Al-Mafaazah Central Mosque" },
  { y: "Certified", t: "SDGs Advocate, Cohort 8 (SDG 16), completed — youth peacebuilding outreach in Aboru" },
  { y: "Current", t: "Data analytics internships in applied educational research" },
];

export function AboutPreview() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-12" id="about">
      <div className="lg:col-span-4">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">About</p>
          <h2 className="font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl">
            A scholar&apos;s discipline, a researcher&apos;s method.
          </h2>
        </Reveal>
      </div>
      <div className="lg:col-span-8">
        <Reveal delay={100}>
          <p className="leading-relaxed text-ink/65 dark:text-beige-100/65">
            A First Class graduate in Education and Islamic Studies, Abubakar leads Al-Mafaazat Arabic and
            Islamic Training Centre as founder and director, teaches Nahw, Sarf and Arabic Prosody, and
            serves as Chief Imam of Al-Mafaazah Central Mosque in Lagos. His research applies quantitative
            methods, including SPSS-based correlation and chi-square analysis, to questions of Islamic
            education and moral development, while his SDG 16 advocacy work runs youth peacebuilding
            programmes in the Aboru community.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-8 space-y-5">
            {timeline.map((row, i) => (
              <div
                key={row.y}
                className={`flex items-start gap-4 pb-5 ${i < timeline.length - 1 ? "border-b border-ink/10 dark:border-beige-100/10" : ""}`}
              >
                <span className="w-24 shrink-0 font-mono text-xs text-gold-600 dark:text-gold-300">{row.y}</span>
                <span className="text-sm text-ink dark:text-beige-100">{row.t}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
