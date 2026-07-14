import type { Metadata } from "next";
import {
  Landmark, BookOpen, Languages, Sparkles, Users, BarChart3, Mic, Laptop, Compass, Handshake, LineChart,
} from "lucide-react";
import { expertiseAreas } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Areas of expertise spanning Islamic Studies, education, research, leadership and educational technology.",
};

const ICONS: Record<string, any> = {
  landmark: Landmark, "book-open": BookOpen, languages: Languages, sparkles: Sparkles,
  users: Users, "bar-chart-3": BarChart3, mic: Mic, laptop: Laptop, compass: Compass,
  handshake: Handshake, "line-chart": LineChart,
};

export default function ExpertisePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Expertise"
          title="Eleven domains, one practice"
          description="Each area draws on the same discipline: verify the source, teach it clearly, and measure whether it worked."
        />
      </Reveal>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {expertiseAreas.map((e, i) => {
          const Icon = ICONS[e.icon];
          return (
            <Reveal key={e.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-ink/10 bg-white p-7 dark:border-beige-100/10 dark:bg-emerald-900/40">
                <Icon size={24} className="text-emerald-800 dark:text-gold-300" />
                <h2 className="mt-4 font-display text-xl font-semibold text-ink dark:text-beige-100">{e.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">{e.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
