import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, MapPin, Calendar, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "SDG Projects",
  description:
    "Certified SDGs Advocate Programme Cohort 8. Two community projects: mosque-based youth peacebuilding in Aboru and the Clean Up Lagos environmental exercise in Ipaja, Alimosho LGA, Lagos.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "SDG Projects — Abubakar, Abdulahi Olayinka",
  itemListElement: [
    {
      "@type": "Event",
      position: 1,
      name: "Building Values, Building Peace — SDG 16 Youth Outreach",
      description:
        "Three-day mosque-based youth peacebuilding and community outreach programme in Aboru, Alimosho LGA, Lagos.",
      location: {
        "@type": "Place",
        name: "Al-Mafaazat Central Mosque",
        address: { "@type": "PostalAddress", addressLocality: "Aboru, Alimosho LGA", addressRegion: "Lagos", addressCountry: "NG" },
      },
    },
    {
      "@type": "Event",
      position: 2,
      name: "Clean Up Lagos — Environmental Sanitation Exercise",
      startDate: "2026-07-11",
      description:
        "Community environmental clean-up exercise at Church Bus-stop, Ipaja, Alimosho LGA, as part of the SDGs Advocate Programme Cohort 8.",
      location: {
        "@type": "Place",
        name: "Church Bus-stop, Ipaja",
        address: { "@type": "PostalAddress", addressLocality: "Ipaja, Alimosho LGA", addressRegion: "Lagos", addressCountry: "NG" },
      },
    },
  ],
};

const peacebuildingOutcomes = [
  "Community engagement sessions on peace, ethics and good values delivered across all three days",
  "Structured peer interviews and participant testimonials collected",
  "Youth volunteers trained to lead follow-up peer mediation activities",
  "Collective responsibility framework introduced for ongoing community mentorship",
  "SDG 16 messaging contextualised for a Nigerian mosque and community setting",
];

const cleanupOutcomes = [
  "Community environmental clean-up exercise conducted at Church Bus-stop, Ipaja",
  "Multi-advocate team coordinated under the Alimosho LGA SDGs Advocate Programme",
  "Public spaces cleared and environmental awareness raised among residents",
  "Demonstrated practical link between Islamic values and environmental stewardship",
];

