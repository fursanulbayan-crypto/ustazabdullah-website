import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";
import { site } from "@/lib/data";
import { faqCategories, faqSidebarLinks } from "@/lib/faq";
import { FAQSearch } from "@/components/faq/FAQSearch";
import { Reveal } from "@/components/ui/Reveal";

const title = "Frequently Asked Questions | Ustaz Abdullah";
const description =
  "Find answers to common questions about Qur'an and Arabic classes, speaking engagements, research consultancy, mentoring, and academic services offered by Ustaz Abdullah.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${site.url}/faq` },
  openGraph: { title, description, type: "website", url: `${site.url}/faq` },
  twitter: { card: "summary_large_image", title, description },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: [item.a, ...(item.list ?? []), item.note].filter(Boolean).join(" "),
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="border-b border-ink/10 bg-beige-100/50 dark:border-beige-100/10 dark:bg-emerald-950/40">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center lg:py-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">FAQs</p>
            <h1 className="mt-3 font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl">
              Frequently Asked Questions
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 leading-relaxed text-ink/65 dark:text-beige-100/65">
              Whether you&apos;re interested in studying at Al-Mafaazat Arabic &amp; Islamic Training Centre,
              inviting me to speak at your event, seeking academic guidance, or simply learning more about
              my work, you&apos;ll find answers to the questions I am most frequently asked.
            </p>
            <p className="mt-3 text-sm text-ink/55 dark:text-beige-100/55">
              If your question is not answered here, please feel free to get in touch.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3 text-sm font-medium text-beige-100 hover:bg-emerald-800">
                Contact Me
              </Link>
              <Link href="/book" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm text-ink hover:border-gold-500 dark:border-beige-100/15 dark:text-beige-100">
                Invite Ustaz Abdullah
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEARCH + CATEGORIES + SIDEBAR */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_260px]">
          <div className="min-w-0">
            <FAQSearch />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-ink/10 p-6 dark:border-beige-100/10">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-300">
                Quick Links
              </p>
              <ul className="mt-4 space-y-3">
                {faqSidebarLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-ink/70 hover:text-emerald-800 dark:text-beige-100/70 dark:hover:text-gold-300">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="rounded-3xl bg-emerald-900 p-10 text-center lg:p-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-300">Still Have a Question?</p>
            <h2 className="font-display text-2xl font-medium text-beige-100 sm:text-3xl">
              I&apos;d be delighted to hear from you.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-beige-100/70">
              Whether your enquiry is about learning, speaking engagements, research, consultancy, or
              collaboration, please get in touch and I&apos;ll respond as soon as possible.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded-full bg-beige-100 px-7 py-3.5 text-sm font-medium text-emerald-900 hover:bg-white">
                <Mail size={15} /> Contact Me
              </a>
              <a
                href={site.bookingFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-beige-100/30 px-7 py-3.5 text-sm text-beige-100"
              >
                Book an Appointment <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
