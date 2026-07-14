import { Award, Users, Laptop, Compass } from "lucide-react";
import { academyFeatures } from "@/lib/academy";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: Record<string, any> = {
  award: Award,
  users: Users,
  laptop: Laptop,
  compass: Compass,
};

export function FeatureGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {academyFeatures.map((f, i) => {
        const Icon = ICONS[f.icon];
        return (
          <Reveal key={f.title} delay={i * 70}>
            <div className="h-full rounded-2xl border border-ink/10 p-6 dark:border-beige-100/10">
              <Icon size={22} className="text-emerald-800 dark:text-gold-300" />
              <h3 className="mt-4 font-display text-base font-semibold text-ink dark:text-beige-100">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">{f.detail}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
