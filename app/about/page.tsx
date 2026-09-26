import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Islamic scholar, educator, researcher and learning professional. Chief Imam and founder of Al-Mafaazat Training Centre, Lagos, working at the intersection of education, instructional design, assessment and technology.",
};

const milestones = [
  { year: "2017", detail: "Began teaching Arabic Language and Islamic Studies at Markaz Sahadat Alimosho, Lagos." },
  { year: "2019", detail: "Founded Al-Mafaazat Arabic and Islamic Training Centre and assumed role of Chief Imam, Al-Mafaazat Central Mosque, Aboru, Lagos." },
  { year: "2021–2025", detail: "Bachelor of Arts in Education and Islamic Studies, Al-Hikmah University, Ilorin. First Class Honours. Best Graduating Student, Institute of Education." },
  { year: "2022", detail: "Launched Al-Mafaazat Online Academy, now serving over 50 learners across multiple countries." },
  { year: "2025", detail: "TRCN certified as a professional teacher." },
  { year: "2026", detail: "Certified SDGs Advocate, Cohort 8 (Certificate of Excellence, SDSN). Certifications in AI ethics, data analytics, SQL and digital skills. Began coursework in instructional design and e-learning development." },
];

const stats = [
  { value: "7+", label: "Years Teaching" },
  { value: "6+", label: "Years Leading the Mosque" },
  { value: "100+", label: "Students Taught" },
  { value: "50+", label: "Online Learners" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">

      {/* OPENING */}
      <div className="mb-16">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">About</p>
        <h1 className="font-display text-4xl font-medium text-ink dark:text-beige-100 sm:text-5xl">
          Abubakar, Abdulahi Olayinka
        </h1>
        <p className="mt-2 font-mono text-sm text-ink/50 dark:text-beige-100/50">Ustaz Abdullah</p>
        <p className="mt-8 text-lg leading-relaxed text-ink/75 dark:text-beige-100/75 max-w-2xl">
          An Islamic scholar, educator, researcher and learning professional working at the
          intersection of education, instructional design, assessment and technology. His work
          centres on a simple question: how can learning be designed better, delivered more
          effectively, and measured more meaningfully?
        </p>
        <p className="mt-4 leading-relaxed text-ink/65 dark:text-beige-100/65 max-w-2xl">
          From traditional classrooms and Madrasahs to online learning environments, he designs
          learning experiences, trains educators, develops assessment systems, and builds practical
          digital tools that extend learning beyond the classroom.
        </p>
      </div>

      {/* PHOTO + STATS */}
      <div className="mb-20 grid gap-8 sm:grid-cols-2 items-start">
        <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
          <Image
            src="/images/portrait-hero.jpg"
            alt="Abubakar, Abdulahi Olayinka — Ustaz Abdullah"
            width={1012}
            height={1410}
            className="w-full object-cover"
          />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-ink/10 p-5 dark:border-beige-100/10">
                <p className="font-mono text-2xl font-medium text-emerald-800 dark:text-gold-300">{s.value}</p>
                <p className="mt-1 text-xs text-ink/55 dark:text-beige-100/55">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
            <Image
              src="/images/khutbah-podium-1.jpg"
              alt="Ustaz Abdullah delivering a khutbah at Al-Mafaazat Central Mosque"
              width={1200}
              height={1474}
              className="w-full object-cover max-h-56"
            />
          </div>
        </div>
      </div>

      {/* SECTION 1: SCHOLARSHIP AND EDUCATIONAL LEADERSHIP */}
      <div className="mb-16 pb-16 border-b border-ink/10 dark:border-beige-100/10">
        <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
          Scholarship &amp; Educational Leadership
        </p>
        <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 mb-5">
          Where the mosque meets the classroom
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-ink/70 dark:text-beige-100/70">
          <p>
            Ustaz Abdullah serves as Chief Imam of Al-Mafaazat Central Mosque, Aboru, Lagos, where he
            provides spiritual guidance through weekly khutbahs, counselling and community
            engagement. He is also the Founder and Director of Al-Mafaazat Arabic and Islamic
            Training Centre, established in 2019. Through its physical and online programmes, he has
            taught Arabic, Qur&apos;anic and Islamic education to learners across different age groups
            and learning environments.
          </p>
          <p>
            His teaching specialisations include Arabic Language, Nahw, Sarf, Arabic Prosody
            (&apos;Aruḍ), Qur&apos;an and Islamic Studies. His online teaching experience has also
            exposed him to digital classrooms, remote instruction and technology-supported learning.
          </p>
          <p>
            He holds a First Class Bachelor of Arts in Education and Islamic Studies from Al-Hikmah
            University, Ilorin, where he graduated as Best Graduating Student of the Institute of
            Education. He is also a professionally certified teacher registered with the Teachers
            Registration Council of Nigeria (TRCN).
          </p>
        </div>
      </div>

      {/* SECTION 2: INSTRUCTIONAL DESIGN, LEARNING AND ASSESSMENT */}
      <div className="mb-16 pb-16 border-b border-ink/10 dark:border-beige-100/10">
        <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
          Instructional Design, Learning &amp; Assessment
        </p>
        <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 mb-5">
          Evidence as the point of assessment, not its ending
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-ink/70 dark:text-beige-100/70">
          <p>
            His professional interests are increasingly focused on instructional design, e-learning,
            learning management systems, training and development, educational assessment and
            learning analytics. He is particularly interested in translating sound educational
            principles into practical learning experiences, whether in schools, Madrasahs, NGOs,
            professional training programmes or digital learning environments.
          </p>
          <p>
            His background in assessment and educational research gives this work an additional
            dimension. He has designed research instruments, conducted quantitative educational
            research, and used SPSS, statistical analysis and data visualisation to investigate
            educational outcomes. Rather than treating assessment as simply the final stage of
            teaching, he sees it as a source of evidence for improving learning.
          </p>
        </div>
      </div>

      {/* SECTION 3: RESEARCH AND EVIDENCE */}
      <div className="mb-16 pb-16 border-b border-ink/10 dark:border-beige-100/10">
        <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
          Research &amp; Evidence
        </p>
        <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 mb-5">
          Islamic education meets educational measurement
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-ink/70 dark:text-beige-100/70">
          <p>
            His research interests sit at the intersection of Islamic education, educational
            measurement and learner outcomes. His undergraduate research examined the relationship
            between Qur&apos;anic memorisation and academic performance among Muslim secondary school
            students, using quantitative methods, structured instruments and statistical analysis.
          </p>
          <p>
            He is continuing to develop expertise in educational measurement and evaluation,
            assessment design, reliability, data analysis and evidence-informed educational practice,
            with the long-term goal of contributing to better assessment and learning systems.
          </p>
        </div>
      </div>

      {/* SECTION 4: TECHNOLOGY AND INNOVATION */}
      <div className="mb-16 pb-16 border-b border-ink/10 dark:border-beige-100/10">
        <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
          Technology &amp; Innovation
        </p>
        <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 mb-5">
          Building practical solutions, not just discussing them
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-ink/70 dark:text-beige-100/70">
          <p>
            His projects include Qalam, a typing trainer for Arabic and English learners, and an
            interactive Nahw trainer based on Al-Tatbiq Al-Nahwi. He has also worked on digital
            learning initiatives that have taken traditional Arabic and Islamic education into
            structured online environments.
          </p>
          <p>
            His professional development includes training and certifications in data analytics,
            SQL, AI ethics, digital skills, educational technology and sustainable development. He is
            particularly interested in the responsible use of AI and data to improve teaching,
            assessment and learning. As an SDSN Nigeria SDGs Advocate, Cohort 8, he has also applied
            his learning through community-focused work, including youth peacebuilding and
            values-based outreach.
          </p>
        </div>
        <Link
          href="/tools"
          className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-800 underline underline-offset-4 dark:text-gold-300"
        >
          Explore tools built by Ustaz Abdullah <ArrowRight size={14} />
        </Link>
      </div>

      {/* WHAT HE IS BUILDING TOWARDS */}
      <div className="mb-16 pb-16 border-b border-ink/10 dark:border-beige-100/10">
        <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
          What Comes Next
        </p>
        <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 mb-5">
          Instructional design, digital learning, assessment, data and technology
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-ink/70 dark:text-beige-100/70">
          <p>
            The next stage of his work brings these strands together. He is building the expertise
            to design effective learning experiences, support educators, develop digital training,
            work with learning management systems, and use evidence to understand whether learning
            is actually taking place.
          </p>
          <p>
            His work spans Islamic education and the wider learning ecosystem, with an interest in
            opportunities across education, e-learning, learning and development, training, NGOs and
            digital learning.
          </p>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="mb-16 pb-16 border-b border-ink/10 dark:border-beige-100/10">
        <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-8">
          Journey
        </p>
        <div className="space-y-6">
          {milestones.map((m, i) => (
            <div key={m.year} className={`flex gap-5 pb-6 ${i < milestones.length - 1 ? "border-b border-ink/10 dark:border-beige-100/10" : ""}`}>
              <span className="w-28 shrink-0 font-mono text-xs text-gold-600 dark:text-gold-300 pt-0.5">{m.year}</span>
              <p className="text-sm leading-relaxed text-ink/70 dark:text-beige-100/70">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* INVITATION */}
      <div className="rounded-3xl bg-emerald-900 p-10 text-center lg:p-14">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-300">Let&apos;s Work Together</p>
        <h2 className="font-display text-2xl font-medium text-beige-100 sm:text-3xl">
          There is a conversation worth having.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-beige-100/70">
          Whether you are looking for an instructional designer, trainer, education researcher,
          learning professional, speaker or collaborator, there may be an opportunity to work
          together — for teacher training, digital learning projects, educational research,
          assessment initiatives, Islamic education programmes, community development or speaking
          engagements.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-beige-100 px-7 py-3.5 text-sm font-medium text-emerald-900 hover:bg-white"
          >
            Get in Touch <ArrowRight size={15} />
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full border border-beige-100/30 px-7 py-3.5 text-sm text-beige-100"
          >
            Book Me to Speak
          </Link>
        </div>
      </div>

    </div>
  );
}
