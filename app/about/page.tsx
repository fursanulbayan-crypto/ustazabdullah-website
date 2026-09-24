import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Islamic scholar, educator, researcher and technologist. Chief Imam and founder of Al-Mafaazat Training Centre, Lagos. Building at the intersection of classical scholarship and modern innovation.",
};

const milestones = [
  { year: "2017", detail: "Began teaching Arabic Language and Islamic Studies at Markaz Sahadat Alimosho, Lagos." },
  { year: "2019", detail: "Founded Al-Mafaazat Arabic and Islamic Training Centre and assumed role of Chief Imam, Al-Mafaazat Central Mosque, Aboru, Lagos." },
  { year: "2021–2025", detail: "Bachelor of Arts in Education and Islamic Studies, Al-Hikmah University, Ilorin. First Class Honours." },
  { year: "2022", detail: "Launched Al-Mafaazat Online Academy, now serving learners across multiple countries." },
  { year: "2025", detail: "Graduated as Best Student, Institute of Education; Best Student, Department of Arts and Social Sciences Education; Top One Percent Student of the Year, Al-Hikmah University. TRCN certified." },
  { year: "2026", detail: "Certified SDG 16 Advocate, Cohort 8 (Certificate of Excellence, SDSN). Certifications in AI ethics, data analytics and digital skills from DataCamp, Accenture, UNICEF Agora, FutureLearn and the ESG Institute." },
];

const stats = [
  { value: "7+", label: "Years Teaching" },
  { value: "6+", label: "Years Leading the Mosque" },
  { value: "100+", label: "Students Taught" },
  { value: "100+", label: "Lectures Delivered" },
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
          An Islamic scholar, educator, researcher and technologist building at the intersection of
          classical scholarship and modern innovation. Dedicated to developing structured learning
          systems, empowering teachers through evidence-based practice, and serving communities with
          knowledge that is both authentic and practically useful.
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

      {/* SECTION 1: SCHOLARSHIP AND LEADERSHIP */}
      <div className="mb-16 pb-16 border-b border-ink/10 dark:border-beige-100/10">
        <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
          Scholarship & Leadership
        </p>
        <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 mb-5">
          Where the mosque meets the classroom
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-ink/70 dark:text-beige-100/70">
          <p>
            Ustaz Abdullah leads as Chief Imam of Al-Mafaazat Central Mosque in Aboru, Lagos, a
            CAC-registered institution where he provides spiritual guidance through weekly khutbahs and
            community counsel. In the classroom, he is a specialist in Arabic Language (Nahw, Sarf and
            Arabic Prosody) and Qur'anic Education. Since founding Al-Mafaazat Arabic and Islamic Training
            Centre in 2019, he has trained over 100 students across physical and online settings, with the
            Al-Mafaazat Online Academy now extending that reach to learners across multiple countries.
          </p>
          <p>
            He holds a First Class Bachelor of Arts in Education and Islamic Studies from Al-Hikmah
            University, Ilorin, where he graduated as Best Student of the Institute of Education, Best
            Student of the Department of Arts and Social Sciences Education, and recipient of the Top One
            Percent Student of the Year award. He is a certified professional teacher registered with the
            Teachers Registration Council of Nigeria (TRCN).
          </p>
        </div>
      </div>

      {/* SECTION 2: RESEARCH AND MEASUREMENT */}
      <div className="mb-16 pb-16 border-b border-ink/10 dark:border-beige-100/10">
        <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
          Research & Measurement
        </p>
        <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 mb-5">
          Rigour applied to Islamic education
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-ink/70 dark:text-beige-100/70">
          <p>
            His research sits at the boundary of Islamic education and psychometrics. Using quantitative
            methods, Likert-scale instruments and SPSS-based analysis, he investigates how structured
            Qur'anic memorisation shapes academic performance, how Islamic education influences moral
            development, and how rigorous measurement can make teaching more precise and more accountable.
          </p>
          <p>
            He is building toward postgraduate study in Educational Measurement and Evaluation, bringing
            the same standards that govern good research into the classrooms and institutions he serves.
          </p>
        </div>
      </div>

      {/* SECTION 3: TECHNOLOGY AND INNOVATION */}
      <div className="mb-16 pb-16 border-b border-ink/10 dark:border-beige-100/10">
        <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
          Technology & Innovation
        </p>
        <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 mb-5">
          Building tools that serve learners
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-ink/70 dark:text-beige-100/70">
          <p>
            He believes the right tools, used with scholarly discipline, make better educators and better
            learners. He builds educational software for Arabic and English learning, applies AI tools
            practically in his teaching and institutional work, and holds certifications in AI ethics, data
            analytics, SQL and digital skills from DataCamp, Accenture, UNICEF Agora, FutureLearn and the
            ESG Institute. He maintains both his personal website and the Al-Mafaazat Online Academy on
            modern web infrastructure.
          </p>
          <p>
            As a certified SDG 16 Advocate (Cohort 8, Certificate of Excellence, SDSN), he leads youth
            peacebuilding and community outreach in Alimosho LGA, demonstrating that authentic Islamic
            values and sustainable development goals reinforce rather than contradict each other.
          </p>
        </div>
        <Link
          href="/tools"
          className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-800 underline underline-offset-4 dark:text-gold-300"
        >
          Explore educational tools built by Ustaz Abdullah <ArrowRight size={14} />
        </Link>
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
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-300">An Invitation</p>
        <h2 className="font-display text-2xl font-medium text-beige-100 sm:text-3xl">
          There is a conversation worth having.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-beige-100/70">
          Whether you are a researcher seeking a collaborator at the edge of Islamic education and
          technology, an institution looking for a speaker on leadership, education or AI, or a student
          ready to learn Arabic or Qur'an, based in Lagos and working globally, Ustaz Abdullah is actively
          building what comes next in Islamic education.
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
