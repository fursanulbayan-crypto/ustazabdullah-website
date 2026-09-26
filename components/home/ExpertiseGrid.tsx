import Link from "next/link";
import {
  Landmark, Laptop, BarChart3, GraduationCap, Sparkles, LineChart, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const domains = [
  { icon: Landmark, title: "Islamic Education", desc: "Arabic Language, Qur'anic Education and Islamic Studies." },
  { icon: Laptop, title: "Instructional Design & E-learning", desc: "Designing learning experiences that work." },
  { icon: BarChart3, title: "Assessment & Educational Research", desc: "Evidence-based measurement of learning outcomes." },
  { icon: GraduationCap, title: "Learning & Development", desc: "Teacher training grounded in real classrooms." },
  { icon: Sparkles, title: "Educational Technology & AI", desc: "Practical tools, applied responsibly." },
  { icon: LineChart, title: "Data & Learning Analytics", desc: "Using data to understand real learning impact." },
];

export function ExpertiseGrid() {
  return (
    <section className="bg-beige-100/60 py-24 dark:bg-emerald-950/40" id="expertise">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <SectionHeading eyebrow="Expertise" title="Six areas, one practice." />
            <Link href="/expertise" className="inline-flex items-center gap-1.5 text-sm text-emerald-800 dark:text-gold-300">
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((e, i) => (
            <Reveal key={e.title} delay={i * 60}>
              <Link
                href="/expertise"
                className="group block h-full rounded-2xl border border-ink/10 bg-white p-6 transition-transform hover:-translate-y-1 dark:border-beige-100/10 dark:bg-emerald-900/40"
              >
                <e.icon size={22} className="text-emerald-800 dark:text-gold-300" />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-beige-100">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">{e.desc}</p>
                <div className="mt-4 h-px w-8 bg-gold-500" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