export default function SDGProjectsPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <section className="border-b border-ink/10 bg-beige-100/50 dark:border-beige-100/10 dark:bg-emerald-950/40">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
            SDG Projects
          </p>
          <h1 className="font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl max-w-2xl">
            Community impact through the SDGs Advocate Programme
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-ink/65 dark:text-beige-100/65">
            As a certified SDGs Advocate (Cohort 8, SDSN Nigeria), Ustaz Abdullah led two distinct
            community projects in Alimosho LGA, Lagos: a mosque-based youth peacebuilding programme
            and an environmental clean-up exercise.
          </p>
        </div>
      </section>

      {/* CREDENTIAL BANNER */}
      <section className="bg-emerald-900 py-8">
        <div className="mx-auto max-w-5xl px-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gold-300 mb-1">
              Verified Credential
            </p>
            <p className="font-display text-lg font-medium text-beige-100">
              Certificate of Excellence — SDGs Advocate Programme Cohort 8
            </p>
            <p className="text-sm text-beige-100/65 mt-1">
              Issued 31 July 2026 · SDSN Nigeria & SDSN Youth · Advocate ID: C8/M/LAG/393
            </p>
          </div>
          <Award size={32} className="text-gold-300 shrink-0" />
        </div>
      </section>

      {/* CERTIFICATE */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-4">
          Certificate of Excellence
        </p>
        <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-lg shadow-emerald-950/5 dark:border-beige-100/10">
          <Image
            src="/images/sdg-certificate.jpg"
            alt="Certificate of Excellence awarded to Abubakar, Abdulahi Olayinka by SDSN Nigeria and SDSN Youth for completing the SDGs Advocate Programme Cohort 8, issued 31 July 2026"
            width={1290}
            height={999}
            className="w-full object-cover"
          />
        </div>
        <p className="mt-3 text-xs text-ink/45 dark:text-beige-100/45">
          Signed by Professor Mrs. Ngozi Ifeoma Odiaka, Network Director, SDSN Nigeria, and
          Oluwatoyin Odulana, Network Coordinator, SDSN Youth Nigeria.
        </p>
      </section>

      {/* PROJECT 1: PEACEBUILDING */}
      <section className="bg-beige-100/60 py-16 dark:bg-emerald-950/40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-900/10 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-400">
            Project 1 · SDG 16
          </div>
          <h2 className="mt-3 font-display text-2xl font-medium text-ink dark:text-beige-100 sm:text-3xl">
            Building Values, Building Peace
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">
            A three-day mosque-based youth peacebuilding and community outreach programme at
            Al-Mafaazat Central Mosque, Aboru, Alimosho LGA, focusing on SDG 16: Peace, Justice and
            Strong Institutions. The programme engaged 40 to 60 participants across sessions on
            peace, ethics, conflict resolution and collective responsibility.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            {[
              { icon: Users, label: "40–60 participants reached" },
              { icon: Calendar, label: "3-day programme" },
              { icon: MapPin, label: "Aboru, Alimosho LGA" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-ink/65 dark:text-beige-100/65">
                <s.icon size={15} className="text-emerald-800 dark:text-gold-300 shrink-0" />
                {s.label}
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
            <Image
              src="/images/sdg-campaign-banner.jpg"
              alt="SDG 16 Building Values, Building Peace — mosque and community-based youth outreach in Aboru, Alimosho LGA"
              width={1672}
              height={941}
              className="w-full object-cover"
            />
          </div>

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-4">
              Outcomes
            </p>
            <ul className="space-y-3">
              {peacebuildingOutcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm text-ink/70 dark:text-beige-100/70">
                  <CheckCircle size={15} className="text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECT 2: CLEAN UP LAGOS */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-gold-500/10 px-3 py-1 text-xs font-medium text-gold-600 dark:text-gold-300">
            Project 2 · SDGs 11 & 13
          </div>
          <h2 className="mt-3 font-display text-2xl font-medium text-ink dark:text-beige-100 sm:text-3xl">
            Clean Up Lagos — Environmental Sanitation Exercise
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">
            A community environmental clean-up exercise held on 11th July 2026 at Church Bus-stop,
            Ipaja, Alimosho LGA, presented by Alimosho LGA under the SDGs Advocate Programme Cohort
            8. Ustaz Abdullah participated as a certified advocate, joining a team of fellow Cohort 8
            members in a practical demonstration that Islamic values and sustainable development are
            complementary, not separate.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            {[
              { icon: Calendar, label: "11 July 2026" },
              { icon: MapPin, label: "Church Bus-stop, Ipaja, Alimosho LGA" },
              { icon: Users, label: "Multi-advocate team, Cohort 8" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2 text-ink/65 dark:text-beige-100/65">
                <s.icon size={15} className="text-emerald-800 dark:text-gold-300 shrink-0" />
                {s.label}
              </div>
            ))}
          </div>

          {/* Photo grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
              <Image
                src="/images/sdg-cleanup-group.jpg"
                alt="Cohort 8 SDGs Advocate Programme team at the Clean Up Lagos exercise, Church Bus-stop, Ipaja, 11 July 2026"
                width={1400}
                height={1050}
                className="h-56 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
              <Image
                src="/images/sdg-cleanup-solo2.jpg"
                alt="Ustaz Abdullah at the Clean Up Lagos exercise wearing SDGs Advocate Programme Cohort 8 t-shirt"
                width={1200}
                height={1599}
                className="h-56 w-full object-cover object-top"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
              <Image
                src="/images/sdg-cleanup-solo1.jpg"
                alt="Ustaz Abdullah at the Clean Up Lagos exercise, Alimosho LGA"
                width={1200}
                height={1599}
                className="h-56 w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-4">
              Outcomes
            </p>
            <ul className="space-y-3">
              {cleanupOutcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm text-ink/70 dark:text-beige-100/70">
                  <CheckCircle size={15} className="text-gold-500 mt-0.5 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-beige-100/60 dark:bg-emerald-950/40 py-14">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="font-display text-xl font-medium text-ink dark:text-beige-100 leading-relaxed">
            &ldquo;Let us mentor our children, support good character, and strengthen our community
            values.&rdquo;
          </p>
          <p className="mt-4 text-sm text-ink/50 dark:text-beige-100/50">
            Ustaz Abdullah · SDG 16 Outreach, Aboru, Alimosho LGA
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl bg-emerald-900 p-10 text-center lg:p-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-300">Collaborate</p>
          <h2 className="font-display text-2xl font-medium text-beige-100 sm:text-3xl">
            Bring this work to your community.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-beige-100/70">
            Ustaz Abdullah is open to partnerships with NGOs, mosques, schools and community groups
            working on youth development, peacebuilding and environmental sustainability in Nigeria.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-beige-100 px-7 py-3.5 text-sm font-medium text-emerald-900 hover:bg-white"
          >
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
