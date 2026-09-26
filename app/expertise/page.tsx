import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark, Laptop, BarChart3, GraduationCap, Sparkles, LineChart, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Six areas of practice: Islamic Education, Instructional Design & E-learning, Assessment & Educational Research, Learning & Development, Educational Technology & AI, and Data & Learning Analytics.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abubakar, Abdulahi Olayinka",
  jobTitle: ["Chief Imam", "Educator", "Learning Designer", "Researcher"],
  knowsAbout: [
    "Islamic Education", "Instructional Design", "E-learning", "Assessment",
    "Educational Research", "Learning and Development", "Educational Technology",
    "Artificial Intelligence in Education", "Data Analytics", "Learning Analytics",
  ],
};

const domains = [
  {
    icon: Landmark,
    title: "Islamic Education",
    summary: "Arabic Language, Qur'anic Education and Islamic Studies, taught with structure and rigour.",
    detail:
      "Nahw, Sarf and Arabic Prosody instruction, Qur'anic memorisation and tajweed, and Aqeedah and Fiqh grounded in classical scholarship. Delivered through Al-Mafaazat Arabic and Islamic Training Centre, physically and online.",
    who: "Students, Madrasahs, Islamic schools",
  },
  {
    icon: Laptop,
    title: "Instructional Design & E-learning",
    summary: "Designing learning experiences that work, not just content that exists.",
    detail:
      "Structuring curricula, learning pathways and digital courses for both traditional and online environments. Building toward practical LMS implementation and e-learning course development.",
    who: "Schools, training centres, NGOs",
  },
  {
    icon: BarChart3,
    title: "Assessment & Educational Research",
    summary: "Treating assessment as evidence for improving learning, not just a final grade.",
    detail:
      "Quantitative research design, Likert-scale instruments and SPSS-based analysis. Undergraduate research examined Qur'anic memorisation and academic performance using structured statistical methods.",
    who: "Researchers, universities, institutions",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    summary: "Training educators so classrooms improve, not just individual lessons.",
    detail:
      "Teacher training workshops grounded in real classroom experience, covering pedagogy, classroom management and practical curriculum delivery for Arabic and Islamic Studies educators.",
    who: "Teachers, training programmes",
  },
  {
    icon: Sparkles,
    title: "Educational Technology & AI",
    summary: "Applying AI and digital tools responsibly, where they genuinely help.",
    detail:
      "Certified in AI ethics and digital skills. Builds practical tools including Qalam, an Arabic and English typing trainer, and an interactive Nahw trainer, applying technology to real teaching gaps.",
    who: "Educators, EdTech teams",
  },
  {
    icon: LineChart,
    title: "Data & Learning Analytics",
    summary: "Using data to understand whether learning is actually taking place.",
    detail:
      "Data analytics, SQL and statistical analysis applied to educational outcomes. Certified in data analytics and digital skills from DataCamp, Accenture and the ESG Institute.",
    who: "Institutions, researchers",
  },
];

export default function ExpertisePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="border-b border-ink/10 bg-beige-100/50 dark:border-beige-100/10 dark:bg-emerald-950/40">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">
            Expertise
          </p>
          <h1 className="mt-3 font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl">
            Six areas, one practice
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink/65 dark:text-beige-100/65">
            How can learning be designed better, delivered more effectively, and measured more
            meaningfully? Every domain below answers a piece of that question.
          </p>
        </div>
      </section>

      {/* DOMAINS */}
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {domains.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="rounded-2xl border border-ink/10 bg-white p-7 dark:border-beige-100/10 dark:bg-emerald-900/30"
              >
                <Icon size={24} className="text-emerald-800 dark:text-gold-300" />
                <h2 className="mt-4 font-display text-lg font-semibold text-ink dark:text-beige-100">
                  {d.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-ink/70 dark:text-beige-100/70">
                  {d.summary}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-beige-100/60">
                  {d.detail}
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-300">
                  {d.who}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3 text-sm font-medium text-beige-100 hover:bg-emerald-800"
          >
            Discuss a Project <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
