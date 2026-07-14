import { Send, MessageSquare, ClipboardCheck, PenTool, Rocket } from "lucide-react";
import { bookingSteps } from "@/lib/booking";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: Record<string, any> = {
  send: Send,
  "message-square": MessageSquare,
  "clipboard-check": ClipboardCheck,
  "pen-tool": PenTool,
  rocket: Rocket,
};

export function BookingTimeline() {
  return (
    <div className="relative">
      <div
        className="absolute bottom-0 left-[19px] top-0 w-px bg-ink/10 dark:bg-beige-100/10 sm:left-[23px]"
        aria-hidden="true"
      />
      <div className="space-y-8">
        {bookingSteps.map((step, i) => {
          const Icon = ICONS[step.icon];
          return (
            <Reveal key={step.title} delay={i * 90}>
              <div className="relative flex gap-5">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-beige-50 text-emerald-800 dark:border-beige-100/10 dark:bg-emerald-950 dark:text-gold-300 sm:h-12 sm:w-12">
                  <Icon size={18} />
                </div>
                <div className="pt-1.5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gold-600 dark:text-gold-300">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink dark:text-beige-100">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-lg text-sm leading-relaxed text-ink/65 dark:text-beige-100/65">
                    {step.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
