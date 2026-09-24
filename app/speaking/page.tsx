import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Download, Play } from "lucide-react";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Invite Ustaz Abdullah to speak on Islamic education, leadership, AI in education, youth development and community values. Over 100 lectures delivered across Nigeria.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abubakar, Abdulahi Olayinka",
  jobTitle: "Public Speaker and Chief Imam",
  knowsAbout: [
    "Islamic Education", "Leadership", "AI in Education", "Teacher Development",
    "Youth Development", "Parenting", "Community Peacebuilding",
  ],
  url: site.url,
};

const topics = [
  {
    title: "Islamic Education",
    detail: "The state of Islamic education in Nigeria, what rigorous teaching looks like, and how institutions can do better.",
  },
  {
    title: "Leadership",
    detail: "Values-based leadership grounded in Islamic principles, drawing on mosque leadership and institutional founding.",
  },
  {
    title: "AI in Education",
    detail: "Where artificial intelligence genuinely helps teachers and learners, and where it should not be trusted.",
  },
  {
    title: "Teacher Development",
    detail: "Building better teachers through structured training, honest feedback and practical tools.",
  },
  {
    title: "Youth Development",
    detail: "Mentoring the next generation through values, accountability and community structures that actually work.",
  },
  {
    title: "Parenting",
    detail: "Islamic guidance for parents on raising children with strong character in a distracted world.",
  },
];

const videos = [
  {
    id: "A3QeTQ3dY6Q",
    platform: "youtube",
    title: "Friday Khutbah",
    description: "A khutbah delivered at Al-Mafaazat Central Mosque, Aboru, Lagos.",
    type: "Khutbah",
  },
  {
    id: "fsLN3XGtbW0",
    platform: "youtube-short",
    title: "The Love of Prophet Muhammad ﷺ",
    description: "A short reflection on love for the Prophet, peace be upon him.",
    type: "Short Talk",
  },
  {
    id: "ZSqGXwjX5",
    platform: "tiktok",
    title: "10 Mistakes That Cause Unanswered Prayers",
    description: "A widely shared talk on common errors in du'a and how to correct them.",
    type: "Talk",
    url: "https://vt.tiktok.com/ZSqGXwjX5/",
  },
];

const kitItems = [
  "Professional biography (short and long versions)",
  "High-resolution headshots",
  "Speaking topics with descriptions",
  "Past event references available on request",
  "Technical requirements for in-person and online engagements",
];

export default function SpeakingPage() {
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
            Speaking
          </p>
          <h1 className="font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl max-w-2xl">
            Invite Ustaz Abdullah to speak.
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-ink/65 dark:text-beige-100/65">
            Over 100 lectures delivered across mosques, schools, conferences and community platforms
            in Nigeria, in English and Arabic, in person and online.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={site.bookingFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3 text-sm font-medium text-beige-100 hover:bg-emerald-800"
            >
              Request a Booking <ExternalLink size={14} />
            </a>
            <Link
              href="#speaker-kit"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm text-ink hover:border-gold-500 dark:border-beige-100/15 dark:text-beige-100"
            >
              Speaker Kit
            </Link>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
          Topics
        </p>
        <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 sm:text-3xl mb-10">
          What Ustaz Abdullah speaks on
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-ink/10 bg-white p-6 dark:border-beige-100/10 dark:bg-emerald-900/30"
            >
              <h3 className="font-display text-base font-semibold text-ink dark:text-beige-100">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO PROOF */}
      <section className="bg-beige-100/60 py-20 dark:bg-emerald-950/40">
        <div className="mx-auto max-w-5xl px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
            Watch
          </p>
          <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 sm:text-3xl mb-10">
            See Ustaz Abdullah in action
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {videos.map((v) => (
              <div key={v.id} className="rounded-2xl border border-ink/10 bg-white overflow-hidden dark:border-beige-100/10 dark:bg-emerald-900/30">
                {v.platform === "youtube" && (
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                    />
                  </div>
                )}
                {v.platform === "youtube-short" && (
                  <div className="relative" style={{ paddingBottom: "177.78%" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                    />
                  </div>
                )}
                {v.platform === "tiktok" && (
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex aspect-video items-center justify-center bg-ink/5 dark:bg-beige-100/5 group"
                  >
                    <div className="text-center p-6">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-900 text-beige-100 group-hover:bg-emerald-800">
                        <Play size={20} />
                      </div>
                      <p className="text-xs font-medium text-ink/60 dark:text-beige-100/60">Watch on TikTok</p>
                    </div>
                  </a>
                )}
                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-1">{v.type}</p>
                  <h3 className="font-display text-base font-semibold text-ink dark:text-beige-100">{v.title}</h3>
                  <p className="mt-1 text-sm text-ink/60 dark:text-beige-100/60">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKER KIT */}
      <section id="speaker-kit" className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-3">
              Speaker Kit
            </p>
            <h2 className="font-display text-2xl font-medium text-ink dark:text-beige-100 sm:text-3xl mb-5">
              Everything you need to brief your team.
            </h2>
            <p className="text-sm leading-relaxed text-ink/65 dark:text-beige-100/65 mb-6">
              The speaker kit contains all materials needed to promote and prepare for Ustaz
              Abdullah&apos;s appearance at your event. Request it via email and it will be sent
              within two working days.
            </p>
            <ul className="space-y-3 mb-8">
              {kitItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink/70 dark:text-beige-100/70">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.email}?subject=Speaker Kit Request`}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3 text-sm font-medium text-beige-100 hover:bg-emerald-800"
            >
              <Download size={14} /> Request Speaker Kit
            </a>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-beige-100/50 p-8 dark:border-beige-100/10 dark:bg-emerald-900/30">
            <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300 mb-4">
              Quick facts
            </p>
            <div className="space-y-4 text-sm">
              {[
                ["Based", "Lagos, Nigeria"],
                ["Languages", "English, Arabic"],
                ["Format", "In person or online"],
                ["Notice required", "2 to 4 weeks minimum"],
                ["Audiences", "Mosques, schools, universities, NGOs, conferences"],
                ["Contact", site.email],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-3 border-b border-ink/10 pb-4 dark:border-beige-100/10 last:border-0 last:pb-0">
                  <span className="w-32 shrink-0 font-medium text-ink dark:text-beige-100">{label}</span>
                  <span className="text-ink/65 dark:text-beige-100/65">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl bg-emerald-900 p-10 text-center lg:p-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-300">Ready to Book</p>
          <h2 className="font-display text-2xl font-medium text-beige-100 sm:text-3xl">
            Let&apos;s plan your event.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-beige-100/70">
            Fill in the booking form with your event details and expect a response within two working days.
          </p>
          <a
            href={site.bookingFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-beige-100 px-7 py-3.5 text-sm font-medium text-emerald-900 hover:bg-white"
          >
            Request a Booking <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}
