import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { site } from "@/lib/data";
import { bookingFaqs } from "@/lib/booking";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceCards } from "@/components/book/ServiceCards";
import { BookingTimeline } from "@/components/book/BookingTimeline";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EightPointRose } from "@/components/ui/EightPointRose";

export const metadata: Metadata = {
  title: "Book Abubakar, Abdulahi Olayinka",
  description:
    "Book Ustaz Abdullah for keynotes, khutbahs, teacher training, youth programmes, media appearances and institutional consulting. For conference organisers, mosques, NGOs, schools, universities and media organisations.",
};

export default function BookPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-5 lg:items-center lg:pb-24 lg:pt-24">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-gold-600 dark:text-gold-300">
                Speaking &amp; Event Bookings
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-[clamp(2.1rem,4.5vw,3.2rem)] font-medium leading-[1.1] tracking-tight text-ink dark:text-beige-100">
                Bring Ustaz Abdullah to your{" "}
                <span className="italic text-emerald-800 dark:text-emerald-600">event, mosque or institution.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl leading-relaxed text-ink/65 dark:text-beige-100/65">
                Over 100 lectures delivered for conference organisers, educational institutions, mosques,
                NGOs, schools, universities and media organisations, in English and Arabic, in person and
                online.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={site.bookingFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-medium text-beige-100 hover:bg-emerald-800"
                >
                  Request a Booking <ExternalLink size={15} />
                </a>
                <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm text-ink hover:border-gold-500 dark:border-beige-100/15 dark:text-beige-100">
                  View Services
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative flex items-center justify-center py-4 lg:col-span-2">
            <div className="absolute animate-slowspin text-emerald-800 dark:text-gold-300">
              <EightPointRose size={340} opacity={0.25} />
            </div>
            <div className="relative z-10 aspect-[4/5] w-64 overflow-hidden rounded-2xl border border-ink/10 shadow-xl shadow-emerald-950/10 dark:border-beige-100/10">
              <Image
                src="/images/khutbah-podium-3.jpg"
                alt="Abubakar, Abdulahi Olayinka speaking at Al-Mafaazat Central Mosque"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE STRIP */}
      <section className="border-y border-ink/10 bg-beige-100/50 py-5 dark:border-beige-100/10 dark:bg-emerald-950/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 text-xs font-medium text-ink/55 dark:text-beige-100/55">
          {["Conference Organisers", "Educational Institutions", "Mosques", "NGOs", "Schools", "Universities", "Media Organisations", "Community Groups"].map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Ways to work together"
            description="Six formats, each adapted to the audience in front of it."
          />
        </Reveal>
        <div className="mt-12">
          <ServiceCards />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-beige-100/60 py-24 dark:bg-emerald-950/40">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <SectionHeading eyebrow="Process" title="How booking works" />
          </Reveal>
          <div className="mt-14">
            <BookingTimeline />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Common questions" />
        </Reveal>
        <div className="mt-12">
          <FAQAccordion faqs={bookingFaqs} idPrefix="book-faq" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="rounded-3xl bg-emerald-900 p-10 text-center lg:p-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gold-300">Ready when you are</p>
            <h2 className="font-display text-2xl font-medium text-beige-100 sm:text-3xl">
              Let&apos;s plan your event.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-beige-100/70">
              Share your details in the booking form and expect a reply to start the conversation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={site.bookingFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-beige-100 px-7 py-3.5 text-sm font-medium text-emerald-900 hover:bg-white"
              >
                Request a Booking <ArrowRight size={15} />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-beige-100/30 px-7 py-3.5 text-sm text-beige-100"
              >
                <Mail size={15} /> Email Directly
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
