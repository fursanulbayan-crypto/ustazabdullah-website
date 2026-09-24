import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen, Landmark, Languages, GraduationCap,
  BarChart3, Users, Laptop, Sparkles,
  Mic, Compass, Handshake, LineChart, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Areas of expertise spanning Islamic Studies, Arabic Language, educational research, psychometrics, AI in education, leadership and community development.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abubakar, Abdulahi Olayinka",
  jobTitle: ["Chief Imam", "Islamic Studies Educator", "Educational Researcher"],
  knowsAbout: [
    "Islamic Studies", "Qur'anic Education", "Arabic Language", "Nahw", "Sarf",
    "Educational Research", "Psychometrics", "Teacher Training", "AI in Education",
    "Data Analytics", "Leadership", "Community Development", "Educational Technology",
    "Public Speaking",
  ],
};

const pathways = [
  {
    id: "learners",
    audience: "For Learners",
    heading: "Arabic Language & Qur'anic Education",
    description:
      "For students, children, adults and new Muslims wanting to learn Arabic or Qur'an with structure, patience and authentic methodology.",
    domains: [
      {
        icon: Languages,
        title: "Arabic Language",
        detail: "Nahw, Sarf and Arabic Prosody ('Aruḍ) taught from first principles through advanced levels.",
      },
      {
        icon: BookOpen,
        title: "Qur'anic Education",
        detail: "Tajweed and memorisation (Hifz al-Qur'an) with pace suited to the individual student.",
      },
      {
        icon: Landmark,
        title: "Islamic Studies",
        detail: "Aqeedah, Fiqh and Islamic ethics grounded in classical scholarship, for all ages.",
      },
    ],
    cta: { label: "Enrol at Al-Mafaazat", href: "/academy" },
  },
  {
    id: "educators",
    audience: "For Educators",
    heading: "Teacher Training & Educational Technology",
    description:
      "For teachers, school leaders and Islamic educators looking to strengthen their practice, adopt new tools responsibly, and measure student outcomes more rigorously.",
    domains: [
      {
        icon: Users,
        title: "Teacher Training",
        detail: "Capacity-building workshops for Arabic and Islamic Studies educators, grounded in real classroom experience.",
      },
      {
        icon: Laptop,
        title: "Educational Technology",
        detail: "Practical guidance on adopting digital tools, including AI, in ways that serve rather than dilute sound teaching.",
      },
      {
        icon: Sparkles,
        title: "AI in Education",
        detail: "Framework for using AI tools ethically and effectively in Qur'anic and Arabic pedagogy.",
      },
    ],
    cta: { label: "Book a Workshop", href: "/book" },
  },
  {
    id: "institutions",
    audience: "For Institutions & Researchers",
    heading: "Research, Psychometrics & Consulting",
    description:
      "For universities, NGOs, educational bodies and research teams seeking a collaborator in Islamic education research, psychometric instrument design and data analysis.",
    domains: [
      {
        icon: BarChart3,
        title: "Educational Research",
        detail: "Quantitative research design, Likert-scale instruments and SPSS-based analysis applied to Islamic education.",
      },
      {
        icon: GraduationCap,
        title: "Psychometrics",
        detail: "Assessment design, item analysis and measurement of educational and moral development outcomes.",
      },
      {
        icon: LineChart,
        title: "Data Analytics",
        detail: "Statistical analysis and interpretation of educational data, with clear presentation of findings.",
      },
    ],
    cta: { label: "Discuss a Project", href: "/contact" },
  },
  {
    id: "community",
    audience: "For Communities & Organisations",
    heading: "Leadership, Speaking & Community Development",
    description:
      "For mosques, conferences, NGOs and community organisations looking for a speaker, imam or peacebuilding partner whose work is grounded in both Islamic values and evidence-based practice.",
    domains: [
      {
        icon: Mic,
        title: "Public Speaking",
        detail: "Keynotes, khutbahs and panel appearances on Islamic education, leadership, AI and youth development.",
      },
      {
        icon: Compass,
        title: "Leadership",
        detail: "Drawing on mosque leadership, institutional founding and community outreach experience since 2017.",
      },
      {
        icon: Handshake,
        title: "Community Development",
        detail: "Mosque-based youth peacebuilding and SDG 16 outreach, certified and completed in Alimosho LGA.",
      },
    ],
    cta: { label: "Invite Ustaz Abdullah", href: "/book" },
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
          <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">Expertise</p>
          <h1 className="mt-3 font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl">
            What Ustaz Abdullah brings to your context
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-ink/65 dark:text-beige-100/65">
            Fourteen domains of practice, organised by who they are most useful to. Find your pathway
            below.
          </p>
        </div>
      </section>

      {/* PATHWAYS */}
      <div className="mx-auto max-w-5xl px-6 py-20 space-y-20">
        {pathways.map((p, pi) => (
          <section key={p.id} id={p.id}>
            <div className="mb-8">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-1">
                {p.audience}
              </p>
              <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 sm:text-3xl">
                {p.heading}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">
                {p.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 mb-6">
              {p.domains.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className="rounded-2xl border border-ink/10 bg-white p-6 dark:border-beige-100/10 dark:bg-emerald-900/30"
                  >
                    <Icon size={22} className="text-emerald-800 dark:text-gold-300" />
                    <h3 className="mt-4 font-display text-base font-semibold text-ink dark:text-beige-100">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">
                      {d.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            <Link
              href={p.cta.href}
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 underline underline-offset-4 dark:text-gold-300"
            >
              {p.cta.label} <ArrowRight size={14} />
            </Link>

            {pi < pathways.length - 1 && (
              <div className="mt-16 border-b border-ink/10 dark:border-beige-100/10" />
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
