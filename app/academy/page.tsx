import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { site } from "@/lib/data";
import { academyFaqs } from "@/lib/academy";
import { Testimonials } from "@/components/home/Testimonials";
import { ProgramCards } from "@/components/academy/ProgramCards";
import { FeatureGrid } from "@/components/academy/FeatureGrid";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EightPointRose } from "@/components/ui/EightPointRose";

export const metadata: Metadata = {
  title: "Al-Mafaazat Arabic & Islamic Training Centre",
  description:
    "Al-Mafaazat Arabic & Islamic Training Centre in Aboru, Lagos: Arabic Language, Qur'anic Education and Islamic Studies, physical and online, founded and directed by Abubakar, Abdulahi Olayinka.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Al-Mafaazat Arabic & Islamic Training Centre",
  description:
    "Arabic Language, Qur'anic Education and Islamic Studies, physical and online.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "32, Ojikutu Road, Heritage Estate",
    addressLocality: "Aboru, Lagos",
    addressCountry: "NG",
  },
  founder: { "@type": "Person", name: "Abubakar, Abdulahi Olayinka" },
};

const academyStats = [
  { emoji: "🎓", label: "100+ Students Taught" },
  { emoji: "📍", label: "Aboru, Lagos" },
  { emoji: "💻", label: "Physical & Online" },
  { emoji: "📖", label: "Arabic & Islamic Studies" },
];

const galleryPhotos = [
  { src: "/images/teaching-classroom.jpg", alt: "Arabic and Islamic Studies class in session" },
  { src: "/images/markaz-group-indoor.jpg", alt: "Students of Al-Mafaazat Arabic and Islamic Training Centre" },
  { src: "/images/teaching-selfie.jpg", alt: "With students after class" },
];

export default function AcademyPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-16 text-center lg:pb-24 lg:pt-24">
          <Reveal>
            <div className="relative mx-auto mb-8 flex h-32 w-32 items-center justify-center">
              <div className="absolute animate-slowspin text-emerald-800 dark:text-gold-300">
                <EightPointRose size={220} opacity={0.25} />
              </div>
              <div className="relative z-10 h-24 w-24 overflow-hidden rounded-full border border-ink/10 bg-white shadow-lg shadow-emerald-950/10 dark:border-beige-100/10">
                <Image
                  src="/images/academy-logo.jpg"
                  alt="Al-Mafaazat Arabic & Islamic Training Centre logo"
                  width={565}
                  height={600}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-gold-600 dark:text-gold-300">
              Al-Mafaazat Arabic &amp; Islamic Training Centre
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-4 font-display text-[clamp(2.1rem,4.5vw,3.2rem)] font-medium leading-[1.1] tracking-tight text-ink dark:text-beige-100">
              Where Arabic and Islamic scholarship meet structured education.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="arabic mt-6 text-xl text-emerald-800 dark:text-gold-300" dir="rtl">
              شعار: اَلْعِلْمُ يَعْلُوْ وَلاَ يُعْلَى عَلَيْهِ
            </p>
            <p className="mt-1 text-sm italic text-ink/50 dark:text-beige-100/50">
              &ldquo;Knowledge rises above all, and nothing rises above knowledge.&rdquo;
            </p>
          </Reveal>
          <Reveal delay={260}>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ink/65 dark:text-beige-100/65">
              Founded and directed by Abubakar, Abdulahi Olayinka (Ustaz Abdullah), Al-Mafaazat trains
              students of all ages in Arabic Language, Qur&apos;anic Education and Islamic Studies, from our
              centre in Aboru, Lagos, and online.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={site.academyFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-medium text-beige-100 hover:bg-emerald-800"
              >
                Register Now <ExternalLink size={15} />
              </a>
              <a href="#programmes" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm text-ink hover:border-gold-500 dark:border-beige-100/15 dark:text-beige-100">
                View Programmes
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-ink/10 bg-beige-100/50 py-5 dark:border-beige-100/10 dark:bg-emerald-950/40">
        <Reveal>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-6">
            {academyStats.map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs font-medium text-ink/75 dark:border-beige-100/10 dark:bg-emerald-900/40 dark:text-beige-100/75"
              >
                <span aria-hidden="true">{s.emoji}</span> {s.label}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">About the Centre</p>
            <h2 className="font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl">
              A structured home for Arabic and Islamic learning.
            </h2>
            <p className="mt-5 leading-relaxed text-ink/65 dark:text-beige-100/65">
              Al-Mafaazat was founded to give students a genuine grounding in Arabic Language and Islamic
              Studies, taught the way it was taught to us: with method, patience, and continuous
              assessment, not memorisation for its own sake. Every class, physical or online, follows a
              structured curriculum from first principles through advanced study.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
              <Image
                src="/images/markaz-group-outdoor.jpg"
                alt="Students of Al-Mafaazat Arabic and Islamic Training Centre"
                width={1290}
                height={933}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section id="programmes" className="bg-beige-100/60 py-24 dark:bg-emerald-950/40">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading eyebrow="Programmes" title="What we teach" />
          </Reveal>
          <div className="mt-12">
            <ProgramCards />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="Why Al-Mafaazat" title="Built for real progress, not just attendance" />
        </Reveal>
        <div className="mt-12">
          <FeatureGrid />
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-3">
          {galleryPhotos.map((p, i) => (
            <Reveal key={p.src} delay={i * 70}>
              <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
                <Image src={p.src} alt={p.alt} width={1290} height={1290} className="h-56 w-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Common questions" />
        </Reveal>
        <div className="mt-12">
          <FAQAccordion faqs={academyFaqs} idPrefix="academy-faq" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="rounded-3xl bg-emerald-900 p-10 text-center lg:p-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-300">Enrolment Open</p>
            <h2 className="font-display text-2xl font-medium text-beige-100 sm:text-3xl">
              Begin your Arabic and Islamic education.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-beige-100/70">
              Register your interest and our team will follow up with current class schedules and fees.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={site.academyFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-beige-100 px-7 py-3.5 text-sm font-medium text-emerald-900 hover:bg-white"
              >
                Register Now <ArrowRight size={15} />
              </a>
              <a
                href={`mailto:${site.mosqueEmail}`}
                className="inline-flex items-center gap-2 rounded-full border border-beige-100/30 px-7 py-3.5 text-sm text-beige-100"
              >
                <Mail size={15} /> Email the Centre
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
