import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "The educational journey, teaching experience, research interests and values of Abubakar, Abdulahi Olayinka.",
};

const milestones = [
  { year: "Education", detail: "Bachelor of Arts in Education and Islamic Studies (B.A. Ed. Hons), First Class." },
  { year: "Institution", detail: "Founded and directs Al-Mafaazat Arabic and Islamic Training Centre, online and physical." },
  { year: "Mosque Leadership", detail: "Chief Imam, Al-Mafaazah Central Mosque, a CAC-registered institution in Lagos." },
  { year: "Teaching", detail: "Arabic and Islamic Studies teacher and examination officer at Markaz Sahadat Alimosho." },
  { year: "Research", detail: "Active researcher in Islamic education, moral development and Qur'anic memorisation studies." },
  { year: "Certified", detail: "SDGs Advocate, Cohort 8 (SDG 16), certified. Completed mosque-based youth peacebuilding outreach in Aboru, Alimosho LGA." },
];

const values = [
  { title: "Scholarship with rigour", detail: "Every claim, religious or academic, is checked against its source before it is taught or published." },
  { title: "Humility in leadership", detail: "Authority is held as a trust to the community, not a platform for self-promotion." },
  { title: "Evidence over assumption", detail: "Research questions are answered with data, not convenient anecdote." },
  { title: "Technology in service of tradition", detail: "New tools are adopted only where they strengthen, not dilute, sound teaching." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Reveal>
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">About</p>
        <h1 className="font-display text-4xl font-medium text-ink dark:text-beige-100 sm:text-5xl">
          Abubakar, Abdulahi Olayinka
        </h1>
        <p className="mt-6 leading-relaxed text-ink/70 dark:text-beige-100/70">
          Abubakar is a Chief Imam, Islamic Studies scholar and educator based in Lagos, Nigeria, working at
          the intersection of Islamic scholarship, education, research and technology. He holds a First
          Class Bachelor of Arts in Education and Islamic Studies, and is fluent in English and Arabic. His
          work spans classroom teaching, mosque leadership, curriculum design, quantitative educational
          research and community development.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 grid grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
            <Image
              src="/images/graduation.jpg"
              alt="Abubakar, Abdulahi Olayinka at his First Class graduation, Al-Hikmah University, Ilorin"
              width={1170}
              height={909}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
            <Image
              src="/images/markaz-group-outdoor.jpg"
              alt="Abubakar with students of Al-Mafaazat Arabic and Islamic Training Centre"
              width={1290}
              height={933}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={90}>
        <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-ink/10 p-6 dark:border-beige-100/10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-mono text-2xl font-medium text-emerald-800 dark:text-gold-300">{s.value}</p>
              <p className="mt-1 text-xs text-ink/55 dark:text-beige-100/55">{s.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-16">
        <Reveal>
          <SectionHeading eyebrow="Journey" title="Educational and professional milestones" />
        </Reveal>
        <div className="mt-10 space-y-6">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 60}>
              <div className="flex gap-5 border-b border-ink/10 pb-6 dark:border-beige-100/10">
                <span className="w-32 shrink-0 font-mono text-xs uppercase tracking-wide text-gold-600 dark:text-gold-300">
                  {m.year}
                </span>
                <p className="text-sm leading-relaxed text-ink/75 dark:text-beige-100/75">{m.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Reveal>
          <SectionHeading eyebrow="Values" title="What guides the work" />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <div className="rounded-2xl border border-ink/10 p-6 dark:border-beige-100/10">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-beige-100">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">{v.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
