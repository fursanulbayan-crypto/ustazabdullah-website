import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Invite Abubakar, Abdulahi Olayinka to speak on education, leadership, Islam, AI and youth development.",
};

const topics = ["Islamic Education", "Leadership", "AI in Education", "Teacher Development", "Parenting", "Youth Development"];

export default function SpeakingPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Speaking"
        title="Invite me to speak"
        description="Available for conferences, teacher training sessions, youth programmes and community events, in person or online."
      />
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="max-w-2xl leading-relaxed text-ink/70 dark:text-beige-100/70">
          Over 100 lectures delivered across mosques, schools and community platforms, from Friday khutbahs
          to conference keynotes. Each talk is built around the same conviction: that Islamic scholarship,
          sound pedagogy and thoughtful use of technology can reinforce one another rather than compete.
        </p>

        <h2 className="mt-12 font-display text-xl font-semibold text-ink dark:text-beige-100">Topics</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.map((t) => (
            <span key={t} className="rounded-full border border-ink/15 px-3.5 py-1.5 text-sm text-ink/70 dark:border-beige-100/15 dark:text-beige-100/70">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-ink/10 p-8 text-center dark:border-beige-100/10">
          <h2 className="font-display text-xl font-semibold text-ink dark:text-beige-100">Ready to book?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink/60 dark:text-beige-100/60">
            See services, the booking process and FAQs, then request a date through the booking form.
          </p>
          <Link
            href="/book"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3 text-sm font-medium text-beige-100 hover:bg-emerald-800"
          >
            Go to Booking Page <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
