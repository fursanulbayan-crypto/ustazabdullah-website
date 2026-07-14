import {
  Landmark, BookOpen, Languages, Sparkles, Users, BarChart3, Mic, Laptop, Compass, Handshake, LineChart,
} from "lucide-react";
import { expertiseAreas } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICONS: Record<string, any> = {
  landmark: Landmark,
  "book-open": BookOpen,
  languages: Languages,
  sparkles: Sparkles,
  users: Users,
  "bar-chart-3": BarChart3,
  mic: Mic,
  laptop: Laptop,
  compass: Compass,
  handshake: Handshake,
  "line-chart": LineChart,
};

export function ExpertiseGrid() {
  return (
    <section className="bg-beige-100/60 py-24 dark:bg-emerald-950/40" id="expertise">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Expertise" title="Eleven domains, one practice." />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseAreas.map((e, i) => {
            const Icon = ICONS[e.icon];
            return (
              <Reveal key={e.title} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-white p-6 transition-transform hover:-translate-y-1 dark:border-beige-100/10 dark:bg-emerald-900/40">
                  <Icon size={22} className="text-emerald-800 dark:text-gold-300" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-beige-100">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">{e.description}</p>
                  <div className="mt-4 h-px w-8 bg-gold-500" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
