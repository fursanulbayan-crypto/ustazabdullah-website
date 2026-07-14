import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { EightPointRose } from "@/components/ui/EightPointRose";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-5 lg:items-center lg:pb-28 lg:pt-24">
        <div className="lg:col-span-3">
          <Reveal>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-gold-600 dark:text-gold-300">
              Chief Imam · Educator · Researcher · Lagos, Nigeria
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-[clamp(2.3rem,5vw,3.6rem)] font-medium leading-[1.08] tracking-tight text-ink dark:text-beige-100">
              Bridging Islamic Scholarship,{" "}
              <span className="italic text-emerald-800 dark:text-emerald-600">Education</span> and Research
              with Technology.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl leading-relaxed text-ink/65 dark:text-beige-100/65">
              ABUBAKAR, Abdulahi Olayinka (Ustaz Abdullah), an Islamic scholar, educator, researcher and
              public speaker dedicated to advancing Islamic education through research, teaching and
              technology. My work focuses on developing learners, empowering educators, and contributing to
              communities through authentic knowledge, educational innovation and lifelong learning.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="/research" className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3 text-sm font-medium text-beige-100 hover:bg-emerald-800">
                Explore My Work <ArrowRight size={15} />
              </a>
              <a href="/articles" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm text-ink hover:border-gold-500 dark:border-beige-100/15 dark:text-beige-100">
                Read Articles
              </a>
              <a href="/book" className="inline-flex items-center gap-1.5 text-sm text-emerald-800 underline underline-offset-4 dark:text-gold-300">
                Book Me for a Talk
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className="arabic mt-10 text-lg text-emerald-800 dark:text-gold-300">
              وَقُل رَّبِّ زِدْنِي عِلْمًا
            </p>
          </Reveal>
        </div>

        <div className="relative flex items-center justify-center py-8 lg:col-span-2">
          <div className="absolute animate-slowspin text-emerald-800 dark:text-gold-300">
            <EightPointRose size={380} opacity={0.3} />
          </div>
          <div className="relative z-10 h-56 w-56 overflow-hidden rounded-full border border-ink/10 shadow-xl shadow-emerald-950/10 dark:border-beige-100/10">
            <Image
              src="/images/portrait-hero.jpg"
              alt="Portrait of Abubakar, Abdulahi Olayinka"
              width={448}
              height={624}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -left-2 bottom-2 z-20 rounded-2xl border border-ink/10 bg-white px-4 py-3 text-xs shadow-lg shadow-emerald-950/10 dark:border-beige-100/10 dark:bg-emerald-900">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-wide text-ink/50 dark:text-beige-100/50">
              Jumu&apos;ah Khutbah
            </p>
            <p className="font-semibold text-ink dark:text-beige-100">Al-Mafaazat Central Mosque, Aboru</p>
          </div>
        </div>
      </div>
    </section>
  );
}
